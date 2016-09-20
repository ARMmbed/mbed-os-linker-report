#!/usr/bin/env php
<?php
/*
 * Copyright (c) 2016, ARM Limited, All Rights Reserved
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define('TOOL_PREFIX', 'arm-none-eabi-');
define('TOOL_NM_BIN', TOOL_PREFIX.'nm');
define('TOOL_NM_PAR', ' -l -S -C -f sysv ');

$map = array();
$seg = array();
/* initialize directory structure */
$dir = array();
$dir['name'] = 'mbed';
$dir['children'] = array();

/* filter file names */
$directory_map = array(
    getcwd().'/' => '',
    'mbed-os/features/FEATURE_UVISOR/importer/TARGET_IGNORE/uvisor/./' => './uvisor/',
    'HAL_CM4.S' => './mbed-os/rtos/rtx/TARGET_CORTEX_M/TARGET_RTOS_M4_M7/TOOLCHAIN_IAR/HAL_CM4.S',
);

/* show help */
if($argc == 1)
{
    fprintf(stderr, "usage: $argv[0] file1.elf ... fileN.elf".PHP_EOL);
    exit(1);
}

/* process all command line arguments - elf files */
unset($argv[0]);
foreach($argv as $elf_file)
    if(is_readable($elf_file))
        map_process($elf_file);
    else
    {
        fprintf(STDERR, "ERROR: unable to read from '$elf_file'".PHP_EOL);
        exit(2);
    }

/* sort resulting maps ... */
map_sort();
/* ... and output results */
echo json_encode($dir);

function map_set_dir_size($section, $filename, $objname, $size)
{
    global $dir;

    $ptr = &$dir['children'];
    /* make section header first path element */
    $path = explode('/',$filename);
    if($path[0]=='.')
        unset($path[0]);
    $path = array_merge(array($section), $path);

    foreach($path as $name)
    {
        if(!isset($ptr[$name]))
        {
            $ptr[$name]['name'] = $name;
            $ptr[$name]['children'] = array();
        }
        $ptr = &$ptr[$name]['children'];
    }

    if(isset($ptr[$objname]))
        $ptr[$objname]['size'] += $size;
    else
    {
        $ptr[$objname]['name'] = $objname;
        $ptr[$objname]['size'] = $size;
    }
}

function map_process($elffile)
{
    global $map, $seg, $directory_map;

    /* run NM on the elf file provided */
    $res = FALSE;
    $content = array();
    exec(
        escapeshellcmd(TOOL_NM_BIN).TOOL_NM_PAR.escapeshellarg($elffile),
        $content,
        $res
    );
    if($res)
    {
        fprintf(STDERR, "ERROR: failed to process '$elffile' using '".TOOL_NM_BIN."'".PHP_EOL);
        exit($res);
    }

    /* process each line of the NM-output */
    foreach($content as $line)
    {
        $line = explode('|',$line);
        if(count($line)!=7)
            continue;

        $val = Array();
        foreach($line as $item)
            $val[] = trim($item);
        $file = explode("\t",$val[6]);

        $obj = new stdClass();
        $obj->Name = $val[0];
        $obj->Address = hexdec($val[1]);
        $obj->Class = $val[2];
        $obj->Type = $val[3];
        $obj->Size = hexdec($val[4]);
        $obj->Section = trim($file[0]);

        if(!$obj->Size)
            continue;

        if(isset($file[1]))
        {
            $file = explode(':', trim($file[1]));

            $obj->File = strtr($file[0], $directory_map);
            $obj->Line = intval($file[1]);

            $map[$obj->File][$obj->Line] = $obj;
            map_set_dir_size(
                $obj->Section,
                $obj->File,
                $obj->Name,
                $obj->Size
            );
        }
        else
            map_set_dir_size(
                $obj->Section,
                './libc',
                $obj->Name,
                $obj->Size
            );

        $obj->Source = $elffile;

        if(isset($seg[$obj->Section]))
            $seg[$obj->Section] += $obj->Size;
        else
            $seg[$obj->Section] = $obj->Size;
    }
}

function map_sort_recursive($array)
{
    if(!isset($array['children']))
        return $array;

    $list = $array['children'];
    ksort($list);

    $children = array();
    foreach($list as $name => &$node)
        $children[] = map_sort_recursive($node); 

    $array['children'] = $children;
    return $array;
}

function map_sort()
{
    global $map, $seg, $dir;

    ksort($seg);
    ksort($map);
    $dir = map_sort_recursive($dir);
}

?>

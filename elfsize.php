#!/usr/bin/env php
<?php

define('FILE_OUT_FLARE', 'html/data-flare.json');

$map = array();
$seg = array();
/* initialize directory structure */
$dir = array();
$dir['name'] = 'mbed';
$dir['children'] = array();

/* filter file names */
$directory_map = array(
    getcwd().'/target/' => '',
    'mbed-os/features/FEATURE_UVISOR/importer/TARGET_IGNORE/uvisor/./' => './uvisor/',
    'HAL_CM4.S' => './mbed-os/rtos/rtx/TARGET_CORTEX_M/TARGET_RTOS_M4_M7/TOOLCHAIN_IAR/HAL_CM4.S',
);

/* process both map files */
map_process('main.map');
map_process('uvisor.map');
map_sort();

/* output results */
file_put_contents(FILE_OUT_FLARE, json_encode($dir));
//file_put_contents(FILE_OUT_FLARE, 'flare = '.json_encode($dir).';');

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

function map_process($mapfile)
{
    global $map, $seg, $directory_map;

    if(($content = file($mapfile))===FALSE)
        return FALSE;
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
        $obj->Source = $mapfile;

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

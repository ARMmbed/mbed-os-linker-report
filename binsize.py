#!/usr/bin/env python

from __future__ import print_function
from elfsize import add_node, output_to_file, default_op, default_datafile, repo_root
from collections import OrderedDict
from os import path
import sys

def main(output):
    root = OrderedDict({"name": "mbed", "children": []})

    # cycle through stdin
    for line in sys.stdin:
        # pass through to stdout
        print(line.strip())

        # filter for only relavent lines
        if line.startswith('|') and "Subtotals" not in line and '| Module' not in line and "---" not in line:
            # unpack the line
            l = line.strip().split('|')
            l = [x.strip() for x in l if x != '']
            obj_path, text_size, data_size, bss_size = l

            # trim the [lib] prefix
            if obj_path.startswith("[lib]"):
                obj_path = obj_path[6:]

            # generate 3 nodes for each file: .text, .data, .bss
            nodes = []

            text_size = int(text_size.split("(")[0])
            if text_size > 0:
                nodes.append((path.join('.text', obj_path), text_size))

            data_size = int(data_size.split("(")[0])
            if data_size > 0:
                nodes.append((path.join('.data', obj_path), data_size))

            bss_size = int(bss_size.split("(")[0])
            if bss_size > 0:
                nodes.append((path.join('.bss', obj_path), bss_size))

            for node in nodes:
                add_node(root, node[0], node[1])

    output_to_file(output, root)

if __name__ == '__main__':
    import argparse, webbrowser

    parser = argparse.ArgumentParser(
        description='Analyse mbed compile output from stdin and generate a json data file for visualisation')

    def output_arg(s):
        if path.isdir(s):
            s = path.join(s, default_datafile)
        return open(s, "wb")

    # specify arguments
    parser.add_argument('-o', '--output',    type = output_arg,
                        help = 'path of output json, defaults to {}, default filename \
                        to {} if a folder is specified'.format(default_op, default_datafile),
                        default = default_op)
    parser.add_argument('-b', '--browser',   action='store_true',
                        help = 'launch the pie chart visualisation in a browser')

    # get and validate arguments
    args = parser.parse_args()

    # parse input and write to output
    main(args.output)

    # close output file
    output_fn = path.abspath(args.output.name)
    args.output.close()

    print("[INFO] data written to", output_fn)

    if args.browser:
        uri = "file://" + path.join(repo_root, "index.html")
        print("[INFO] opening in browser", uri)
        webbrowser.open(uri, new=2)

#!/usr/bin/env python

from __future__ import print_function
from subprocess import check_output
from collections import OrderedDict
from os import path
import re, os, json

# arm-none-eabi-nm needs to be in the environment path
nm = "arm-none-eabi-nm"
nm_opts = "-l -S -C -f sysv"
default_datafile = "data-flare.js"
repo_root = path.dirname(path.abspath(__file__))
default_op = path.join(repo_root, "html", default_datafile)

def add_node(root, node_path, node_size):
    node = root
    added = 0
    for p in node_path.split(os.sep):
        children = node["children"]
        if p not in [x['name'] for x in children]:
            add = {"name": p, "children": []}
            children.append(add)
            added = 1
            node = children[-1]
        else:
            p_index = [x['name'] for x in children].index(p)
            node = children[p_index]

    if added:
        node.pop("children")
        node['size'] = node_size

def output_to_file(fd, root):
    # write dict as json to output file
    s = json.dumps(dict(root), indent=4)
    fd.seek(0)
    fd.write("var mbed_map = ")
    fd.write(s)
    fd.truncate()

def main(binaries, output):
    op = ""
    for binary in binaries:
        # run nm command on binary
        cmd = [nm] + nm_opts.split() + [binary]
        print(" ".join(cmd))
        op += check_output(cmd).strip()

    # parse output and store in dict
    root = OrderedDict({"name": "mbed", "children": []})
    for line in op.split('\n'):
        if '|' in line:
            l = [x.strip() for x in re.split("\||\t", line.strip())]
            if len(l) == 7:
                l.append('./libc')

            l[7] = path.join(l[6], path.relpath(path.abspath(l[7]), os.getcwd()).split(':')[0], l[0])

            try:
                node_size = int(l[4],16)
            except ValueError:
                continue;
            node_path = l[7]
            add_node(root, node_path, node_size)

    output_to_file(output, root)

if __name__ == '__main__':
    import argparse, webbrowser

    parser = argparse.ArgumentParser(
        description='Analyse binary built by gcc and generate json containing binary size information')

    def output_arg(s):
        if path.isdir(s):
            s = path.join(s, default_datafile)
        return open(s, "wb")

    # specify arguments
    parser.add_argument('-i', '--binary',    type = str, required = True, nargs = '*',
                        help = 'path to the binary. You can also specify multiple binaries: -i <path1> <path2>')
    parser.add_argument('-o', '--output',    type = output_arg,
                        help = 'path of output json, defaults to {}, default filename \
                        to {} if a folder is specified'.format(default_op, default_datafile),
                        default = default_op)
    parser.add_argument('-b', '--browser',   action='store_true',
                        help = 'launch the pie chart visualisation in a browser')

    # get and validate arguments
    args = parser.parse_args()

    # parse input and write to output
    main(args.binary, args.output)

    # close output file
    output_fn = path.abspath(args.output.name)
    args.output.close()

    print("[INFO] data written to", output_fn)

    if args.browser:
        uri = "file://" + path.join(repo_root, "index.html")
        print("[INFO] opening in browser", uri)
        webbrowser.open(uri, new=2)

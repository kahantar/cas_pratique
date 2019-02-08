#!/usr/bin/python
import sys
def replace(string):
    return string.replace('\\', "\\\\").replace('\'', "\'\\")

print(replace(sys.argv[1]))
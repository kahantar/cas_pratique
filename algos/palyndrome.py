#!/usr/bin/python
import sys
def palyndrome(string):
    for letter in string:
        if letter.isalpha() == False:
            string = string.replace(letter, '')
    string = string.lower()
    i = 0
    j = len(string) - 1
    while i < j:
        if string[i] != string[j]:
            return False
        i = i + 1
        j = j - 1
    return True
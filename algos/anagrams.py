#!/usr/bin/python
def anagrams(str1, str2):
    if len(str1) != len(str2):
        return False
    str1 = sorted(str1)
    str2 = sorted(str2)
    i = 0
    while i < len(str1):
        if str1[i] != str2[i]:
            return False
        i = i + 1
    return True

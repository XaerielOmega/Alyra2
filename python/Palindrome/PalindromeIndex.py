import list


def est_palindrome(string):
    string = string.casefold()
    string = string.replace(" ", "")

    for i in range(len(string) // 2):
        if string[i] != string[-1 - i]:
            return False
        else:
            return True



print(est_palindrome("radar"))

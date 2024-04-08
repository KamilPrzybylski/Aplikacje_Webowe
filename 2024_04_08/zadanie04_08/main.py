def wk_slowa(word):
    w = 0
    k = 0
    for letter in word:
        if letter == 'k':
            k += 1
        elif letter == 'w':
            w += 1
    if w == k:
        return True
    else:
        return False


def ile_wakacje(word):
    w, a, k, c, j, e = 0, 0, 0, 0, 0, 0
    for letter in word:
        if letter == 'w':
            w += 1
        elif letter == 'a':
            a += 1
        elif letter == 'k':
            k += 1
        elif letter == 'c':
            c += 1
        elif letter == 'j':
            j += 1
        elif letter == 'e':
            e += 1
    a = a//2
    minimum = min([w, a, k, c, j, e])

    return minimum

def wakacijne_slowo(word):
    czyzawierawakacje = False
    wakacje = "wakacje"
    i = 0
    ile_razy_wakacje = 0
    for letter in word:
        if letter == wakacje[i]:
            i += 1
        else:
            ile_razy_wakacje += 1
        if i >= len(wakacje):
            czyzawierawakacje = True
            i = 0

    if czyzawierawakacje:
        return ile_razy_wakacje + i
    return len(word)

with open('slowa.txt', 'rt') as plik:
    plikzapis = open('winiki4_1.txt', 'w')
    for line in plik:
        if wk_slowa(line):
            plikzapis.write(line)
    plikzapis.close()

with open('slowa.txt', 'rt') as plik:
    plikzapis2 = open('winiki4_2.txt', 'w')
    for line in plik:
        slowa = ile_wakacje(line)
        plikzapis2.write(str(slowa) + ' ')
    plikzapis2.close()

with open('slowa.txt', 'rt') as plik:
    plikzapis3 = open('winiki4_3.txt', 'w')
    for line in plik:
        line = line.strip()
        litery = wakacijne_slowo(line)
        plikzapis3.write(str(litery) + ' ')
    plikzapis3.close()
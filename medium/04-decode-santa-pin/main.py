def decodeSantaPin(code):
    n = len(code)
    digits = []
    i = 0

    while i < n:
        while i < n and code[i] != '[':
            i += 1
        if i >= n:
            break

        i += 1
        content = ""

        while i < n and code[i] != ']':
            content += code[i]
            i += 1

        if i >= n:
            return None

        i += 1

        if content == "":
            return None

        if content == "<":
            if len(digits) == 0:
                return None
            digits.append(digits[-1])

        else:
            first = content[0]
            if first < '0' or first > '9':
                return None

            value = int(first)
            ops = content[1:]

            for ch in ops:
                if ch not in ['+', '-']:
                    return None
                if ch == '+':
                    value = (value + 1) % 10
                else:
                    value = (value - 1 + 10) % 10

            digits.append(value)

    return None if len(digits) < 4 else "".join(str(d) for d in digits[:4])
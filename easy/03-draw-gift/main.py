def draw_gift(size, symbol):
    """
    Dibuja un "regalo" cuadrado de tamaño `size` usando `symbol` como borde.
    Devuelve cadena vacía si size < 2 o si symbol está vacío.
    """
    if size < 2:
        return ''

    sym = symbol[0] if symbol else ''
    if not sym:
        return ''

    top = sym * size
    middle = sym + ' ' * max(0, size - 2) + sym
    lines = [top] + [middle] * max(0, size - 2) + [top]
    return '\n'.join(lines)
def manufacture_gifts(gifts_to_produce):
  # Code here
    return [
        gift["toy"]
        for gift in gifts_to_produce
        for _ in range(max(0, int(gift.get("quantity", 0))))
    ]
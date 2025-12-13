# import these modules if you need them:
from datetime import datetime, timezone
# import math  # Not needed, so it stays commented

def time_until_take_off(from_time: str, take_off_time: str) -> int:
    
    def parse_time(elfo_str: str):
        s = elfo_str.strip()
        regex = r"^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2})\s*NP$"
        m = re.match(regex, s, re.IGNORECASE)

        if not m:
            raise ValueError("Invalid Elf NP datetime format")

        year, month, day, hour, minute, second = map(int, m.groups())
        dt = datetime(year, month, day, hour, minute, second, tzinfo=timezone.utc)
        return int(dt.timestamp() * 1000)  # milliseconds like Date.UTC

    import re  # inline import allowed in Advent of Code style

    from_ms = parse_time(from_time)
    to_ms = parse_time(take_off_time)

    return (to_ms - from_ms) // 1000
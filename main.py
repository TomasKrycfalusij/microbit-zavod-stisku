lock = "no"
timer = 3
for i in range(3):
    basic.show_number(timer)
    basic.pause(300)
    timer -= 1
basic.show_string("READY")

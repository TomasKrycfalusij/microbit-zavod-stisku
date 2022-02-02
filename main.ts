let lock = "no"
let timer = 3
for (let i = 0; i < 3; i++) {
    basic.showNumber(timer)
    basic.pause(300)
    timer -= 1
}
basic.showString("READY")

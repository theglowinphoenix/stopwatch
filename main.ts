let start = 0

basic.showString("Start Timer")

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    start = input.runningTime()
})

input.onButtonPressed(Button.B, function () {
    let elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        číslo1 += 1
        basic.showNumber(číslo1)
    }
    if (_switch == 1) {
        číslo2 += 1
        basic.showNumber(číslo2)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (OP == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (OP == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (OP == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    OP = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (OP == 0) {
            basic.showNumber(číslo1 + číslo2)
        } else {
            if (OP == 2) {
                basic.showNumber(číslo1 - číslo2)
            } else {
                if (OP == 3) {
                    basic.showNumber(číslo1 * číslo2)
                } else {
                    basic.showNumber(číslo1 / číslo2)
                }
            }
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let _switch = 0
let číslo2 = 0
let číslo1 = 0
let OP = 0
OP = 0
číslo1 = 0
číslo2 = 0
číslo1 = 0

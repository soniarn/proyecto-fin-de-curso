radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(lectura)
    basic.pause(100)
    basic.showNumber(lectura)
    basic.pause(100)
    basic.showNumber(lectura)
    basic.pause(100)
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(1)
})
let lectura = 0
radio.setGroup(19)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        lectura = pins.digitalReadPin(DigitalPin.P0)
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(0)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
    }
})

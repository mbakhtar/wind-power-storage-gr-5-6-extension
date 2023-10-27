fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.rightServo.fwdSetSpeed(0)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    basic.showNumber(Math.abs(turbinespeed))
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    chargeindicator += -1
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.rightServo.fwdSetSpeed(turbinespeed)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    chargeindicator += 1
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.rightServo.fwdSetSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
let chargeindicator = 0
basic.forever(function () {
    if (Math.abs(turbinespeed) < 40) {
        fwdSensors.ledRing.fwdSetPixelColour(Math.abs(chargeindicator), 0xffff00)
    } else {
        fwdSensors.ledRing.fwdSetPixelColour(Math.abs(chargeindicator), 0xff0000)
    }
    if (Math.abs(chargeindicator) > 7) {
        chargeindicator = 0
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})

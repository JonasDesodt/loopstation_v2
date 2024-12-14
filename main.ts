input.onButtonPressed(Button.A, function () {
    lijst.push(262)
})
input.onPinPressed(TouchPin.P2, function () {
    lijst.push(330)
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        for (let waarde of lijst) {
            key = waarde
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P5,
            EventBusValue.MICROBIT_BUTTON_EVT_UP
            )
            music.play(music.tonePlayable(waarde, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P5, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    if (key == 262) {
        basic.showString("C")
    } else if (key == 294) {
        basic.showString("D")
    } else if (key == 330) {
        basic.showString("E")
    } else {
        basic.showString("F")
    }
})
input.onButtonPressed(Button.B, function () {
    lijst.push(349)
})
input.onPinPressed(TouchPin.P1, function () {
    lijst.push(294)
})
let key = 0
let lijst: number[] = []
lijst = []
key = 0

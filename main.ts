input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    Lautstärke = 103
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("-")
    Lautstärke += -1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("+")
    Lautstärke += 1
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    music.setVolume(Lautstärke)
    music.play(music.stringPlayable("D G D A B C - G ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C E E C E E C C ", 120), music.PlaybackMode.UntilDone)
    music.playMelody("G G F F E E D - ", 120)
    music.playMelody("G G B G G B G G ", 120)
})
let Lautstärke = 0
let volume = Lautstärke

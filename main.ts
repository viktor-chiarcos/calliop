input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function on_pin_touch_p1() {
    
    Lautstärke = 103
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    
    basic.showString("-")
    Lautstärke += -1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function on_button_ab() {
    music.setVolume(Lautstärke)
    music.play(music.stringPlayable("D G D A B C - G ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C E E C E E C C ", 120), music.PlaybackMode.UntilDone)
    music.playMelody("G G F F E E D - ", 120)
    music.playMelody("G G B G G B G G ", 120)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    
    basic.showString("+")
    Lautstärke += 1
})
let Lautstärke = 0
let volume = Lautstärke

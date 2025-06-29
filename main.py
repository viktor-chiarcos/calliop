def on_pin_touch_p1():
    global Lautstärke
    Lautstärke = 103
input.on_pin_touch_event(TouchPin.P1, input.button_event_down(), on_pin_touch_p1)

def on_button_a():
    global Lautstärke
    basic.show_string("-")
    Lautstärke += -1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    music.set_volume(Lautstärke)
    music.play(music.string_playable("D G D A B C - G ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C E E C E E C C ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play_melody("G G F F E E D - ", 120)
    music.play_melody("G G B G G B G G ", 120)
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global Lautstärke
    basic.show_string("+")
    Lautstärke += 1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Lautstärke = 0
volume = Lautstärke
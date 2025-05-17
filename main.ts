basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
    Tinybit.RGB_Car_Program().show()
})

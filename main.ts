input.onButtonPressed(Button.A, function () {
    matrix.clear()
    matrix.Brightness(60)
    for (let Index = 0; Index <= text_list.length - 1; Index++) {
        matrix.showText("", 2, neopixel.colors(NeoPixelColors.White))
        matrix.show()
        basic.pause(200)
        matrix.scrollText(text_list[Index], 66, neopixel.hsv_picker(neopixel.rgb(randint(0, 100), randint(0, 100), randint(0, 100))))
        matrix.show()
    }
    matrix.Brightness(10)
    matrix.showText("xxxxxx", 0, neopixel.colors(NeoPixelColors.Blue))
    matrix.showText("*****", 0, neopixel.colors(NeoPixelColors.Orange))
})
input.onButtonPressed(Button.B, function () {
    matrix.Brightness(100)
    for (let index = 0; index < 10; index++) {
        matrix.clear()
        matrix.showText("", 2, neopixel.colors(NeoPixelColors.White))
        matrix.show()
        basic.pause(50)
        matrix.showText("*****", 0, neopixel.hsv_picker(neopixel.rgb(randint(0, 100), randint(0, 100), randint(0, 100))))
        matrix.show()
        basic.pause(300)
    }
    matrix.Brightness(10)
    matrix.showText("*****", 1, neopixel.colors(NeoPixelColors.Red))
})
let text_list: string[] = []
let matrix: neopixel.Matrix = null
matrix = neopixel.create_matrix(HiwonderPins.P2, matrixSizes.medium_32x8, PowerSource.Extern)
matrix.Brightness(46)
text_list = [
"Partys",
"Kinder ins Bett",
"befehlen",
"spenden",
"regieren",
"essen",
"PARTYS"
]
let symbollist = [
"!\"\"\"\"!",
"Kinder ins Bett",
"befehlen",
"spenden",
"regieren",
"essen",
"PARTYS"
]
let zahl = 0
matrix.showText("((*))", 1, neopixel.colors(NeoPixelColors.Red))

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program turns neopixels red if within 10cm, else turns them green if more than 10cm.
 */

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let distance = 0
let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// clear neopixels
neopixelStrip.clear()
neopixelStrip.show()

// When button A is pressed
input.onButtonPressed(Button.A, function () {
    // Read distance from the sonar in cm
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // If distance < 10 cm, turn all neopixels red
    if (distance < 10) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
    // Else (distance >= 10 cm), turn them green
    else {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    }

    // Show neopixels
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})

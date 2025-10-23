/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program ...
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

let currentDistance: Number = 0
let neopixelstrip : neopixel.Strip = null

input.onButtonPressed(Button.A, function()
{
    currentDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (currentDistance < 10)
    neopixelstrip
    

})




let lectura = 0
basic.forever(function () {
    lectura = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    lectura,
    1023
    )
    if (true) {
    	
    }
})
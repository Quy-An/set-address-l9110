let data = 0
for (let i = 0; i <= 69; i++) {
    pins.i2cWriteNumber(
    i,
    1,
    NumberFormat.Int8LE,
    false
    )
    data = pins.i2cReadNumber(i, NumberFormat.Int8LE, false)
    if (data == 1 && i > 63) {
        lcd.clearScreen()
        lcd.displayText(convertToText(i), 1, 1)
        basic.pause(1000)
    }
}
let address = 66
driver.setAddress(address)
pins.i2cWriteNumber(
address,
1,
NumberFormat.Int8LE,
false
)
data = pins.i2cReadNumber(address, NumberFormat.Int8LE, false)
if (data == 1) {
    lcd.clearScreen()
    lcd.displayText(convertToText(address), 1, 1)
    basic.pause(1000)
}
basic.forever(function () {
	
})

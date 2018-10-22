# gator:light Light Sensor

[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

The gator:starter, which includes the gator:light and gator:temp can be purchased [here.](https://www.sparkfun.com/products/14891)

![SparkFun gator:light](https://raw.githubusercontent.com/sparkfun/pxt-gator-light/master/icon.png)  

## ~ hint

To use this package, go to https://makecode.microbit.org, click ``Add package`` and search for **gator-light**.

## ~

## Basic usage

```blocks
//Sets the value of the light variable to the value read from the gator:light
let light = 0
light = gatorlight.light(AnalogPin.P0, gatorlightType.Lux)
```

Use ``||Get light on pin||`` to read the light value from a gator:light sensor attached to a given pin in lux or the straight ADC value.

```blocks
//Read light value and write it to the micro:bit screen as a bar graph.
let light = 0
basic.forever(function () {
    light = gatorlight.light(AnalogPin.P0, gatorlightType.Lux)
    led.plotBarGraph(
        light,
        1023
    )
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatorlight=github:sparkfun/pxt-gator-light
```
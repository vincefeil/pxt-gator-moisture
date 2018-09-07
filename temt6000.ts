/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun temt6000 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the temt6000 sensor
 */

 enum temt6000Type{
	 Lux=1,
	 adcVal=2,
 }



//% color=#f44242 icon="\uf185"
namespace temt6000 {

    // Functions for reading light from the temt6000 in lux or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="temt6000_temp" block="Get light on pin %pin | in %temt6000Type"
    export function temp(pin: AnalogPin, type: temt6000Type): number{
      let ADCVal = pins.analogReadPin(pin)
      switch(type){
        case temt6000Type.Lux: return getLux(ADCVal)
        case temt6000Type.adcVal: return ADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in temt6000.cpp
     */
    //% shim=temt6000::getLux
    function getLux(ADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }

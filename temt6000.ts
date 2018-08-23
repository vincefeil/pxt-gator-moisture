 /**
* Mary West @ SparkFun Electronics
* July 3, 2017
* https://github.com/sparkfun/pxt-tmp36

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun TMP36 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the TMP36 sensor
 */

 enum temt6000Type{
	 Lux=1,
	 adcVal=2,
 }



//% color=#f44242 icon="\u26C8"
namespace temt6000 {

    // Functions for reading light from the TEMT6000

    /**
    * Reads the number
    */
    //% weight=30 blockId="temt6000_light" block="Get light value on %pin | in %temt6000Type"
    export function temp(pin: AnalogPin, type: temt6000Type): number{
      let lightADCVal = pins.analogReadPin(pin)
      switch(type){
        case temt6000Type.Lux: return getLight(lightADCVal)
        case temt6000Type.adcVal: return lightADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in temt6000.cpp
     */
    //% shim=temt6000::getLight
    function getLight(lightADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }

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
	 C=1,
	 adcVal=2,
 }



//% color=#f44242 icon="\u26C8"
namespace temt6000 {

    // Functions for reading temperature from the temt6000 in degrees C or F

    /**
    * Reads the number
    */
    //% weight=30 blockId="temt6000_temp" block="Get Temperature on pin %pin | in %temt6000Type"
    export function temp(pin: AnalogPin, type: temt6000Type): number{
      let tempADCVal = pins.analogReadPin(pin)
      switch(type){
        case temt6000Type.C: return getDegC(tempADCVal)
        case temt6000Type.adcVal: return tempADCVal
        default: return -11111111
      }
    }


	/**
     * Function used for simulator, actual implementation is in temt6000.cpp
     */
    //% shim=temt6000::getDegC
    function getDegC(tempADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }

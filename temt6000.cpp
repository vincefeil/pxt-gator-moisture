/**
* Mary West @ SparkFun Electronics
* Juuly 3, 2017
* https://github.com/sparkfun/pxt-tmp36
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun TMP36 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

namespace temt6000 {
    /*
    * Calculates the light in Lux based on the ADC value passed in. 1 step in adcVal is equal to .488 uA at 5V
    */
    //%
    uint16_t getLux(int16_t ADCVal) {

        return ADCVal * .976;
    }

}

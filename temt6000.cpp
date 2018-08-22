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
    * Converts the light value into an estimation of lux
    */
    //%
    uint16_t getLight(int16_t lightADCVal) {

        return (((lightADCVal*3.3/1023)-0.5) *100.0)*(9.0/5.0)+32.0;
    }
}

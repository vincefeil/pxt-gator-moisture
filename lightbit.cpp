#include "pxt.h"

using namespace pxt;
namespace lightbit {
    
	//%
    uint16_t getDegC(int16_t tempADCVal) {

        return ((tempADCVal*3.3/1023)-0.5) *100.0;
    }

	/*
    * Calculates the temeprature in degrees F based on the ADC value passed in.
    */
    //%
    uint16_t getDegF(int16_t tempADCVal) {

        return (((tempADCVal*3.3/1023)-0.5) *100.0)*(9.0/5.0)+32.0;
    }
}

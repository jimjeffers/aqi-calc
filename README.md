AQI Calc
===

Easily convert pollutant measurements into AQI values per the [EPA's blue scale](https://forum.airnowtech.org/t/the-aqi-equation/169). For additional references on how
AQI is calculated see the thoughtful documentation on Wikipedia for [Computing the AQI](https://en.wikipedia.org/wiki/Air_quality_index#Computing_the_AQI). Also, for a complete
reference on all of the official break points view the official [EPA AQI Breakpoints page](https://aqs.epa.gov/aqsweb/documents/codetables/aqi_breakpoints.html).

Usage
-----

```js
import { AQSample, calculateAQI, Substance, TemperatureScale, Unit } from "aqi-calc"

const sample: AQSample = {
  substance: Substance.Ozone,
  unit: Unit.PPM,
  value: 0.055,
  temperature:{
    value: 25,
    scale: TemperatureScale.Celcius
  },
  interval: "8H"
}

console.log(calculateAQI(sample)) 
// => {aqi: 51, description: "Moderate", hexColor: "#ff0"}
```

Defining an Air Quality Sample:
-------------------------------

To convert a reading simply provide the input amount, the substance, 
and the unit the input amount represents. See the types below for
supported values:

```js

enum Substance {
  CarbonMonoxide = "CO",
  NitrousDioxide = "NO2",
  Ozone = "O3",
  SulfurDioxide = "SO2",
  FineParticles = "PM2_5",
  CoarseParticles = "PM10"
}

enum Unit {
  PPM = "PPM",
  PPB = "PPB",
  UG_M3 = "ug/m3"
}

enum Interval {
  OneHour = "1H",
  EightHour = "8H",
  Day = "24H"
}

interface ISample = {
  substance: Substance,
  interval: Interval,
  amount: number,
  unit: Unit,
  temperature?: ITemperature
}
```

Defining the Temperature:
-------------------------

The ambient temperature where the reading occured affects the air density and thus
the AQI calculations. If you do not know the temperature a default environment
assuming 25C will be used during any conversions.

```js
enum TemperatureScale {
  Farhenheit = "F",
  Celcius = "C"
}

interface ITemperature = {
  value: number,
  scale: TemperatureScale
}
```

Result Output:
--------------

The ouput of the calculateAQI method is returned as an `AQIResult` type which
defines the resulting AQI along with the corresponding description and hex color
for the matching break point:

```js
enum AirQualityDescription {
  Good = "Good",
  Moderate = "Moderate",
  Sensitive = "Unhealthy For Sensitive",
  Unhealthy = "Unhealthy",
  VeryUnhealthy = "Very Unhealthy",
  Hazardous = "Hazardous",
  None = "NONE"
}

type AQIResult = {
  aqi: number,
  description: AirQualityDescription,
  hexColor: string
}
```
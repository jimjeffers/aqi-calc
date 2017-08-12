AQI
===

Easily convert pollutant measurements into AQI values per the [EPA's blue scale](https://forum.airnowtech.org/t/the-aqi-equation/169).

Usage
-----

```js
import {calculateAQI} from "aqi"
import type { Pollutant, Environment } from "aqi"

const sample: Pollutant = {
  metric: "O3",
  unit: "PPM",
  value: 0.055
}

const environment: Environment = {
  temperature: 25,
  unit: "C"
}

console.log(calculateAQI(sample, environment)) // 51
```

Defining a Pollutant Sample:
----------------------------

To convert a reading simply provide the input amount, the substance, 
and the unit the input amount represents. See the flow types below for
supported values:

```js
type Substance =
  | "BENZENE"
  | "C6H5"
  | "NO"
  | "NO2"
  | "O3"
  | "PM2_5"
  | "PM10"

type Unit = "PPM" | "PPB" | "ug/m3"

type Pollutant = {
  substance: Substance,
  amount: number,
  unit: Unit
}
```

Defining the Environment:
-------------------------

The ambient temperature where the reading occured affects the air density and thus
the AQI calculations. If you do not know the temperature a default environment
assuming 25C will be used during any conversions. To specify an environment refer
to the flow type definitions used within the project.

```js
type TemperatureScale = "F" | "C"

type Environment = {
  temperature: number,
  unit: TemperatureScale
}
```
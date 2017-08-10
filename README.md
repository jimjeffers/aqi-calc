AQI
===

Easily convert pollutant measurements into AQI values per the [EPA's blue scale](https://forum.airnowtech.org/t/the-aqi-equation/169).

Usage
-----

```js
import AQI from "aqi"
import type { Pollutant } from "aqi"

const pm2_5: Pollutant = {
  metric: "PM2.5",
  unit: "PPM",
  value: 12.1
}

AQI.calculate(pm2_5) // 51
```
//@flow

import type { RangeValues } from "./types"

const rangeValues: RangeValues = {
  NO: [],
  NO2: [],
  BENZENE: [],
  O3: [],
  SO2: [],
  C6H5: [
    {
      aqiLevel: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentration: { unit: "PPM", range: { high: 0.054, low: 0 } }
    },
    {
      aqiLevel: { high: 150, low: 101 },
      aqiDescription: "Sensitive",
      concentration: { unit: "PPM", range: { high: 0.07, low: 0.055 } }
    },
    {
      aqiLevel: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentration: { unit: "PPM", range: { high: 0.085, low: 0.071 } }
    },
    {
      aqiLevel: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentration: { unit: "PPM", range: { high: 0.105, low: 0.086 } }
    },
    {
      aqiLevel: { high: 500, low: 301 },
      aqiDescription: "Hazardous",
      concentration: { unit: "PPM", range: { high: 0.2, low: 0.106 } }
    }
  ],
  PM2_5: [
    {
      aqiLevel: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentration: { unit: "ug/m3", range: { high: 12, low: 0 } }
    },
    {
      aqiLevel: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentration: { unit: "ug/m3", range: { high: 35.4, low: 12.1 } }
    },
    {
      aqiLevel: { high: 150, low: 101 },
      aqiDescription: "Sensitive",
      concentration: { unit: "ug/m3", range: { high: 55.4, low: 35.5 } }
    },
    {
      aqiLevel: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentration: { unit: "ug/m3", range: { high: 150.4, low: 55.5 } }
    },
    {
      aqiLevel: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentration: { unit: "ug/m3", range: { high: 250.4, low: 150.5 } }
    },
    {
      aqiLevel: { high: 500, low: 301 },
      aqiDescription: "Hazardous",
      concentration: { unit: "ug/m3", range: { high: 500.4, low: 250.5 } }
    }
  ],
  PM10: [
    {
      aqiLevel: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentration: { unit: "ug/m3", range: { high: 54, low: 0 } }
    },
    {
      aqiLevel: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentration: { unit: "ug/m3", range: { high: 154, low: 55 } }
    },
    {
      aqiLevel: { high: 150, low: 101 },
      aqiDescription: "Sensitive",
      concentration: { unit: "ug/m3", range: { high: 254, low: 155 } }
    },
    {
      aqiLevel: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentration: { unit: "ug/m3", range: { high: 354, low: 255 } }
    },
    {
      aqiLevel: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentration: { unit: "ug/m3", range: { high: 424, low: 355 } }
    },
    {
      aqiLevel: { high: 500, low: 301 },
      aqiDescription: "Hazardous",
      concentration: { unit: "ug/m3", range: { high: 604, low: 425 } }
    }
  ]
}

export default rangeValues

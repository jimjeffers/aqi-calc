//@flow

import type { AQIBreakPoints } from "./types"

const breakpoints: AQIBreakPoints = {
  CO: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentrations: [
        { unit: "PPM", range: { high: 4.4, low: 0 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentrations: [
        { unit: "PPM", range: { high: 9.4, low: 4.5 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: "Unhealthy For Sensitive",
      concentrations: [
        { unit: "PPM", range: { high: 12.4, low: 9.5 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentrations: [
        { unit: "PPM", range: { high: 15.4, low: 12.5 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentrations: [
        { unit: "PPM", range: { high: 30.4, low: 15.5 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPM", range: { high: 40.4, low: 30.5 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPM", range: { high: 50.4, low: 40.5 }, interval: "8H" }
      ]
    }
  ],
  NO2: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentrations: [
        { unit: "PPB", range: { high: 53, low: 0 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentrations: [
        { unit: "PPB", range: { high: 100, low: 54 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: "Unhealthy For Sensitive",
      concentrations: [
        { unit: "PPB", range: { high: 360, low: 101 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentrations: [
        { unit: "PPB", range: { high: 649, low: 361 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentrations: [
        { unit: "PPB", range: { high: 1249, low: 650 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPB", range: { high: 1649, low: 1250 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPB", range: { high: 2049, low: 1650 }, interval: "1H" }
      ]
    }
  ],
  SO2: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentrations: [
        { unit: "PPB", range: { high: 35, low: 0 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentrations: [
        { unit: "PPB", range: { high: 75, low: 36 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: "Unhealthy For Sensitive",
      concentrations: [
        { unit: "PPB", range: { high: 185, low: 76 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentrations: [
        { unit: "PPB", range: { high: 304, low: 186 }, interval: "1H" }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentrations: [
        { unit: "PPB", range: { high: 604, low: 305 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPB", range: { high: 804, low: 605 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPB", range: { high: 1004, low: 805 }, interval: "24H" }
      ]
    }
  ],
  O3: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentrations: [
        { unit: "PPM", range: { high: 0.054, low: 0 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentrations: [
        { unit: "PPM", range: { high: 0.07, low: 0.055 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: "Unhealthy For Sensitive",
      concentrations: [
        { unit: "PPM", range: { high: 0.164, low: 0.125 }, interval: "1H" },
        { unit: "PPM", range: { high: 0.085, low: 0.071 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentrations: [
        { unit: "PPM", range: { high: 0.204, low: 0.165 }, interval: "1H" },
        { unit: "PPM", range: { high: 0.105, low: 0.086 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentrations: [
        { unit: "PPM", range: { high: 0.404, low: 0.205 }, interval: "1H" },
        { unit: "PPM", range: { high: 0.2, low: 0.106 }, interval: "8H" }
      ]
    },
    {
      aqi: { high: 500, low: 301 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "PPM", range: { high: 0.604, low: 0.405 }, interval: "1H" }
      ]
    }
  ],
  PM2_5: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentrations: [
        { unit: "ug/m3", range: { high: 12, low: 0 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentrations: [
        { unit: "ug/m3", range: { high: 35.4, low: 12.1 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: "Unhealthy For Sensitive",
      concentrations: [
        { unit: "ug/m3", range: { high: 55.4, low: 35.5 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentrations: [
        { unit: "ug/m3", range: { high: 150.4, low: 55.5 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentrations: [
        { unit: "ug/m3", range: { high: 250.4, low: 150.5 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 500, low: 301 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "ug/m3", range: { high: 500.4, low: 250.5 }, interval: "24H" }
      ]
    }
  ],
  PM10: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: "Good",
      concentrations: [
        { unit: "ug/m3", range: { high: 54, low: 0 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: "Moderate",
      concentrations: [
        { unit: "ug/m3", range: { high: 154, low: 55 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: "Unhealthy For Sensitive",
      concentrations: [
        { unit: "ug/m3", range: { high: 254, low: 155 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: "Unhealthy",
      concentrations: [
        { unit: "ug/m3", range: { high: 354, low: 255 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: "Very Unhealthy",
      concentrations: [
        { unit: "ug/m3", range: { high: 424, low: 355 }, interval: "24H" }
      ]
    },
    {
      aqi: { high: 500, low: 301 },
      aqiDescription: "Hazardous",
      concentrations: [
        { unit: "ug/m3", range: { high: 604, low: 425 }, interval: "24H" }
      ]
    }
  ]
}

export default breakpoints

import { AirQualityDescription, IBreakPointMap, Interval, Unit } from "./types"

/* tslint:disable object-literal-sort-keys */
const breakpoints: IBreakPointMap = {
  CO: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: AirQualityDescription.Good,
      concentrations: [
        { unit: Unit.PPM, range: { high: 4.4, low: 0 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: AirQualityDescription.Moderate,
      concentrations: [
        { unit: Unit.PPM, range: { high: 9.4, low: 4.5 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: AirQualityDescription.Sensitive,
      concentrations: [
        { unit: Unit.PPM, range: { high: 12.4, low: 9.5 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: AirQualityDescription.Unhealthy,
      concentrations: [
        { unit: Unit.PPM, range: { high: 15.4, low: 12.5 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: AirQualityDescription.VeryUnhealthy,
      concentrations: [
        { unit: Unit.PPM, range: { high: 30.4, low: 15.5 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPM, range: { high: 40.4, low: 30.5 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPM, range: { high: 50.4, low: 40.5 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 999, low: 501 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPM, range: { high: 99999, low: 50.5 }, interval: Interval.EightHour }
      ]
    }
  ],
  NO2: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: AirQualityDescription.Good,
      concentrations: [
        { unit: Unit.PPB, range: { high: 53, low: 0 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: AirQualityDescription.Moderate,
      concentrations: [
        { unit: Unit.PPB, range: { high: 100, low: 54 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: AirQualityDescription.Sensitive,
      concentrations: [
        { unit: Unit.PPB, range: { high: 360, low: 101 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: AirQualityDescription.Unhealthy,
      concentrations: [
        { unit: Unit.PPB, range: { high: 649, low: 361 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: AirQualityDescription.VeryUnhealthy,
      concentrations: [
        { unit: Unit.PPB, range: { high: 1249, low: 650 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPB, range: { high: 1649, low: 1250 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPB, range: { high: 2049, low: 1650 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 99999, low: 501 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPB, range: { high: 99999, low: 2050 }, interval: Interval.OneHour }
      ]
    }
  ],
  SO2: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: AirQualityDescription.Good,
      concentrations: [
        { unit: Unit.PPB, range: { high: 35, low: 0 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: AirQualityDescription.Moderate,
      concentrations: [
        { unit: Unit.PPB, range: { high: 75, low: 36 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: AirQualityDescription.Sensitive,
      concentrations: [
        { unit: Unit.PPB, range: { high: 185, low: 76 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: AirQualityDescription.Unhealthy,
      concentrations: [
        { unit: Unit.PPB, range: { high: 304, low: 186 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: -1, low: -1 },
      aqiDescription: AirQualityDescription.None,
      concentrations: [
        { unit: Unit.PPB, range: { high: 304, low: 0 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: AirQualityDescription.VeryUnhealthy,
      concentrations: [
        { unit: Unit.PPB, range: { high: 604, low: 305 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPB, range: { high: 804, low: 605 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPB, range: { high: 1004, low: 805 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 501, low: 999 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPB, range: { high: 99999, low: 1005 }, interval: Interval.Day }
      ]
    }
  ],
  O3: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: AirQualityDescription.Good,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.054, low: 0 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: AirQualityDescription.Moderate,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.07, low: 0.055 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: AirQualityDescription.Sensitive,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.164, low: 0.125 }, interval: Interval.OneHour },
        { unit: Unit.PPM, range: { high: 0.085, low: 0.071 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: AirQualityDescription.Unhealthy,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.204, low: 0.165 }, interval: Interval.OneHour },
        { unit: Unit.PPM, range: { high: 0.105, low: 0.086 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: AirQualityDescription.VeryUnhealthy,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.404, low: 0.205 }, interval: Interval.OneHour },
        { unit: Unit.PPM, range: { high: 0.2, low: 0.106 }, interval: Interval.EightHour }
      ]
    },
    {
      aqi: { high: 500, low: 301 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.604, low: 0.405 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: 999, low: 501 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.PPM, range: { high: 99999, low: 0.505 }, interval: Interval.OneHour }
      ]
    },
    {
      aqi: { high: -1, low: -1 },
      aqiDescription: AirQualityDescription.None,
      concentrations: [
        { unit: Unit.PPM, range: { high: 0.124, low: 0 }, interval: Interval.OneHour },
        { unit: Unit.PPM, range: { high: 99999, low: 0.505 }, interval: Interval.EightHour }
      ]
    }
  ],
  PM2_5: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: AirQualityDescription.Good,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 12, low: 0 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: AirQualityDescription.Moderate,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 35.4, low: 12.1 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: AirQualityDescription.Sensitive,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 55.4, low: 35.5 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: AirQualityDescription.Unhealthy,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 150.4, low: 55.5 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: AirQualityDescription.VeryUnhealthy,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 250.4, low: 150.5 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 350.4, low: 250.5 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 500.4, low: 350.5 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 999, low: 501 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 99999.9, low: 500.5 }, interval: Interval.Day }
      ]
    }
  ],
  PM10: [
    {
      aqi: { high: 50, low: 0 },
      aqiDescription: AirQualityDescription.Good,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 54, low: 0 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 100, low: 51 },
      aqiDescription: AirQualityDescription.Moderate,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 154, low: 55 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 150, low: 101 },
      aqiDescription: AirQualityDescription.Sensitive,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 254, low: 155 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 200, low: 151 },
      aqiDescription: AirQualityDescription.Unhealthy,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 354, low: 255 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 300, low: 201 },
      aqiDescription: AirQualityDescription.VeryUnhealthy,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 424, low: 355 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 400, low: 301 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 504, low: 425 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 500, low: 401 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 604, low: 505 }, interval: Interval.Day }
      ]
    },
    {
      aqi: { high: 999, low: 501 },
      aqiDescription: AirQualityDescription.Hazardous,
      concentrations: [
        { unit: Unit.UG_M3, range: { high: 99999, low: 605 }, interval: Interval.Day }
      ]
    }
  ]
}
/* tslint:enable object-literal-sort-keys */

export default breakpoints

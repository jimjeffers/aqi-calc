//@flow
import { aqiBreakpointForSample } from "./pollutantRange"
import { convertReadingToUnit } from "./conversions"
import type { AQSample, AQIResult } from "./types"

const COLOR_CODES = {
  Good: "#00e400",
  Moderate: "#ff0",
  "Unhealthy For Sensitive": "#ff7e00",
  Unhealthy: "#f00",
  "Very Unhealthy": "#99004c",
  Hazardous: "#7e0023"
}

const calculateAQI = (sample: AQSample): ?AQIResult => {
  if (!sample.interval) {
    throw new Error("Must provide an interval of 1H | 8H | 24H")
  }
  if (!sample.temperature) {
    sample.temperature = {
      value: 25,
      unit: "C"
    }
  }
  const result = aqiBreakpointForSample(sample)
  if (result) {
    const { concentration, aqiLevel } = result
    const input = convertReadingToUnit(sample, concentration.unit)
    const aqi =
      (aqiLevel.aqi.high - aqiLevel.aqi.low) /
        (concentration.range.high - concentration.range.low) *
        (input - concentration.range.low) +
      aqiLevel.aqi.low
    return {
      aqi,
      description: aqiLevel.aqiDescription,
      hexColor: COLOR_CODES[aqiLevel.aqiDescription]
    }
  }
  return null
}

export default calculateAQI

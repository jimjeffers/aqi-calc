import { aqiBreakpointForSample } from "./aqiBreakpointForSample"
import { convertReadingToUnit } from "./conversions"
import {
  AirQualityDescription,
  IResult,
  ISample,
  TemperatureScale
} from "./types"

const colorForDescription = (description: AirQualityDescription): string => {
  switch (description) {
    case AirQualityDescription.Good:
      return "#00e400"
    case AirQualityDescription.Moderate:
      return "#ff0"
    case AirQualityDescription.Sensitive:
      return "#ff7e00"
    case AirQualityDescription.Unhealthy:
      return "#f00"
    case AirQualityDescription.VeryUnhealthy:
      return "#99004c"
    case AirQualityDescription.Hazardous:
      return "#7e0023"
    case AirQualityDescription.None:
      return "#000"
  }
}

const calculateAQI = (sample: ISample): IResult => {
  if (!sample.interval) {
    throw new Error("Must provide an interval of 1H | 8H | 24H")
  }
  if (!sample.temperature) {
    sample.temperature = {
      scale: TemperatureScale.Celcius,
      value: 25
    }
  }
  const result = aqiBreakpointForSample(sample)
  if (result) {
    const { concentration, aqiLevel } = result
    const input = convertReadingToUnit(sample, concentration.unit)
    const aqi =
      ((aqiLevel.aqi.high - aqiLevel.aqi.low) /
        (concentration.range.high - concentration.range.low)) *
        (input - concentration.range.low) +
      aqiLevel.aqi.low
    return {
      aqi,
      description: aqiLevel.aqiDescription,
      hexColor: colorForDescription(aqiLevel.aqiDescription)
    }
  }
  return {
    aqi: -1,
    description: AirQualityDescription.None,
    hexColor: colorForDescription(AirQualityDescription.None)
  }
}

export default calculateAQI

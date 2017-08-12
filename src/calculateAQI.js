//@flow
import { pollutantRange } from "./pollutantRange"
import { convertReadingToUnit } from "./conversions"
import type { Pollutant, Environment } from "./types"

const calculateAQI = (
  pollutant: Pollutant,
  environment: ?Environment
): ?number => {
  const usableEnvironment: Environment = environment || {
    temperature: 25,
    unit: "C"
  }
  const result = pollutantRange(pollutant, usableEnvironment)
  if (result) {
    const { concentration, aqiLevel } = result
    const input = convertReadingToUnit(
      pollutant,
      usableEnvironment,
      concentration.unit
    )
    return (
      (aqiLevel.high - aqiLevel.low) /
        (concentration.range.high - concentration.range.low) *
        (input - concentration.range.low) +
      aqiLevel.low
    )
  }
  return null
}

export default calculateAQI

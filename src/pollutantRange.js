//@flow
import rangeValues from "./rangeValues"
import { convertReadingToUnit } from "./conversions"
import type {
  AQSample,
  AQILevel,
  AQISearchResult,
  Substance,
  Concentration
} from "./types"

export const valuesForSubstance = (substance: Substance): Array<AQILevel> =>
  rangeValues[substance]

export const maxForSubstance = (substance: Substance): ?AQILevel => {
  const values = valuesForSubstance(substance)
  return valuesForSubstance(substance).length > 0
    ? values[values.length - 1]
    : null
}

export const applicableConcentration = (
  sample: AQSample,
  { concentrations }: AQILevel
): Array<Concentration> =>
  concentrations.filter(
    ({ range: { high, low }, unit, interval }: Concentration): boolean => {
      if (interval != sample.interval) {
        return false
      }
      const value = convertReadingToUnit(sample, unit)
      return value <= high && value >= low
    }
  )

export const valueWithinRange = (
  sample: AQSample,
  aqiLevel: AQILevel
): boolean => applicableConcentration(sample, aqiLevel).length > 0

export const aqiLevelForSample = (sample: AQSample): ?AQISearchResult => {
  const aqiLevel = valuesForSubstance(sample.substance).filter(range =>
    valueWithinRange(sample, range)
  )[0]
  if (aqiLevel) {
    return {
      aqiLevel,
      concentration: applicableConcentration(sample, aqiLevel)[0]
    }
  }
}

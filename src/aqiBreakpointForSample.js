//@flow
import breakpoints from "./breakpoints"
import { convertReadingToUnit } from "./conversions"
import type {
  AQSample,
  AQIBreakPoint,
  AQISearchResult,
  Substance,
  Concentration
} from "./types"

export const breakpointsForSubstance = (
  substance: Substance
): Array<AQIBreakPoint> => breakpoints[substance]

export const maxForSubstance = (substance: Substance): ?AQIBreakPoint => {
  const values = breakpointsForSubstance(substance)
  return breakpointsForSubstance(substance).length > 0
    ? values[values.length - 1]
    : null
}

export const applicableConcentration = (
  sample: AQSample,
  { concentrations }: AQIBreakPoint
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
  aqiLevel: AQIBreakPoint
): boolean => applicableConcentration(sample, aqiLevel).length > 0

export const aqiBreakpointForSample = (sample: AQSample): ?AQISearchResult => {
  const aqiLevel = breakpointsForSubstance(sample.substance).filter(range =>
    valueWithinRange(sample, range)
  )[0]
  if (aqiLevel) {
    return {
      aqiLevel,
      concentration: applicableConcentration(sample, aqiLevel)[0]
    }
  }
}

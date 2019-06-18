import breakpoints from "./breakpoints"
import { convertReadingToUnit } from "./conversions"
import {
  IBreakPoint,
  IConcentration,
  ISample,
  ISearchResult,
  Substance
} from "./types"

export const breakpointsForSubstance = (substance: Substance): IBreakPoint[] =>
  breakpoints[substance]

export const maxForSubstance = (substance: Substance): IBreakPoint | null => {
  const values = breakpointsForSubstance(substance)
  return breakpointsForSubstance(substance).length > 0
    ? values[values.length - 1]
    : null
}

export const applicableConcentration = (
  sample: ISample,
  { concentrations }: IBreakPoint
): IConcentration[] =>
  concentrations.filter(
    ({ range: { high, low }, unit, interval }: IConcentration): boolean => {
      if (interval !== sample.interval) {
        return false
      }
      const value = convertReadingToUnit(sample, unit)
      return value <= high && value >= low
    }
  )

export const valueWithinRange = (
  sample: ISample,
  aqiLevel: IBreakPoint
): boolean => applicableConcentration(sample, aqiLevel).length > 0

export const aqiBreakpointForSample = (
  sample: ISample
): ISearchResult | null => {
  const aqiLevel = breakpointsForSubstance(sample.substance).filter(range =>
    valueWithinRange(sample, range)
  )[0]
  if (aqiLevel) {
    return {
      aqiLevel,
      concentration: applicableConcentration(sample, aqiLevel)[0]
    }
  }
  return null
}

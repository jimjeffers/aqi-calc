//@flow
import rangeValues from "./rangeValues"
import { convertReadingToUnit } from "./conversions"
import type { Pollutant, PollutantRange, Substance, Environment } from "./types"

export const valuesForSubstance = (
  substance: Substance
): Array<PollutantRange> => rangeValues[substance]

export const maxForSubstance = (substance: Substance): ?PollutantRange => {
  const values = valuesForSubstance(substance)
  return valuesForSubstance(substance).length > 0
    ? values[values.length - 1]
    : null
}

export const valueWithinRange = (
  pollutant: Pollutant,
  environment: Environment,
  { concentration: { range: { high, low }, unit } }: PollutantRange
): boolean => {
  const value = convertReadingToUnit(pollutant, environment, unit)
  return value <= high && value >= low
}

export const pollutantRange = (
  pollutant: Pollutant,
  environment: Environment
): ?PollutantRange =>
  valuesForSubstance(pollutant.substance).filter(range =>
    valueWithinRange(pollutant, environment, range)
  )[0] || maxForSubstance(pollutant.substance)

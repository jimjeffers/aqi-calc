import { Substance } from "./types"

// All weights are represented as g/mol

export const O3_MASS = 48
export const SO2_MASS = 64.066
export const NO_MASS = 30.01
export const NO2_MASS = 46.0055
export const CO_MASS = 28.01
export const C6H5_MASS = 78.11
export const BENZENE_MASS = C6H5_MASS

const massForSubstance = (substance: Substance): number => {
  switch (substance) {
    case Substance.CarbonMonoxide:
      return CO_MASS
    case Substance.NitrousDioxide:
      return NO2_MASS
    case Substance.Ozone:
      return O3_MASS
    case Substance.SulfurDioxide:
      return SO2_MASS
    default:
      return 0
  }
}

export default massForSubstance

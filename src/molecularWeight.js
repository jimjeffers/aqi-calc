//@flow

import type { Substance } from "./types"

// All weights are represented as g/mol

export const O3_MASS = 48
export const SO2_MASS = 64.066
export const NO_MASS = 30.01
export const NO2_MASS = 46.0055
export const CO_MASS = 28.01
export const C6H5_MASS = 78.11
export const BENZENE_MASS = C6H5_MASS

export const massValues: { [string]: number } = {
  O3: O3_MASS,
  NO2: NO2_MASS,
  SO2: SO2_MASS,
  CO: CO_MASS
}

export const massForSubstance = (substance: Substance): number =>
  massValues[substance]

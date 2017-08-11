//@flow

export const ugm3ToPPB = (
  ugm3: number,
  molecularMass: number,
  degreesCelcius: number
): number => ugm3 * (273.15 + degreesCelcius) / 12.187 * molecularMass

export const ppbToUGM3 = (
  ppb: number,
  molecularMass: number,
  degreesCelcius: number
): number => ppb * 12.187 * molecularMass / (273.15 + degreesCelcius)

export const ppbToPPM = (ppb: number): number => ppb * 1000

export const ppmToPPB = (ppb: number): number => ppb / 1000

export const celciusToFarhenheit = (degreesCelcius: number): number =>
  degreesCelcius * 1.8 + 32

export const farhenheitToCelcius = (degreesFarhenheit: number): number =>
  degreesFarhenheit / 1.8 - 32

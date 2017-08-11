//@flow

export type Substance =
  | "BENZENE"
  | "C6H5"
  | "NO"
  | "NO2"
  | "O3"
  | "PM2_5"
  | "PM10"

export type Unit = "PPM" | "PPB" | "ug/m3"

export type TemperatureScale = "F" | "C"

export type Pollutant = {
  substance: Substance,
  value: number
}

export type Environment = {
  temperature: number,
  unit: TemperatureScale
}

export type Range = {
  high: number,
  low: number
}

export type PollutantRange = {
  concentration: {
    range: Range,
    unit: Unit
  },
  aqiLevel: Range,
  aqiDescription: string
}

export type RangeValues = {
  O3: Array<PollutantRange>,
  PM2_5: Array<PollutantRange>,
  PM10: Array<PollutantRange>
}

export enum Substance {
  CarbonMonoxide = "CO",
  NitrousDioxide = "NO2",
  Ozone = "O3",
  SulfurDioxide = "SO2",
  FineParticles = "PM2_5",
  CoarseParticles = "PM10"
}

export enum Unit {
  PPM = "PPM",
  PPB = "PPB",
  UG_M3 = "ug/m3"
}

export enum Interval {
  OneHour = "1H",
  EightHour = "8H",
  Day = "24H"
}

export enum AirQualityDescription {
  Good = "Good",
  Moderate = "Moderate",
  Sensitive = "Unhealthy For Sensitive",
  Unhealthy = "Unhealthy",
  VeryUnhealthy = "Very Unhealthy",
  Hazardous = "Hazardous",
  None = "NONE"
}

export enum TemperatureScale {
  Farhenheit = "F",
  Celcius = "C"
}

export interface ITemperature {
  value: number
  scale: TemperatureScale
}

export interface ISample {
  substance: Substance
  interval: Interval
  amount: number
  unit: Unit
  temperature?: ITemperature
}

export interface IRange {
  high: number
  low: number
}

export interface IConcentration {
  range: IRange
  unit: Unit
  interval: Interval
}

export interface IBreakPoint {
  concentrations: IConcentration[]
  aqi: IRange
  aqiDescription: AirQualityDescription
}

export interface ISearchResult {
  aqiLevel: IBreakPoint
  concentration: IConcentration
}

export interface IResult {
  aqi: number
  description: AirQualityDescription
  hexColor: string
}

export interface IBreakPointMap {
  O3: IBreakPoint[]
  PM2_5: IBreakPoint[]
  PM10: IBreakPoint[]
  NO2: IBreakPoint[]
  CO: IBreakPoint[]
  SO2: IBreakPoint[]
}

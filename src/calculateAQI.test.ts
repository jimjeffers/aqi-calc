import calculateAQI from "./calculateAQI"
import { Interval, ISample, Substance, TemperatureScale, Unit } from "./types"

test("calculate moderate a ozone reading", () => {
  const ozone: ISample = {
    amount: 0.055,
    interval: Interval.EightHour,
    substance: Substance.Ozone,
    temperature: { value: 25, scale: TemperatureScale.Celcius },
    unit: Unit.PPM
  }
  const result = calculateAQI(ozone)
  expect(result.aqi).toEqual(51)
  expect(result.description).toEqual("Moderate")
  expect(result.hexColor).toEqual("#ff0")
})

test("calculate moderate a ozone reading by converting PPB to PPM", () => {
  const ozone: ISample = {
    amount: 55,
    interval: Interval.EightHour,
    substance: Substance.Ozone,
    temperature: { value: 25, scale: TemperatureScale.Celcius },
    unit: Unit.PPB
  }
  const result = calculateAQI(ozone)
  expect(result.aqi).toEqual(51)
  expect(result.description).toEqual("Moderate")
  expect(result.hexColor).toEqual("#ff0")
})

test("calculate a none existent ozone reading", () => {
  const ozone: ISample = {
    amount: 0.055,
    interval: Interval.OneHour,
    substance: Substance.Ozone,
    temperature: { value: 25, scale: TemperatureScale.Celcius },
    unit: Unit.PPM
  }
  const result = calculateAQI(ozone)
  expect(result.aqi).toEqual(-1)
  expect(result.description).toEqual("NONE")
  expect(result.hexColor).toEqual("#000")
})

test("calculate an ozone reading that goes beyond hazardous", () => {
  const ozone: ISample = {
    amount: 0.975,
    interval: Interval.OneHour,
    substance: Substance.Ozone,
    temperature: { value: 25, scale: TemperatureScale.Celcius },
    unit: Unit.PPM
  }
  const result = calculateAQI(ozone)
  expect(Math.round(result.aqi)).toEqual(501)
  expect(result.description).toEqual("Hazardous")
  expect(result.hexColor).toEqual("#7e0023")
})

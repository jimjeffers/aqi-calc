import calculateAQI from "../calculateAQI"

test("calculate moderate a ozone reading", () => {
  const ozone = {
    substance: "O3",
    amount: 0.055,
    unit: "PPM",
    temperature: { value: 25, unit: "C" },
    interval: "8H"
  }
  const result = calculateAQI(ozone)
  expect(result.aqi).toEqual(51)
  expect(result.description).toEqual("Moderate")
  expect(result.hexColor).toEqual("#ff0")
})

test("calculate a none existent ozone reading", () => {
  const ozone = {
    substance: "O3",
    amount: 0.055,
    unit: "PPM",
    temperature: { value: 25, unit: "C" },
    interval: "1H"
  }
  const result = calculateAQI(ozone)
  expect(result.aqi).toEqual(-1)
  expect(result.description).toEqual("NONE")
  expect(result.hexColor).toEqual("transparent")
})

test("calculate an ozone reading that goes beyond hazardous", () => {
  const ozone = {
    substance: "O3",
    amount: 0.975,
    unit: "PPM",
    temperature: { value: 25, unit: "C" },
    interval: "1H"
  }
  const result = calculateAQI(ozone)
  expect(Math.round(result.aqi)).toEqual(501)
  expect(result.description).toEqual("Hazardous")
  expect(result.hexColor).toEqual("#7e0023")
})

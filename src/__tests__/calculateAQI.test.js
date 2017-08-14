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

import {
  convertReadingToUnit,
  celciusToFarhenheit,
  farhenheitToCelcius
} from "../conversions"

test("it shuld accurately convert farhenheight to celcius", () => {
  expect(celciusToFarhenheit(25)).toEqual(77)
})

test("it shuld accurately convert celcius to farhenheight", () => {
  expect(farhenheitToCelcius(77)).toEqual(25)
})

// CO 1 ppb = 1.145 μg/m3
test("it should accurately convert CO from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "CO" },
    { temperature: 25, unit: "C" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(115)
})

// Benzene 1 ppb = 3.19 μg/m3
test("it should accurately convert Benzene from PPB to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "BENZENE" },
    { temperature: 25, unit: "C" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(319)
})

// Benzene 1 ppb = 3.19 μg/m3
test("it should accurately convert Benzene from PPB to μg/m3 if using Farhenheight", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "BENZENE" },
    { temperature: 77, unit: "F" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(319)
})

// Benzene 3.19 μg/m3 = 1 ppb
test("it should accurately convert Benzene from μg/m3 to PPB", () => {
  const result = convertReadingToUnit(
    { amount: 3.19, unit: "ug/m3", substance: "BENZENE" },
    { temperature: 25, unit: "C" },
    "PPB"
  )
  expect(Math.round(result * 100)).toEqual(100)
})

// SO2 1 ppb = 2.62 μg/m3
test("it should accurately convert SO2 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "SO2" },
    { temperature: 25, unit: "C" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(262)
})

// SO2 2.62 μg/m3 = 1 ppb
test("it should accurately convert SO2 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 2.62, unit: "ug/m3", substance: "SO2" },
    { temperature: 25, unit: "C" },
    "PPB"
  )
  expect(Math.round(result * 100)).toEqual(100)
})

// NO2 1 ppb = 1.88 μg/m3
test("it should accurately convert NO2 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "NO2" },
    { temperature: 25, unit: "C" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(188)
})

// NO2 1.88 μg/m3 = 1 ppb
test("it should accurately convert NO2 from μg/m3 to ppb", () => {
  const result = convertReadingToUnit(
    { amount: 1.88, unit: "ug/m3", substance: "NO2" },
    { temperature: 25, unit: "C" },
    "PPB"
  )
  expect(Math.round(result * 100)).toEqual(100)
})

// NO 1 ppb = 1.25 μg/m3
test("it should accurately convert NO from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "NO" },
    { temperature: 25, unit: "C" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(125)
})

// O3 1 ppb = 2.00 μg/m3
test("it should accurately convert O3 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    { amount: 1, unit: "PPB", substance: "O3" },
    { temperature: 25, unit: "C" },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(200)
})

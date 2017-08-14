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

// O3 1 ppb = 1.96 μg/m3
test("it should accurately convert O3 from PPB to μg/m3 if using Farhenheight", () => {
  const result = convertReadingToUnit(
    {
      amount: 1,
      unit: "PPB",
      substance: "O3",
      temperature: { value: 77, unit: "F" },
      interval: "8H"
    },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(196)
})

// O3 1.96 μg/m3 = 1 ppb
test("it should accurately convert O3 from μg/m3 to PPB", () => {
  const result = convertReadingToUnit(
    {
      amount: 1.96,
      unit: "ug/m3",
      substance: "O3",
      temperature: { value: 25, unit: "C" },
      interval: "8H"
    },
    "PPB"
  )
  expect(Math.round(result * 100)).toEqual(100)
})

// SO2 1 ppb = 2.62 μg/m3
test("it should accurately convert SO2 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    {
      amount: 1,
      unit: "PPB",
      substance: "SO2",
      temperature: { value: 25, unit: "C" },
      interval: "1H"
    },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(262)
})

// SO2 2.62 μg/m3 = 1 ppb
test("it should accurately convert SO2 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    {
      amount: 2.62,
      unit: "ug/m3",
      substance: "SO2",
      temperature: { value: 25, unit: "C" },
      interval: "1H"
    },
    "PPB"
  )
  expect(Math.round(result * 100)).toEqual(100)
})

// NO2 1 ppb = 1.88 μg/m3
test("it should accurately convert NO2 from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    {
      amount: 1,
      unit: "PPB",
      substance: "NO2",
      temperature: { value: 25, unit: "C" },
      interval: "1H"
    },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(188)
})

// NO2 1.88 μg/m3 = 1 ppb
test("it should accurately convert NO2 from μg/m3 to ppb", () => {
  const result = convertReadingToUnit(
    {
      amount: 1.88,
      unit: "ug/m3",
      substance: "NO2",
      temperature: { value: 25, unit: "C" },
      interval: "8H"
    },
    "PPB"
  )
  expect(Math.round(result * 100)).toEqual(100)
})

// CO 1 ppb = 1.14 μg/m3
test("it should accurately convert NO from ppb to μg/m3", () => {
  const result = convertReadingToUnit(
    {
      amount: 1,
      unit: "PPB",
      substance: "CO",
      temperature: { value: 25, unit: "C" },
      interval: "24H"
    },
    "ug/m3"
  )
  expect(Math.round(result * 100)).toEqual(114)
})

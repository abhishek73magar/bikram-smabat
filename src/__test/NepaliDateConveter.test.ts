import { test, expect } from 'vitest';
import NepaliDateConverter from '../NepaliDateConverter';

const listOfDates = [
  { date: "2025-01-01", value: "2081-09-17" }, // 2025 january 1
  { date: "2025-02-01", value: "2081-10-19" }, // 2025 february 1
  { date: "2025-03-01", value: "2081-11-17" }, // 2025 march 1
  { date: "2025-04-01", value: "2081-12-19" }, // 2025 april 1
  { date: "2025-05-01", value: "2082-01-18" }, // 2025 may 1
  { date: "2025-06-01", value: "2082-02-18" }, // 2025 june 1
  { date: "2025-07-01", value: "2082-03-17" }, // 2025 july 1
  { date: "2025-08-01", value: "2082-04-16" }, // 2025 august 1
  { date: "2025-09-01", value: "2082-05-16" }, // 2025 september 1
  { date: "2025-10-01", value: "2082-06-15" }, // 2025 october 1
  { date: "2025-11-01", value: "2082-07-15" }, // 2025 november 1
  { date: "2025-12-01", value: "2082-08-15" }, // 2025 december 1

  { date: "2034-13-22", value: "Year out of range" }, // invalid year
  { date: "2025-13-22", value: "Month out of range" }, // invalid month
  { date: "2025-12-33", value: "Day out of range" }, // invalid Day
  { date: new Date("2026-01-01"), value: "2082-09-17" }, // 2026 january 1
]

test("AD to BS conversion", () => {
  listOfDates.forEach(({ date, value }) => {
    const converter = new NepaliDateConverter(date);
    const result = converter._getToBsDate();
    expect(result).toEqual(value);
  })
});


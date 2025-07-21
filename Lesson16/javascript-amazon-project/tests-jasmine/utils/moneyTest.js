import { formatCurrency } from "../../scripts/utils/money.js";

// create test suite
describe("test suite: formatCurrency", () => {
  // create a test case in test suite
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  // create a test case in test suite
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  // create a test case in test suite
  it("Rounds up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});

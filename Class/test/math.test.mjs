import { expect } from "chai";
import { add, concat, subtract } from "../math.js";
import { describe } from "mocha";

describe("Math Utils", () => {
  it("Should add 2 numbers correctly", () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
  it("should subtract two numbers correctly", () => {
    const result = subtract(5, 3);
    expect(result).to.equal(2);
  });
  it("should concatenate two strings correctly", () => {
    const result = concat("Hello, ", "World!");
    expect(result).to.equal("Hello, World!");
  });
});

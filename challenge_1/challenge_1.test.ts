import { describe, expect, test } from "@jest/globals";
import prepareGifts from "./challenge_1";

describe("challenge 1 module with 3 cases every case should be return an array without repeating values", () => {
  test("Case 1", () => {
    // Arrange
    const giftsToPrepare = [3, 1, 2, 3, 4, 2, 5];

    // Act
    const gifts = prepareGifts(giftsToPrepare);

    // Assert
    expect(gifts).toStrictEqual([1, 2, 3, 4, 5]);
  })

  test("Case 2", () => {
    // Arrange
    const giftsToPrepare = [6, 5, 5, 5, 5];

    // Act
    const gifts = prepareGifts(giftsToPrepare)

    // Assert 
    expect(gifts).toStrictEqual([5, 6])
  })

  test("Case 3", () => {
    // Arrange
    const giftsToPrepare: number[] = []

    // Act
    const gifts = prepareGifts(giftsToPrepare)

    // Assert
    expect(gifts).toStrictEqual([])
  })
})
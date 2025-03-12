import { describe, test, expect } from "@jest/globals";
import organizeInventory from "./challenge_3";

const inventory1 = {
  toys: {
    doll: 5,
    car: 5
  },
  sports: {
    ball: 2,
    racket: 4
  }
}

const inventory2 = {
  education: {
    book: 15
  },
  art: {
    paint: 3
  }
}

describe("challenge 3 module with 2 cases every case should be return an object by categories", () => {
  test("Case 1 should be return toys and sports categories", () => {
    // Arrange
    const inventoryArr = [
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' }
    ]

    // Act
    const inventoryObj = organizeInventory(inventoryArr)

    // Assert
    expect(inventoryObj).toStrictEqual(inventory1)
  })

  test("Case 2 should be return education and art", () => {
    // Arrange
    const inventoryArr = [
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' }
    ]

    // Act
    const inventoryObj = organizeInventory(inventoryArr)

    // Assert
    expect(inventoryObj).toStrictEqual(inventory2)
  })
})
import { describe, expect, test } from "@jest/globals";
import createFrame from "./challenge_2";

const result_case_1 = `***************
* midu        *
* madeval     *
* educalvolpz *
***************`

const result_case_2 = `********
* midu *
********`

const result_case_3 = `*******
* a   *
* bb  *
* ccc *
*******`

describe("challenge 2 module with 3 cases every case should be decorate all values", () => {

  test("Case 1 should be return 3 values and decorated", () => {
    // Arrange
    const goodKidsName = ['midu', 'madeval', 'educalvolpz'];

    // Act
    const decoratedNames = createFrame(goodKidsName);

    // Assert
    expect(decoratedNames).toStrictEqual(result_case_1)
  })

  test("Case 2 should be return 3 values and decorated", () => {
    // Arrange
    const goodKidsName = ['midu'];

    // Act
    const decoratedNames = createFrame(goodKidsName);

    // Assert
    expect(decoratedNames).toStrictEqual(result_case_2)
  })

  test("Case 3 should be return 3 values and decorated", () => {
    // Arrange
    const goodKidsName = ['a', 'bb', 'ccc'];

    // Act
    const decoratedNames = createFrame(goodKidsName);

    // Assert
    expect(decoratedNames).toStrictEqual(result_case_3)
  })
})
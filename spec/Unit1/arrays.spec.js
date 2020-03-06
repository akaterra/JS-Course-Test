if (typeof require !== 'undefined') {
  const filterNumbersAndMultiplyBy = require('../../src/Unit1/arrays').filterNumbersAndMultiplyBy;
  const filterNumbersDivisibleBy = require('../../src/Unit1/arrays').filterNumbersDivisibleBy;
}

describe('filterNumbersAndMultiplyBy', () => {
  it('should filter numbers and multiply by two', () => {
    expect(filterNumbersAndMultiplyBy([1, '1', 2, '2', 3, '3', 4, '4'], 2)).toEqual([
      2, 4, 6, 8,
    ]);
  });

  it('should filter numbers and multiply by three', () => {
    expect(filterNumbersAndMultiplyBy([1, '1', 2, '2', 3, '3', 4, '4'], 3)).toEqual([
      3, 6, 9, 12,
    ]);
  });

  it('should throw exception on non array', () => {
    expect(() => filterNumbersAndMultiplyBy(null, 2)).toThrow(new Error(
      'array expected',
    ));
  });

  it('should throw exception on non numeric divisor', () => {
    expect(() => filterNumbersAndMultiplyBy([1, '1', 2, '2', 3, '3', 4, '4'], null)).toThrow(new Error(
      'multiplier should be a number',
    ));
  });
});


describe('filterNumbersDivisibleBy', () => {
  it('should filter numbers divisible by two', () => {
    expect(filterNumbersDivisibleBy([1, '1', 2, '2', 3, '3', 4, '4'], 2)).toEqual([
      2, 4,
    ]);
  });

  it('should throw exception on non array', () => {
    expect(() => filterNumbersDivisibleBy(null, 2)).toThrow(new Error(
      'array expected',
    ));
  });

  it('should throw exception on non numeric divisor', () => {
    expect(() => filterNumbersDivisibleBy([1, '1', 2, '2', 3, '3', 4, '4'], null)).toThrow(new Error(
      'divisor should be a number',
    ));
  });
});

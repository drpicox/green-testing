function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  initialCode: `function factorial(n) {
      return null;
  }`,
  steps: [
    ...[1, 2, 3, 4, 5, 20].map(n => ({
      test: `expect(factorial(${n})).toEqual(${factorial(n)})`
    })),
    {
      test: `test('end', () => {});`
    }
  ]
};

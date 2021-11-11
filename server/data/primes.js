function primes(n) {
  for (var i = 2; i < n; i += 1) if (n % i === 0) return [i, ...primes(n / i)];
  if (n > 1) return [n];
  return [];
}

module.exports = {
  initialCode: `function primes(n) {
      return null;
  }`,
  steps: [
    ...[
      1,
      2,
      3,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      510510
    ].map(n => ({
      test: `expect(primes(${n})).toEqual(${primes(n)})`
    })),
    {
      test: `test('end', () => {});`
    }
  ]
};

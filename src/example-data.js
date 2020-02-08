function primeFactorsOf(n) {
  for (var i = 2; i < n; i += 1)
    if (n % i === 0) return [i, ...primeFactorsOf(n / i)];
  if (n > 1) return [n];
  return [];
}

export default {
  initialCode: `function primeFactorsOf(n) {
    return null;
}`,
  steps: [
    ...[
      1,
      2,
      3 /*
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
      25*/
    ].map(n => ({
      test: `expect(primeFactorsOf(${n})).toEqual([${primeFactorsOf(n)}])`
    })),
    {
      test: `test('end', () => {});`
    }
  ]
};
/*
function primeFactorsOf(n) {
if(n%2==0)return[2,...primeFactorsOf(n/2)]
if(n%3==0)return[3,...primeFactorsOf(n/3)]
if(n>1)return[n]
    return[];
}

function primeFactorsOf(n) {
for (var i =2;i<n;i+=1)
if(n%i==0)return[i,...primeFactorsOf(n/i)]
if(n>1)return[n]
    return[];
}
*/

function primes(n) {
  for (var i = 2; i < n; i += 1) if (n % i === 0) return [i, ...primes(n / i)];
  if (n > 1) return [n];
  return [];
}

export default {
  initialCode: `function primes(n) {
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
      test: `expect(primes(${n})).toEqual([${primes(n)}])`
    })),
    {
      test: `test('end', () => {});`
    }
  ]
};
/*
function primes(n) {
if(n%2==0)return[2,...primes(n/2)]
if(n%3==0)return[3,...primes(n/3)]
if(n>1)return[n]
    return[];
}

function primes(n) {
for (var i =2;i<n;i+=1)
if(n%i==0)return[i,...primes(n/i)]
if(n>1)return[n]
    return[];
}
*/

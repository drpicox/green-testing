export default {
  initialCode: `function primeFactorsOf(n) {
    return null;
}`,
  steps: [
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
});`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
    expect(primeFactorsOf(20)).toEqual([2, 2, 5]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
    expect(primeFactorsOf(20)).toEqual([2, 2, 5]);
    expect(primeFactorsOf(21)).toEqual([3, 7]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
    expect(primeFactorsOf(20)).toEqual([2, 2, 5]);
    expect(primeFactorsOf(21)).toEqual([3, 7]);
    expect(primeFactorsOf(22)).toEqual([2, 11]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
    expect(primeFactorsOf(20)).toEqual([2, 2, 5]);
    expect(primeFactorsOf(21)).toEqual([3, 7]);
    expect(primeFactorsOf(22)).toEqual([2, 11]);
    expect(primeFactorsOf(23)).toEqual([23]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
    expect(primeFactorsOf(20)).toEqual([2, 2, 5]);
    expect(primeFactorsOf(21)).toEqual([3, 7]);
    expect(primeFactorsOf(22)).toEqual([2, 11]);
    expect(primeFactorsOf(23)).toEqual([23]);
    expect(primeFactorsOf(24)).toEqual([2, 2, 2, 3]);
  });`
    },
    {
      test: `test('list the prime factors of an integer', () => {
    expect(primeFactorsOf(1)).toEqual([]);
    expect(primeFactorsOf(2)).toEqual([2]);
    expect(primeFactorsOf(3)).toEqual([3]);
    expect(primeFactorsOf(4)).toEqual([2, 2]);
    expect(primeFactorsOf(5)).toEqual([5]);
    expect(primeFactorsOf(6)).toEqual([2, 3]);
    expect(primeFactorsOf(7)).toEqual([7]);
    expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
    expect(primeFactorsOf(9)).toEqual([3, 3]);
    expect(primeFactorsOf(10)).toEqual([2, 5]);
    expect(primeFactorsOf(11)).toEqual([11]);
    expect(primeFactorsOf(12)).toEqual([2, 2, 3]);
    expect(primeFactorsOf(13)).toEqual([13]);
    expect(primeFactorsOf(14)).toEqual([2, 7]);
    expect(primeFactorsOf(15)).toEqual([3, 5]);
    expect(primeFactorsOf(16)).toEqual([2, 2, 2, 2]);
    expect(primeFactorsOf(17)).toEqual([17]);
    expect(primeFactorsOf(18)).toEqual([2, 3, 3]);
    expect(primeFactorsOf(19)).toEqual([19]);
    expect(primeFactorsOf(20)).toEqual([2, 2, 5]);
    expect(primeFactorsOf(21)).toEqual([3, 7]);
    expect(primeFactorsOf(22)).toEqual([2, 11]);
    expect(primeFactorsOf(23)).toEqual([23]);
    expect(primeFactorsOf(24)).toEqual([2, 2, 2, 3]);
    expect(primeFactorsOf(25)).toEqual([5, 5]);
  });`
    },
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

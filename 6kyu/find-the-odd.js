function findOddCount(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  for (const num in counts) {
    if (counts[num] % 2 !== 0) return Number(num);
  }
}

// ✅ Tests
console.log(findOddCount([7])); // 7
console.log(findOddCount([0])); // 0
console.log(findOddCount([1, 1, 2])); // 2
console.log(findOddCount([0, 1, 0, 1, 0])); // 0
console.log(findOddCount([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4

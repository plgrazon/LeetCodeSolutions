function hammingWeight(n: number): number {
  let count = 0;
  let nStr = n.toString(2);

  for (let i = 0; i < nStr.length; i++) {
    if (nStr[i] === "1") {
      count++;
    }
  }

  return count;
};
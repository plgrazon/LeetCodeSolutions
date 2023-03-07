function longestSubstring(s: string, k: number): number {
  let max = 0;
  let totalUniqChars = new Set(s).size;

  for (let uniqChars = 1; uniqChars <= totalUniqChars; uniqChars++) {
    let left = 0;
    let map = new Map();
    let atLeastK = 0;
    let currUniq = 0;

    for (let right = 0; right < s.length; right++) {
      map.set(s[right], map.get(s[right]) + 1 || 1);
      if (map.get(s[right]) === 1) currUniq++;
      if (map.get(s[right]) === k) atLeastK++;

      while (currUniq > uniqChars) {
        map.set(s[left], map.get(s[left]) - 1);
        if (map.get(s[left]) === 0) currUniq--;
        if (map.get(s[left]) === k - 1) atLeastK--;
        left++;
      }

      if (currUniq === uniqChars && currUniq === atLeastK) {
        max = Math.max(max, right - left + 1);
      }
    }
  }

  return max;
};
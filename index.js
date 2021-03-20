function longestSubseq(s1, s2, s1StartIdx = 0, s2StartIdx = 0) {
  const results = [];

  for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
    const s1Char = s1[s1Idx];
    const s2Idx = s2.indexOf(s1Char, s2StartIdx);

    let result = [];

    if (s2Idx !== -1) {
      result.push(s1Char, ...longestSubseq(s1, s2, s1Idx + 1, s2Idx + 1));
    }
    results.push(result);
  }
  const longest = findLongest(results);
  return longest.join('');
}

function findLongest(arr) {
  let longest = [];

  for (let candidate of arr) {
    if (candidatte.length > longest.length) {
      longest = candidate;
    }
  }
}
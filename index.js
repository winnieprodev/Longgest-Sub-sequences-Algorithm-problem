// "ABAZDC", "BACBAD" => "ABAD"
/*
---
s1Idx = 0
s1Char = A

s2Idx = 1
result = [A]

---
s1Idx = 1
s1Char = B

s2Idx = 3
result = [A B]

---
s1Idx = 2
s1Char = A

s2Idx = 4
result [A B A]

---
s1Idx = 3
s1Char = Z

s2Idx = -1
result []

---
s1Idx = 4
s1Char = D

s2Idx = 5
result [A B A D]

*/

// It will be perfect if we can have O(1) or O(n), but the time complexity of this algorithm is quodratic O(n^2). ;(

function longestSubseq(s1, s2, s1StartIdx = 0, s2StartIdx = 0, memo) {
  if (s1StartIdx >= s1.length || s2StartIdx >= s2.length) return '';

  if (memo == null) {
    memo = (new Array(s1.length))
    memo.fill(null);
    memo = new Array(s1.length).map(row => new Array(s2.length));
  } else if (memo[s1StartIdx][s2StartIdx] != null) {
    memo[s1StartIdx][s2StartIdx];
  }
  const results = [];

  for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
    const s1Char = s1[s1Idx];
    const s2Idx = s2.indexOf(s1Char, s2StartIdx);

    let result = [];

    if (s2Idx !== -1) {
      result.push(s1Char, ...longestSubseq(s1, s2, s1Idx + 1, s2Idx + 1, memo));
    }
    results.push(result);
  }
  const longest = findLongest(results);

  memo[s1StartIdx][s2StartIdx] = longest;
  return longest.join('');
}

function findLongest(arr) {
  let longest = [];

  for (let candidate of arr) {
    if (candidate.length > longest.length) {
      longest = candidate;
    }
  }
}

console.log('result', longestSubseq("ABAZDC", "BACBAD"));
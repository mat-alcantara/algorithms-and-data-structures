// Time Complexity : O(n)
// Recursive Way :

// 1) Initialize start and end indexes as start = 0, end = n-1
// 2) Swap arr[start] with arr[end]
// 3) Recursively call reverse for rest of the array.

//Algorithm used to invert an array or string
var reverseString = function (s) {
  let startIndex = 0;
  let endIndex = s.length - 1;
  let sup = "";

  while (!(startIndex > endIndex)) {
    sup = s[startIndex];
    s[startIndex] = s[endIndex];
    s[endIndex] = sup;
    startIndex += 1;
    endIndex -= 1;
  }

  return s;
};

const res = reverseString(["H", "a", "n", "n", "a", "h"]);
console.log(res);

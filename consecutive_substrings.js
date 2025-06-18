function consecutiveSubstrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  return result;
}
console.log(consecutiveSubstrings('abcdefg'));

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg', 'b', 'bc', 'bcd', 'bcde', 'bcdef', 'c', 'cd', 'cde', 'd', 'de', 'e', 'f', 'g']");
  console.log("=>", consecutiveSubstrings('abcdefg'));
  
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



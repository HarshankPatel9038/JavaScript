/**
 * The function `findLongestWordInString` takes a string as input and returns the longest word in the
 * string.
 * @param str - 'quick box jump over the lazy dog'
 * @returns The function `findLongestWordInString` is returning the longest word in the input string
 * 'quick box jump over the lazy dog'.
 */

const findLongestWordInString = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");

  return words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
};

console.log(
  findLongestWordInString('quick box jump over the lazy dog')
);
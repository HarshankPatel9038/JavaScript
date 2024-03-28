/**
 * The function `hashtagGenerator` takes a string, capitalizes the first letter of each word,
 * concatenates them without spaces, and returns a hashtag with the result if the length is within
 * limits.
 * @param str - quick box jump over the lazy dog
 * @returns #QuickBoxJumpOverTheLazyDog
 */

const hashtagGenerator = (str) => {
  if (str.trim().length > 280 || str.trim().length === 0) {
    return false
  }

  str = str.split(" ");

  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
    // curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );

  str = `#${str.join("")}`

  return str
}

console.log(hashtagGenerator('quick box jump over the lazy dog'));
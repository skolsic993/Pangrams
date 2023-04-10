function isPangram(sentence) {
  const lowerCased = sentence.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}

const result = isPangram("The five boxing wizards jump quickly");

console.log(result);

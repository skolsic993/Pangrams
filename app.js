function isPangram1(sentence) {
  const lowerCased = sentence.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}

function isPangram2(sentence) {
  const lowerCased = sentence.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }

  return true;
}

const result = isPangram2("The five boxing wizards jump quickly");

console.log(result);

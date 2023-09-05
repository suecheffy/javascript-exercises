function reversingString(str) {
  // empty string
  let aNewString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    aNewString += str[i];
  }
  return aNewString;
}

// take input from the user
const string = prompt("Enter a string: ");

const result = reversingString(string);
console.log(result);

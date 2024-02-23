const parseCode = (str) => {
  // Find the indexes of zeros in the string
  const zeroIndexes = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      zeroIndexes.push(i);
    }
  }

  // Extract firstName, lastName, and id using the zero indexes
  const firstName = str.substring(0, zeroIndexes[0]);
  const lastName = str.substring(zeroIndexes[0] + 3, zeroIndexes[1]);
  const id = str.substring(zeroIndexes[1] + 3);

  // Return an object with properties firstName, lastName, and id
  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
};

// Example usage:
console.log(parseCode("John000Doe000123")); // { firstName: "John", lastName: "Doe", id: "123" }
console.log(parseCode("michael0smith004331")); // { firstName: "michael", lastName: "smith", id: "4331" }
console.log(parseCode("Thomas00LEE0000043")); // { firstName: "Thomas", lastName: "LEE", id: "43" }

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

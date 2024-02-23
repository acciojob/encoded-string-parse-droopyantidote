const parseCode = (str) => {
  const zeroIndexes = [];
  
  // Find indexes of zeros in the string
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      zeroIndexes.push(i);
    }
  }

  // Extract firstName, lastName, and id using the zero indexes
  const firstName = str.substring(0, zeroIndexes[0]);
  // Adjust the starting index for lastName to exclude the zeros
  const lastName = str.substring(zeroIndexes[0] + 1, zeroIndexes[1]);
  const id = str.substring(zeroIndexes[1] + 1);

  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

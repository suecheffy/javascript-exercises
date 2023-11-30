const removeFromArray = function (passedArray, ...ar) {
  const newArray = [];
  passedArray.forEach((items) => {
    if (!ar.includes(items)) newArray.push(items);
  });
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2));

// Do not edit below this line
module.exports = removeFromArray;

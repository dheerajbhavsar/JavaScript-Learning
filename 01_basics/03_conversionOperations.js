let score = "33";

try {
  score = Number(score);
  console.log(convertToNumber(score)); // NaN
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Conversion completed!");
}

function convertToNumber(value) {
  let numberAsString = Number(value);
  if (isNaN(numberAsString)) {
    throw new Error("Conversion failed");
  }
  return numberAsString;
}

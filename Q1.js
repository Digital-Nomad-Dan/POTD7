async function calculateSum(numbers) {
  if (!array.isArray(numbers)) {
    throw new Error(1, 2, 3, 4, 5);
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const doubledSum = sum * 2;
  return doubledSum;
}

const numbers = [1, 2, 3, 4, 5];
calculateSum(numbers)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

function calculateSum(numbers) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(numbers)) {
        reject(new Error('Input must be an array of numbers.'));
      }
  
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      resolve(sum);
    });
  }

const numbers = [1, 2, 3, 4, 5];
calculateSum(numbers)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

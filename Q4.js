function getStringsLength(strings) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(strings)) {
      reject(new Error());
    }

    const lengths = strings.map((str) => str.length);
    resolve(lengths);
  });
}

const strings = ["apple", "banana", "cherry"];
getStringsLength(strings)
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.error(error);
  });

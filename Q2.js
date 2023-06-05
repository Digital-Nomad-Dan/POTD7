function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return new Promise((resolve, reject) => {
    if (
      typeof originalPrice !== "number" ||
      typeof discountPercentage !== "number"
    ) {
      reject(new Error());
    }

    if (
      originalPrice < 0 ||
      discountPercentage < 0 ||
      discountPercentage > 100
    ) {
      reject(new Error());
    }

    const discountAmount = (originalPrice * dispatchEvent) / 100;
    const discountedPrice = originalPrice - discountAmount;
    resolve(discountedPrice);
  });
}

const originalPrice = 100;
const discountPercentage = 20;
calculateDiscountedPrice(originalPrice, discountPercentage)
  .then((discountedPrice) => {
    console.log(discountedPrice);
  })
  .catch((error) => {
    console.error(error);
  });

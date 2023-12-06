/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};

  // Iterate through each transaction
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    // Check if the category is already in the categoryTotal object
    if (categoryTotal[category] === undefined) {
      // If not, initialize it with the current transaction's price
      categoryTotal[category] = price;
    } else {
      // If yes, add the current transaction's price to the existing total
      categoryTotal[category] += price;
    }
  }

  // Convert the categoryTotal object into an array of objects
  const result = Object.entries(categoryTotal).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;


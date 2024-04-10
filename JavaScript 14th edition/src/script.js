//toSpliced() , toSorted() , toReversed()

const numbers = [3, 4, 1, 5, 2];

const splicedNumbers = numbers.toSpliced(1, 1);
const sortedNumbers = numbers.toSorted();
const reversedNumbers = numbers.toReversed();
console.log(splicedNumbers)
console.log(sortedNumbers)
console.log(reversedNumbers)
console.log(numbers)

// Object.groupBy()
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

console.log(result2)


// lastIndexOf()

const fruits = ['apple', 'banana', 'orange', 'banana', 'kiwi'];

const lastIndex = fruits.lastIndexOf('banana');

console.log(lastIndex)


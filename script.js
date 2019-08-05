console.log("begin");

//set

let numbers = new Set();
console.log(numbers);
numbers.add(42);
console.log(numbers);
numbers.add(43);
console.log(numbers);
numbers.add(42);
console.log(numbers);
console.log(numbers.size);
console.log(numbers.has(3));
console.log(numbers.has(43));
numbers.delete(42);
console.log(numbers);
numbers.add(44);
numbers.add(45);
for (let item of numbers) {
	console.log("number: " + item);
}
numbers.clear();
console.log(numbers);
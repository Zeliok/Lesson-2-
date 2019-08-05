console.log("begin");

//iterattors

let array = [1,2,3,4,5];

let b = array.map(function(x){
	return x*x;
});

console.log(b);

b = array.filter(function(x){
	return x%2==0;
});

console.log(b);

let c = [];
array.forEach(function(x){
	c.unshift(x);
});

console.log(c);

d = [1,4,6,8,1];
console.log(d.reverse());
console.log(d.sort());
let t = 5;
console.log(t>10 ? ">10" : "<10");//тернарный if
 
function Human(name, age){
	this.name = name;
	this.age = age;
}

let Alice = new Human("Alice", 19);
let Bob = new Human("Bob", 23);

console.log(Alice);
console.log(Bob);
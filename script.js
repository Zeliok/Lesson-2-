console.log("begin");

//сравнение словарей
let d = {key: "value"};
let a = {key: "value"};
if (a==d){
	console.log("dict Yes");
}else{
	console.log("dict No");
}
a = d;
if (a==d){
	console.log("dict Yes");
}else{
	console.log("dict No");
}
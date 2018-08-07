// const  obj ={a:10 , b:15};
// const {a , b} =obj;
// console.log(a,b);

// const sum1 = ( a:any,b:any ) => {
// 	return a + b;
// };

// console.log(sum1(5,5));

setTimeout(function() {
// console.log("setTimeout called!");
}, 1000);

setTimeout(function(){
	// console.log("Welcome Typescript in Forsan Technology");
},500);

// setTimeout(()=> console.log('Typescript'),250);

let message = (text)=> text;
// console.log(message("Forsan Hi "));

let add = (a , b)=> {
	console.log("Typescript function add")
	console.log(a+b)
	return a + b
}
add(5 , 2005);

let minc = (a,b)=>{
	console.log("Typescript function minc")

	console.log(a-b)
}
minc(0,10);

let obj = {
	name:"Forsan Technology ",
	sayHi: function(){
		 setTimeout(()=>console.log(`Typescript Do not nead self=this : ${this.name}`),100)
		let self = this;
		setTimeout(function(){
		console.log(`default function in javascript used self=this : ${self.name}`)

	},1000)
	}
}
obj.sayHi();


const obj1 = {first:'Ibrahim',last:'Madi',age:27};
const one = obj1.first
const obj2 = {x:'ibr',...obj1}
console.log(obj2);
const { first:f,last:l} = obj1;
console.log(f +' '+ l);
// Array 
const arr = ['a','b'];
const[x,y]= arr;
// console.log(arr);
 const options = {x:'1',c:'2'};

// Function Parameter Destructuring
 function func(options){
 	console.log('Options X '+options.x);
 }
 func(options);
function fun({x}) {
console.log(x);
}

fun({x:"Forsan Test"});
//For Loop
for (var i =0; i< arr.length;i++) { //var ,let
	
	console.log(`For loop ES5 : ${arr[i]}`);
}

//For loop ES6 

for(var i of arr){
	console.log(`For Loop ES6 : ${i}`);
}
//Foreach
arr.forEach(function(value){
console.log(` This value with forEach ES5: ${value}`);
});

// For in Designed for interating over an object properites
for(let i in obj1){
	console.log(`For in  for used in object : ${i}`);
}

// Map & Set
 let base = {a:1, b:2};
 let objbase = Object.create(base);
 // objbase[c] = 4;
 for(i in objbase){
 	console.log(i)
 }
 console.log(`Object,create Error !!! ${objbase}`);

let objoverriding = {hasOwnProperty:"test"};
//  Error : TypeError: objoverriding.hasOwnProperty is not a function
// objoverriding.hasOwnProperty("test Ovrriding");
console.log(` Error !!! : ${objoverriding.hasOwnProperty}`);

 let base1 = {a:1, __proto__:2};
 for(i in base1){
 	console.log(`Property __proto__ !!!: ${i}`);
 }

 // Map 

 let map = new Map([['A',3],['c',4]]);
 console.log("Empty "+map.get("A"));

 map.set('A',2);
 // 
 console.log("Set "+map.get("A"));// overriding
 console.log("Set "+map.get("c"));
 // for of looping
 for(let entry of map.entries() ){
 	console.log(`For loop map  :  ${entry}`);
 }


 // for loop key & Value 
 for(let [key,value] of map.entries()){
 	console.log(`Used Foreach to print key & Value with entries: ${key} -> ${value} `);
 }


 for(let [key,value] of map){
 	console.log(`Used Foreach to print key & Value : ${key} -> ${value} `);

 }

 for(let key of map.keys()){
 	console.log(`Map map.keys() : ${key}`);
 }

 for(let value of map.values()){
 	console.log(`Map map.values() : ${value}`);
 }
 // We can check to see if a key is present using the has method:
 console.log("We can check to see if  a key is present using the has method : "+
 	map.has("A"));
  console.log("We can check to see if  a key is present using the has method : "+
 	map.has("l"));
  // We can check for the size (number of entries) using the size property:
  console.log("We can check for thr size using the size method : "+
  	map.size);
  // We can delete entries using the delete method:
   console.log("We can delete entries using the delete method: "+
 	map.delete("A"));
// We can empty an entire Map by using the clear method:
   console.log("We can empty an entries map by using the clear method: "+
   	map.clear());

// Set 
console.log('Sets are a bit like maps but they only store keys not key-value pairs.');

let set = new Set();
set.add('Apple');
console.log(set);

// Api Promise
let error = true;
function doAsyncTask(){
return new Promise((resolve, reject)=> {
	setTimeout(()=>{
		if (error) {
			// code...
			reject('error promise');
		}else{
			resolve('done promise');
		}
	},900);

});
}

doAsyncTask().then(
	(val)=> console.log(val),
	(err)=>console.log(err)
	);

// Class


// class Person{

// 	firstName = "";
// 	lastName = "";
// 	constractor(firstName , lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	name(){
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	whoAreYou(){
// 		return `Hi I am ${this.name}`;
// 	}
// }

// let person = new Person("Ibrahim", "Madi");
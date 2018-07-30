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

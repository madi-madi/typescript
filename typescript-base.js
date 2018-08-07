// const  obj ={a:10 , b:15};
// const {a , b} =obj;
// console.log(a,b);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// const sum1 = ( a:any,b:any ) => {
// 	return a + b;
// };
// console.log(sum1(5,5));
setTimeout(function () {
    // console.log("setTimeout called!");
}, 1000);
setTimeout(function () {
    // console.log("Welcome Typescript in Forsan Technology");
}, 500);
// setTimeout(()=> console.log('Typescript'),250);
var message = function (text) { return text; };
// console.log(message("Forsan Hi "));
var add = function (a, b) {
    console.log("Typescript function add");
    console.log(a + b);
    return a + b;
};
add(5, 2005);
var minc = function (a, b) {
    console.log("Typescript function minc");
    console.log(a - b);
};
minc(0, 10);
var obj = {
    name: "Forsan Technology ",
    sayHi: function () {
        var _this = this;
        setTimeout(function () { return console.log("Typescript Do not nead self=this : " + _this.name); }, 100);
        var self = this;
        setTimeout(function () {
            console.log("default function in javascript used self=this : " + self.name);
        }, 1000);
    }
};
obj.sayHi();
var obj1 = { first: 'Ibrahim', last: 'Madi', age: 27 };
var one = obj1.first;
var obj2 = __assign({ x: 'ibr' }, obj1);
console.log(obj2);
var f = obj1.first, l = obj1.last;
console.log(f + ' ' + l);
// Array 
var arr = ['a', 'b'];
var x = arr[0], y = arr[1];
// console.log(arr);
var options = { x: '1', c: '2' };
// Function Parameter Destructuring
function func(options) {
    console.log('Options X ' + options.x);
}
func(options);
function fun(_a) {
    var x = _a.x;
    console.log(x);
}
fun({ x: "Forsan Test" });
//For Loop
for (var i = 0; i < arr.length; i++) { //var ,let
    console.log("For loop ES5 : " + arr[i]);
}
//For loop ES6 
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log("For Loop ES6 : " + i);
}
//Foreach
arr.forEach(function (value) {
    console.log(" This value with forEach ES5: " + value);
});
// For in Designed for interating over an object properites
for (var i_1 in obj1) {
    console.log("For in  for used in object : " + i_1);
}
// Map & Set
var base = { a: 1, b: 2 };
var objbase = Object.create(base);
// objbase[c] = 4;
for (i in objbase) {
    console.log(i);
}
console.log("Object,create Error !!! " + objbase);
var objoverriding = { hasOwnProperty: "test" };
//  Error : TypeError: objoverriding.hasOwnProperty is not a function
// objoverriding.hasOwnProperty("test Ovrriding");
console.log(" Error !!! : " + objoverriding.hasOwnProperty);
var base1 = { a: 1, __proto__: 2 };
for (i in base1) {
    console.log("Property __proto__ !!!: " + i);
}
// Map 
var map = new Map([['A', 3], ['c', 4]]);
console.log("Empty " + map.get("A"));
map.set('A', 2);
// 
console.log("Set " + map.get("A")); // overriding
console.log("Set " + map.get("c"));
// for of looping
for (var _a = 0, _b = map.entries(); _a < _b.length; _a++) {
    var entry = _b[_a];
    console.log("For loop map  :  " + entry);
}
// for loop key & Value 
for (var _c = 0, _d = map.entries(); _c < _d.length; _c++) {
    var _e = _d[_c], key = _e[0], value = _e[1];
    console.log("Used Foreach to print key & Value with entries: " + key + " -> " + value + " ");
}
for (var _f = 0, map_1 = map; _f < map_1.length; _f++) {
    var _g = map_1[_f], key = _g[0], value = _g[1];
    console.log("Used Foreach to print key & Value : " + key + " -> " + value + " ");
}
for (var _h = 0, _j = map.keys(); _h < _j.length; _h++) {
    var key = _j[_h];
    console.log("Map map.keys() : " + key);
}
for (var _k = 0, _l = map.values(); _k < _l.length; _k++) {
    var value = _l[_k];
    console.log("Map map.values() : " + value);
}
// We can check to see if a key is present using the has method:
console.log("We can check to see if  a key is present using the has method : " +
    map.has("A"));
console.log("We can check to see if  a key is present using the has method : " +
    map.has("l"));
// We can check for the size (number of entries) using the size property:
console.log("We can check for thr size using the size method : " +
    map.size);
// We can delete entries using the delete method:
console.log("We can delete entries using the delete method: " +
    map["delete"]("A"));
// We can empty an entire Map by using the clear method:
console.log("We can empty an entries map by using the clear method: " +
    map.clear());
// Set 
console.log('Sets are a bit like maps but they only store keys not key-value pairs.');
var set = new Set();
set.add('Apple');
console.log(set);
// Api Promise
var error = true;
function doAsyncTask() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (error) {
                // code...
                reject('error promise');
            }
            else {
                resolve('done promise');
            }
        }, 900);
    });
}
doAsyncTask().then(function (val) { return console.log(val); }, function (err) { return console.log(err); });
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
//# sourceMappingURL=typescript-base.js.map
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
//# sourceMappingURL=typescript-base.js.map
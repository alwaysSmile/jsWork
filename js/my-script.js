$(document).ready(function () {

});//end .ready

// examples of apply

//*****************
// window.name = 'окошко';
// var test = function () {
//     console.log(this.name);
// }
// test(); //->окошко, т.к. функция объявлена в контексте window
//
// var obj = {
//     name: 'объектик',
//     fx: function () {
//         test();//->окошко, т.к. функция объявлена в контексте window
//         test.apply(this);//->объектик, т.к. мы вызвали функцию в нужном нам контексте
//     }
// }
//
// obj.fx();
//*****************
//*****************
// var person1 = {name: 'Marvin', age: 42, size: '2xM'};
// var person2 = {name: 'Mike', age: 20, size: '1xS'};
//
// var sayHello = function(){
//     console.log('Hello, ' + this.name);
// };
//
// var sayGoodbye = function(){
//     console.log('Goodbye, ' + this.name);
// };
//
// sayHello();
// sayGoodbye();
//
// sayHello.apply(person1);
// sayGoodbye.apply(person2);
//*****************
//*****************
// var x = 10;
// var o = {x: 15};
//
// function f(message) {
//     console.log(message);
//     console.log(this.x);
// }
//
// f("invoking f");
// f.apply(o, ['invoking f through apply']);
//*****************
//*****************
var o = {x: 15};

function f1(message1) {
    console.log(message1 + this.x);
}

function f2(message1, message2) {
    console.log(message1 + (this.x * this.x) + message2);
}

function g(object, func, args) {
    func.apply(object, args);
}

g(o, f1, ["the value of x = "]);
g(o, f2, ["the value of x squared = ", ". Wow!"]);
//*****************
//*****************


//*****************




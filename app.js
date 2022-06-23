const pokedex = ["1", "2", "3", "4"];
pokedex.pop();
console.log("pokedex.pop", pokedex.pop());

var thing;
let func = (str = "no arg") => {
  console.log(str);
};
func(thing);
func(null);

let conservation = true;
let deforestation = false;
let acreOfForest = 100;

if (conservation && !deforestation) {
  console.log("first", ++acreOfForest);
}

const myFunc = () => {
  const a = 2;
  return () => console.log("a is" + a);
};

const a = 1;

const test = myFunc();
test();

console.log(typeof 42.1);

console.log(Boolean("false"));

let animals = ["jaguar", "eagle"];

animals.shift();

console.log(animals[0]);

function sum(num1, num2 = 2, num3 = 3) {
  return num1 + num2 + num3;
}

let values = [1, 5];
let total = sum(4, ...values);
console.log("total", total);

const potato = "potato";
console.log(potato.includes("pot"));

// const lion = 1;

// ++lion;

// document.querySelectorAll("div").forEach((e) => {
//   e.onclick = (e) => console.log(e.currentTarget.id);
// });
// console.log(document.querySelector("span.content").textContent);

// let vowels = "aeiou";

// for (var i = 0; i < vowels.length; i++) {
//   console.log(vowels[i]);
// }

var flagsJson = {
  countries: [
    { country: "Ireland", flag: "IE" },
    { country: "Serbia", flag: "SE" },
    { country: "Peru", flag: "PE" },
  ],
};

console.log(flagsJson.countries[0].flag);

// const foo = {
//   bar() {
//     console.log("first");
//   },
//   name: "Albert",
//   age: 26,
// };

// console.log("foo", foo.bar());

var sound = "GRUNT";
var beer = { sound: "roar" };

roar.apply(beer);

function roar() {
  console.log(this.sound);
}

roar();

const animals1 = ["jaguar", "eagle"];

animals1.reverse();

console.log(animals1.pop());

let fruits = ["Яблоко", "Апельсин", "Слива", "Лимон"];
console.log ( fruits[0] ); // Яблоко
console.log ( fruits[1] ); // Апельсин
console.log ( fruits[2] ); // Слива
console.log ( fruits[3] ); // Лимон
console.log ( fruits.length );
console.log ( fruits.pop() ); // удалили Лимон
fruits.push("Лимон"); // добавили лимон
console.log (fruits);
console.log ( fruits.shift() ); // удалили Яблоко
console.log (fruits);
fruits.unshift('Банан'); // добавили банан
console.log(fruits); 

let arre = [ 1, 'Имя', { name: 'Петя' }, true ];
console.log ( arre[2].name ); // Петя

let fruit = ['Вишня'];
fruit.push('Апельсин', 'Персик');
fruit.unshift('Ананас', 'Лимон');
console.log ( fruit );

function eat(arr) {
    arr.pop();
}
let arr = ["нам", "не", "страшен", "серый", "волк"]

console.log ( arr.length );
eat(arr);
eat(arr);
console.log( arr.length );

let a = [];
a[0] = 0;
a[5] = 5;
console.log(a);

let err = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < err.length; i++) {
    console.log( err[i]);
}

let step = 0
function log(value) {
    console.log(++step, value, typeof value)
}

//Масив цілих чисел
const integers = [5, 8, 9, 7, 2]
log(integers)

// Масив чисел з плаваючою крапкою
const floats = [4.5, 6.05, 7.3, 5.7, 9.4]
log(floats) 

// Масив рядків
const strings = ['name', "age", `growht`]
log(strings)

// Масив з нічого
const nothing = [null]
log(nothing)

//Масив з undefaind
const r = []
log( r[0] )

//Масив дата народження
const yearOfBirth = [1988]
log(yearOfBirth)

//Масив про себе
const aboutMySelf = ['nice girl', '33 years old']
log(aboutMySelf)

//Масив все разом
const allOfType = [8, 6.05, `name`, null, 1988, 1/0]
log(allOfType)

// Масив свій варіант
const myVersionSummer = ["sunny", "sea", "flowers",
"smiles", {programming:"Loves"} ]
log(myVersionSummer)
log(myVersionSummer[4].programming)
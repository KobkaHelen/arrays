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

console.log ( arr.lenght );
eat(arr);
eat(arr);
console.log( arr.length );

let a = [];
a[0] = 0;
a[5] = 5;
console.log(a);

let err = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < err.lenght; i++) {
    console.log( err[i]);
}
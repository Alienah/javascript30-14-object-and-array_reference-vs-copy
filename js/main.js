// En el caso de los strings, numbers o booleanos, cuando igualamos dos variables, en eralidad estamos haciendo una copia

let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100

//si modificamos una, la otra continuará intacta
age = 200;
console.log(age, age2); // 200, 100

//Ahora vamos a poner el ejemplo de una array
const players = ['Aida', 'Pepe', 'Juana', 'Periquita'];

//Y hacemos una copia
const team = players;
console.log(players, team); //They are equal

// Si hacemos esto
team[3] = 'Rober'; //Se cambia en los dos arrays, porque "team" hace referencia al original

//Si quisiéramos hacer una copia de un array, para que el original no pueda ser modificado, haríamos así:
const team2 = players.slice();

//Entonces, si modificásemos tema2[3] = "Rober"; El array players continuaría intacto, sólo habríamos modificado team2

//También podríamos usar el concat:
const team3 = [].concat(players);

//O el spread de ES6
const team4 = [...players];

//0..
const team5 = Array.from(players);

//Lo mismo ocurre con los objetos
const person = {
    name: 'Tyrion Lanister',
    age: 40
};

//Pensaríamos que estamos haciendo una copia aquí:
const king = person;
king.number = 90;

//Pero acabamos de crear otra propiedad en person también, estamos haciendo referencia al original

//Cómo hacemos copias en objetos?
const king2 = Object.assign({}, person, {number: 90, age: 13});

console.log(capt2); //Este tendría los elementos añadidos ahora,, pero el original no se habría modificado

//Esto valdría sólo para el primer nivel del objeto, si el objeto fuera así:

const person2 = {
    name: 'Tyrion Lanister',
    age: 40,
    social: {
        twitter: '@tyrion',
        facebook: 'tyrion-best'
    }

};

//En este caso nuestra copia no estaría proyegida en el nivel twitter y facebook, aun usando el assign



//Desestructuracion de arreglos
const character = [ 'Goku', 'Vegeta', 'Trunks', 'Goten' ];

const [ goku, , trunks, goten, otro = 'Krilin' ] = character; //donde Krilin es una valor por defecto
console.log({ goku, trunks, goten, otro });

const returnArray = () => {
    return ['ABC', 123] as const; //as const es para que no se pueda modificar el arreglo y mantenga el tipo de dato
}

const [ letters, numbers ] = returnArray();

console.log( letters.toLowerCase(), numbers * 2);
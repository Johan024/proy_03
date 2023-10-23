//paquete importado
require('colors');

//referencia el modulo math a traves de la constante math
const math = require('./modules/math.js');

//Limpia consola
console.clear();
//muestra en consola las funciones math
console.log(math);

//Muestra la interfaz hecha y el resultado de las operaciones
const main = async() => {
    console.log('***************************************'.yellow);
    console.log('****'.yellow,'FUNCIONES MATEMATICAS'.bgGreen,
                '************'.yellow);
    console.log('***************************************\n'.yellow);
    console.log('***************************************'.blue);
    console.log('*                                     *'.blue);
    
    
    console.log(math.add(14,6));
    console.log(math.substract(10,4));
    console.log(math.multiply(6,4));
    console.log(math.divide(12,8));

}

main();

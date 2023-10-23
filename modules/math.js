//Funciones math
const Math = {}
    //suma
    function add(a,b){
        return a + b;
    }
    //resta
    function substract(a,b){
        return a - b;
    }
    //multiplicacion
    function multiply(a,b){
        return a * b;
    }
    //division
    function divide(a,b){
        //se muestra si el numero es 0
        if (b ==0){
            return "ERROR NO SE PUEDE DIVIDIR ENTRE 0".red
        }else{
            return a / b;
            }
        }

//Llamamos las funciones math
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//Se exporta el Math
module.exports = Math;

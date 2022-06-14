function validaArray(arr, num){

   try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros");

    if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    if (typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo number");

    if(arr.length !== num) throw new RangeError('Tamanho invalido');

    return arr;

   }

   catch(e){

    if( e instanceof ReferenceError){

        console.log("este erro pe um referenceError");
        console.log(e.message);
    }else if ( e instanceof TypeError){

            console.log("este erro pe um TypeError");
            console.log(e.message);
        

    }else if ( e instanceof RangeError){

            console.log("este erro pe um RangeError");
            console.log(e.message);
        

    }else{

        console.log("ocorreu um tipo de erro nao esperado:" + e);
    }

   }

}

console.log(validaArray(5, 5));
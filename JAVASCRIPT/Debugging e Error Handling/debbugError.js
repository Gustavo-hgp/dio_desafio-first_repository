function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os paâmetros");
        if (typeof arr !== 'object')
            throw new TypeError("O array precisa ser do tipo object");
        if (typeof num !== 'number')
            throw new TypeError("O num precisa ser do tipo number");
        if (arr.length !== num)
            throw new RangeError("Tamanho Inválido!");
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este error é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este error é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este error é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}
console.log(validaArray([1,2,3,3,3], 5));
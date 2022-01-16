function calculadora() {
    const operacao = Number(prompt('escolha um operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**) '));

    if (!operacao || operacao >= 7) {
        alert("operacao invalida");
        calculadora();
    } else {
        let n1 = Number(prompt('insira o 1° número'));
        let n2 = Number(prompt('insira o 2° número'));
        let resultado;
        if (!n1 || !n2) {
            alert('Erro - parametros inválidos');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1}+${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1}-${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(` ${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteria() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} = ${resultado}`);
                novaOperacao();
            }
            function novaOperacao() {
                let nova = prompt('Deseja fazer outra operação?\n 1- sim\n 2- não')
                if (nova == 1) {
                    calculadora();
                } else if (nova == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite uma opção válida');
                    novaOperacao();
                }
            }
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteria();
        } else if (operacao == 6) {
            potenciacao();
        }
    }

}



calculadora();
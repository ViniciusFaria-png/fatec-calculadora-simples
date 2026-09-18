'use strict';

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

const resultado = document.getElementById('resultado');

const soma = document.getElementById('botao-soma');
const subtracao = document.getElementById('botao-subtracao');
const divisao = document.getElementById('botao-divisao');
const multiplicacao = document.getElementById('botao-multiplicacao');


function calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            return num2 === 0 ? 'Erro: Divisão por zero' : num1 / num2;
        default:
            return 'Operação inválida';
    }
}

soma.addEventListener('click', () => {
    resultado.textContent = calcular(Number(numero1.value), Number(numero2.value), '+');
});
subtracao.addEventListener('click', () => {
    resultado.textContent = calcular(Number(numero1.value), Number(numero2.value), '-');
});
multiplicacao.addEventListener('click', () => {
    resultado.textContent = calcular(Number(numero1.value), Number(numero2.value), 'x');
});
divisao.addEventListener('click', () => {
    resultado.textContent = calcular(Number(numero1.value), Number(numero2.value), '/');
});



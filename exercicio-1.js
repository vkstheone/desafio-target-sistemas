/** 
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 */


function fibonacci(n) {
    let a = 0, b = 1, temp;
    while (a < n) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return a === n;
}

let num = parseInt(prompt("Digite um número: "));

if (fibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
}

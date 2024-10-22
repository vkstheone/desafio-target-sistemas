/*2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’,
 seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
 */

 function contarA(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}


let texto = prompt("Digite uma string: ");
let contagem = contarA(texto);

console.log(`A letra 'a' aparece ${contagem} vez(es) na string.`);

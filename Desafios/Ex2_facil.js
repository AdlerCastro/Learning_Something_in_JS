/*  Teorema de Euclides-Euler e aos Primos de Mersenne
    Verificação se um número é perfeito ou não. A perfeição de um número é quando o mesmo representa a somatória de seus números antecessores, exceto ele mesmo. Por exemplo:
        6 = 3+2+1
*/


function isPerfect(number) {
    let soma = 0;

    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            soma += i;
            
            console.log("Número: " + number + " divisor com resto 0: " + i)
            console.log(`Somatória: ${soma} \n`)
        }
    
    }

    return soma == number;
}

var number = 28

if(isPerfect(number)){
    return console.log("É perfeito")
} else {
    return console.log("Não é perfeito")
}


/* Existe uma matriz 3x3 que apresenta um número como valor de cada índice. O objetivo é percorrer do primeiro ao último índice e que, no final, seja apresentado a soma de cada valor que foi percorrido. Desenvolva um código que percorra o caminho de menor valor somado de forma detalhada e explique o comportamento dele*/

function minPath(matriz){
    const n = matriz.length;

    const aux = Array.from({length: n}, () => Array(n).fill(Infinity))

    aux[0][0] = matriz[0][0]

    for (let x = 1; x < n; x++){
        aux[0][x] = aux[0][x - 1] + matriz[0][x]
    }

    for (let y = 1; y < n; y++){
        aux[y][0] = aux[y - 1][0] + matriz[y][0]
    }

    for (let y = 1; y < n; y++) {
        for (let x = 1; x < n; x++) {
          aux[y][x] = Math.min(aux[y - 1][x], aux[y][x - 1]) + matriz[y][x];
        }
      }

      return aux[n-1][n-1]
}

const matriz = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

const result = minPath(matriz)

console.log("A soma do menor caminho encontrado é: " + result)
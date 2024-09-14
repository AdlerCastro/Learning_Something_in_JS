/*  Dado um array de números inteiros embaralhados e repetidos, ordene de forma crescente os números mais repetidos.
    Por exemplo:
        entrada: numeros = [4, 5, 6, 5, 4, 3]
        saída: numeros = [3, 6, 4, 4, 5, 5]
*/

function sortArray() {
    var arr = [4, 5, 6, 5, 4, 3];
    const frequencyMap = new Map();
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    const sortedArray = Array.from(frequencyMap.entries()).sort((a, b) => {
        if(b[1] !== a[1]) return b[1] - a[1]

        return a[0] - b[0]
    }).flatMap(([num, freq]) => Array(freq).fill(num));

    console.log(frequencyMap)
    
    return sortedArray
}

var numeros = [4, 5, 6, 5, 4, 3]
const sortedArray = sortArray(numeros);
console.log(sortedArray)

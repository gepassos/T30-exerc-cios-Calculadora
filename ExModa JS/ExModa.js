// sem uso : var list = ['b', 'a', 'c', 'z', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'leia'];




function reformar() {
    let myString = "Computers account for only 5% of the country's   commercial electricity consumption."
    let stringReformada = myString.toLowerCase().split(' ').join('').split('')

    return stringReformada
}

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);

    let check = [];
    let maior = false;
    for (key in count) {
        let countValue = count[key];

        if (check[0] == undefined) {
            check.push({ 'key': key, value: count[key], maior: true })

        } else {
            for (val of check) {
                checkKey = check.find(element => element.key == key)
                if (val.value == count[key] && !checkKey) {
                    check.push({ 'key': key, value: count[key], maior: true })
                }
                else if (count[key] > val.value && !checkKey) {
                    maior = true
                }
            }
            if (maior) {
                check = [];
                check.push({ 'key': key, value: count[key], maior: true })
                maior = false;
            }
        }

    }
    return check;
}

function exibirResultado() {
    const listaMaiores = Counter(reformar());
    const listaOrdenada = listaMaiores.map(element => `O caractere = '${element.key}' apareceu ${element.value} vez(es)`).sort()

    return listaOrdenada
}


console.log(exibirResultado());

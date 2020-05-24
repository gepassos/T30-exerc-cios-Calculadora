
/*class Btus {
    constructor(area, qtdPessoas, eletroDom) {
        this.area = area
        this.qtdPessoas = qtdPessoas
        this.eletroDom = eletroDom
    }


}
*/

function calcularBtus() {
    let area = parseFloat(document.getElementById("mQuadrado").value)
    let qtdPessoas = parseInt(document.getElementById("qtdPessoas").value)
    let eletroDom = parseInt(document.getElementById("totalEletro").value)

    //const calc = new Btus(area, qtdPessoas, eletroDom)

    let calculo = eletroDom * 600 + area * 600 + (qtdPessoas - 1) * 600

    return alert(calculo)
} 

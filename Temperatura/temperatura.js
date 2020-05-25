class Temperatura {
    constructor(tempC, tempF) {
        this.tempC = tempC
        this.tempF = tempF
    }

    CalcularC(resultado) {  // celsius para F
        this.tempC = parseFloat(document.getElementById("tempC").value)
        resultado = (this.tempC * 9 / 5) + 32
        if (isNaN(this.tempC)) {
            alert('Número inválido ou não foi digitado')
        } else {
            return alert(`${this.tempC} Cº equivalem a : ${resultado} Fº`)
        }
    }

    CalcularF(resultado) {
        this.tempF = parseFloat(document.getElementById("tempF").value)
        resultado = (this.tempF - 32) * 5 / 9
        if (isNaN(this.tempF)) {
            alert('Número inválido ou não foi digitado')
        } else {
            return alert(`${this.tempF} Fº equivalem a : ${resultado} Cº`)
        }
    }
}

// const mytemp = new Temperatura(); caso queira fazer apenas uma instancia e a classe executa o método .
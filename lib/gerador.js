module.exports = class Gerador {
    constructor() {
        this.maxValue = 5000.01
        this.data = [
            {max: 1000, propostas: [
                {
                    fator: 2,
                    numParcelas: 2
                },
                {
                    fator: 2,
                    numParcelas: 3
                }
            ]},
            {min: 1000.01, max: 5000, propostas: [
                {
                    fator: 1.3,
                    numParcelas: 2
                },
                {
                    fator: 1.5,
                    numParcelas: 4
                },
                {
                    fator: 1.5,
                    numParcelas: 10
                }
            ]},
            {min: 5000.01, propostas: [
                {
                    fator: 1.1,
                    numParcelas: 2
                },
                {
                    fator: 1.3,
                    numParcelas: 4
                },
                {
                    fator: 1.3,
                    numParcelas: 10
                },
                {
                    fator: 1.4,
                    numParcelas: 20
                }
            ]}
        ]
    }

    // irá obter o index do objeto data com base no salário
    obterIndex(cliente) {
        
    }

    // irá montar a proposta com base no data, baseado no pdf informado
    montarPropostas(cliente) {
        
    }    
}
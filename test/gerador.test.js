const Gerador = require('../lib/gerador')
const gerador = new Gerador()

describe('Test Gerador Class', () => {
    test('faixa até 1000', () => {
        const cliente = {
            nome: 'Bruno',
            salario: 550,
            idade: 18,
            valorDoEmprestimo: 1000
        }

        const { faixaIndex, propostas } = gerador.montarPropostas(cliente)

        expect(faixaIndex).toBeGreaterThan(-1); //salario foi encontrado no data mapeado
        expect(propostas.length).toBe(2)

        expect(propostas[0].numParcelas).toBe(2);
        expect(propostas[0].total).toBe(2000);
        expect(propostas[0].valorParcela).toBe(1000);

        expect(propostas[1].numParcelas).toBe(3);
        expect(propostas[1].total).toBe(2000);
        expect(propostas[1].valorParcela).toBeCloseTo(666.67);
    })
})
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

    test('faixa de 1000,01 até 5000', () => {
        const cliente = {
            nome: 'Gabriel',
            salario: 1500,
            idade: 20,
            valorDoEmprestimo: 4000
        }

        const { faixaIndex, total, propostas } = gerador.montarPropostas(cliente)

        expect(faixaIndex).toBeGreaterThan(-1);
        expect(propostas.length).toBe(3)

        expect(propostas[0].numParcelas).toBe(2);
        expect(propostas[0].total).toBe(5200);
        expect(propostas[0].valorParcela).toBe(2600);

        expect(propostas[1].numParcelas).toBe(4);
        expect(propostas[1].total).toBe(6000);
        expect(propostas[1].valorParcela).toBe(1500);

        expect(propostas[2].numParcelas).toBe(10);
        expect(propostas[2].total).toBe(6000);
        expect(propostas[2].valorParcela).toBe(600);
    })

    test('faixa acima de 5000,01', () => {
        const cliente = {
            nome: 'Treib',
            salario: 8000,
            idade: 22,
            valorDoEmprestimo: 10000
        }

        const { faixaIndex, total, propostas } = gerador.montarPropostas(cliente)

        expect(faixaIndex).toBeGreaterThan(-1);
        expect(propostas.length).toBe(4)

        expect(propostas[0].numParcelas).toBe(2);
        expect(propostas[0].total).toBe(11000);
        expect(propostas[0].valorParcela).toBe(5500);

        expect(propostas[1].numParcelas).toBe(4);
        expect(propostas[1].total).toBe(13000);
        expect(propostas[1].valorParcela).toBe(3250);

        expect(propostas[2].numParcelas).toBe(10);
        expect(propostas[2].total).toBe(13000);
        expect(propostas[2].valorParcela).toBe(1300);

        expect(propostas[3].numParcelas).toBe(20);
        expect(propostas[3].total).toBe(14000);
        expect(propostas[3].valorParcela).toBe(700);
    })
})
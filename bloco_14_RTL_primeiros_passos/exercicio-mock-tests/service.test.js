
describe("teste das função de service.js", () => {
    it('Ex. 1: testa se a função getRandom é chamada uma vez e se o retorno é igual a 10', () => {
        generateRandom = jest.fn()
            .mockReturnValue(10);
        generateRandom();
        expect(generateRandom).toHaveBeenCalled();
        expect(generateRandom()).toBe(10);
    })

    it('Ex. 2: testa uma nova implementação da função, que ao receber dois valores, divide o primeiro pelo segundo', () => {
        generateRandom = jest.fn((a,b) => a / b);
        expect(generateRandom(4,2)).toBe(2);
    })

    it('Ex. 3: testa uma função mock de três parâmetros, com os retornos indicados, e um teste de uma função que recebe um parâmetro e devolve o seu dobro', () => {
        generateRandom = jest.fn((a,b,c) => a * b * c);
        const testFn = generateRandom(1, 2, 3);
        expect(generateRandom).toHaveBeenCalled();
        expect(testFn).toBe(6);

        generateRandom = jest.fn(a => a * 2);
        const testNwFn = generateRandom(8);
        expect(generateRandom).toHaveBeenCalled();
        expect(testNwFn).toBe(16);
    })

    it('Ex.4.1 O mock inverte a finalidade da função getUpperCase', () => {
        const service = require('./service');

        const testUpper = service.getUpperCase('nunes')
        expect(testUpper).toBe('NUNES');

        service.getUpperCase = jest.fn(upper => upper.toLowerCase());
        const testLow = service.getUpperCase('MÃE');
        expect(testLow).toBe('mãe');
    })

    it('Ex. 4.2 O mock inverte o funcionamento da função getFirstLetter, restaudando, depois, seu valor original', () => {
        const service = require('./service');
        let firstLetterFunc = service.getFirstLetter;

        const firstLetter = firstLetterFunc('Baboseira');
        expect(firstLetter).toBe('B');

        firstLetterFunc = jest.fn(word => word[word.length - 1]);
        const lastLetter = firstLetterFunc('Baboseira');
        expect(lastLetter).toBe('a');

        firstLetterFunc.mockRestore();
        firstLetterFunc = service.getFirstLetter;
        const firstLetterNxt = firstLetterFunc('Fla');
        expect(firstLetterNxt).toBe('F');
    })

    it('Ex. 4.3 O mock altera o número de palavras concatenadas em concatWords para três', () => {
        function concatWords( wordA, wordB) {
            return wordA + wordB;
        }

        const concatTwo = concatWords('quero-', 'quero');
        expect(concatTwo).toBe('quero-quero');

        concatWords = jest.fn((a, b, c) => a + b + c);
        const concatThree = concatWords('bem-', 'te-', 'vi');
        expect(concatThree).toBe('bem-te-vi');
    })
})
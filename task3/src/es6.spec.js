const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });

        it('минимальная з/п ноль, обработан случай деления на 0', () => {
            assert.strictEqual(core.calculateSalaryDifference([0, 1, 2, 3]), 3);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });

        it('экземпляр класса не создается при передаче null и выводит сообщение об ошибке', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.setСouple(null, 'сборник слов в алфавитном порядке, с пояснениями'), 'the values must be string type');
        });

        it('экземпляр класса не создается при передаче undefined и выводит сообщение об ошибке', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.setСouple('картошка', undefined), 'the values must be string type');
        });

        it('экземпляр класса не создается без переданных значений и выводит сообщение об ошибке', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.setСouple(), 'the values must be string type');
        });

        it('добавление и получение слова', () => {
            const dic = new core.Dictionary();
            dic.setСouple('словарь', 'сборник слов в алфавитном порядке, с пояснениями');
            assert.strictEqual(dic.getDefinition('словарь'), 'сборник слов в алфавитном порядке, с пояснениями');
        });

        it('проверка наличия слова', () => {
            const dic = new core.Dictionary();
            dic.setСouple('словарь', 'набор слов');
            assert.strictEqual(dic.hasWord('словарь'), true);
            assert.strictEqual(dic.hasWord('кактус'), false);
        });

        it('удаление слова', () => {
            const dic = new core.Dictionary();
            dic.setСouple('кактус', 'это растение');
            dic.deleteWord('кактус');
            assert.strictEqual(dic.hasWord('кактус'), false);
        });

        it('удаление недобавленного слова', () => {
            const dic = new core.Dictionary();
            dic.setСouple('кактус', 'это растение');
            assert.strictEqual(!!dic.deleteWord('гладиолус'), false);
        });

        it('размер словаря', () => {
            const dic = new core.Dictionary();
            dic.setСouple('кактус', 'это растение');
            dic.setСouple('словарь', 'это набор пар: ключ – значение');
            assert.strictEqual(dic.sizeDictionary(), 2);
        });

        it('очистка словаря', () => {
            const dic = new core.Dictionary();
            dic.setСouple('вот такое тут слово', 'и тут длинное определение');
            dic.setСouple('тут уже другое слово', 'другое определение');
            dic.clearDictionary();
            assert.strictEqual(dic.sizeDictionary(), 0);
        });

        it('очистка пустого словаря', () => {
            const dic = new core.Dictionary();
            dic.clearDictionary();
            assert.strictEqual(dic.sizeDictionary(), 0);
        });

        it('красивый вывод словаря', () => {
            const dic = new core.Dictionary();
            dic.setСouple('собирает мама сына', 'в школу');
            assert.strictEqual(dic.returnDictionary(), 'собирает мама сына: в школу');
        });
    });

});
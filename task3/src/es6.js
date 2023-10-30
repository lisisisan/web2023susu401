"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let fioSplit = fio.split(' ');
    return fioSplit[1] + ' ' + fioSplit[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return [...new Set(array)];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length) {
        let min = array[0];
        let max = array[0];
    
        min = array.reduce((min, current) => Math.min(min, current));
        max = array.reduce((max, current) => Math.max(max, current));
    
        return min === 0 ? max : max / min;
    }
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }
    
    setСouple(word, definition) {
        if (typeof word === 'string' && typeof definition === 'string') {
            this.dictionary.set(word, definition);
        } else {
            return 'the values must be string type';
        }
    }

    hasWord(word) {
        return this.dictionary.has(word);
    }
    
    getDefinition(word) {
        return this.dictionary.get(word);
    }

    sizeDictionary() {
        return this.dictionary.size;
    }
    
    deleteWord(word) {
        this.dictionary.delete(word);
    }

    clearDictionary() {
        return this.dictionary.clear();
    }

    returnDictionary() {
        const dictionaryArray = [];
        for (const [word, definition] of this.dictionary) {
          dictionaryArray.push(`${word}: ${definition}`);
        }
        return dictionaryArray.join('\n');
      }      
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
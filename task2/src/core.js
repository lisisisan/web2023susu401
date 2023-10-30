//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    // логические операции только для целой части
    return ~~n === n;

    // второй вариант (в целом по сути тоже самое, но длиннее)
    // return integerPart(n) === n.toString(2) || integerPart(n) === '' ? true : false;

    // function integerPart(n) {
    //     if (n === 0) {
    //         return '';
    //     } 

    //     const binaryDigit = (n & 1).toString(2);
    //     const headDigit = integerPart(n >> 1);

    //     return headDigit + binaryDigit;
    // }
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }

    return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n <= 0) return 0;
    
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n <= 0) return 1;
    
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n > 1) {
        let binaryArray = n.toString(2).split('');
        // при сортировке по убыванию вторым числом будет 0
        n = binaryArray.sort( (a, b) => b - a );

        return n[1] ^ 1; 
        
    } 
    
    return n === 1 ? 1 : 0;
    // return n > 0 && (n & (n - 1)) === 0;  // лучше так, но тут просто практика, так что.....
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (!operatorFn) {
        return () => initialValue;
      }
    
    return (newValue) => {
        initialValue = operatorFn(initialValue, newValue);
        return initialValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let currentValue = start; 

    return function() {
        const answer = currentValue;

        currentValue += step;

        return answer;
    }
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    let answer = false;

    if (firstObject === secondObject) {
        answer = true;
    } else if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        answer = true;
    } else if (
        firstObject === Infinity && secondObject === Infinity ||
        firstObject === -Infinity && secondObject === -Infinity
    ) {
            answer = true;
    } else if (
        Array.isArray(firstObject) && Array.isArray(secondObject) &&
        firstObject.length === secondObject.length
    ) {
        let i = 0; 

        do {
            answer = deepEqual(firstObject[i], secondObject[i]);
            i++;
        } while (answer && i < firstObject.length);

    } else if (
        typeof firstObject === 'object' && 
        typeof secondObject === 'object'
    ) {

        let keysFirstObject = Object.keys(firstObject);
        let keysSecondObject = Object.keys(secondObject);

        if (keysFirstObject.length === keysSecondObject.length) {
            let i = 0;

            do {
                let keyObject = keysFirstObject[i];
                let isIncludesKey = keysSecondObject.includes(keyObject);

                answer = isIncludesKey && deepEqual(firstObject[keyObject], secondObject[keyObject]);

                i++;
            } while (answer && i < keysFirstObject.length);
        }
    }

    return answer;  
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};

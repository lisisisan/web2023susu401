/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor (X = 0, Y = 0) {
        this.x = X;
        this.y = Y;
    }

    distance() {
        return Math.sqrt(this.x << 1 + this.y << 1);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    constructor(X = 0, Y = 0, Z = 0) {
        super(X, Y); 
        this.z = Z; 
      }

    static vectorLength(a, b) {
        return Math.sqrt( (a.x - b.x)**2 + (a.y - b.y)**2 + (a.z - b.z)**2 );
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {
    constructor(array = []) {
        this.array = array;
    }

    enqueue(last) {
        return this.array.push(last);
    }

    dequeue() {
        if (this.array.length) {
            return this.array[0];
        } else {
            return false
        }
    }

    returnQueue() {
        return this.array;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};

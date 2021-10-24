// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

'use sirict'

// 1.1
// es5
function Product(name, price){
    this.name = name;
    this.price = price;
}

let Product1 = new Product( 'car', 1000)

Product1.make25PercentDiscount = function (){
    console.log(this.price * 0.85)
}

// es6
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        console.log(this.price * 0.85)
    }
}
let Product1 = new Product( 'car', 1000)

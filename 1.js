'use sirict'

// 1.1
function Product(name, price){
    this.name = name;
    this.price = price;
}

let Product1 = new Product( 'car', 1000)

Product1.make25PercentDiscount = function (){
    console.log(this.price * 0.85)
}

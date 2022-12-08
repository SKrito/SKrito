class Xiaomi{
    constructor(){
        this.model = 'Redmi Note 11'
        this.year = 2021
        this.memory = 64
        this.color = 'red'
        this.brand = 'Xiaomi'
    }
}

class Iphone{
    constructor(){
        this.model = 'XS Max'
        this.year = 2020
        this.memory = 256
        this.color = 'gold'
        this.brand = 'Apple'
    }
}


class Samsung{
    constructor(){
        this.model = 'Galaxy A13'
        this.year = 2020
        this.memory = 32
        this.color = 'blue'
        this.brand = 'Samsung'
    }
}

console.log(new Iphone)
console.log(new Samsung)
console.log(new Xiaomi)

//Завдання 1



class Xiaomi{
    constructor(model, year, memory, color){
        this.model = model;
        this.year = year;
        this.memory = memory
        this.color = color;
        this.brand = 'Xiaomi';
    }
}

class Iphone{
    constructor(model, year, memory, color){
        this.model = model;
        this.year = year;
        this.memory = memory
        this.color = color;
        this.brand = 'Iphone';

class Samsung{
    constructor(model, year, memory, color){
        this.model = model;
        this.year = year;
        this.memory = memory
        this.color = color;
        this.brand = 'Samsung';
    }
}

console.log(new Xiaomi('Redmi Note 11',2021,64'red'))
console.log(new Iphone('XS max',2020,256,'gold'))
console.log(new Samsung('Galaxy A13',2020,32,'blue'))

//Завдання 2

class Phone{
    constructor(model, year, color, memory){
        this.model = model;
        this.year = year;
        this.color = color;
        this.memory = memory
    }
}

class Xiaomi extends Phone{
    constructor(model, year, color, memory) {
        super(model, year, color, memory)
        this.brand = 'Xiaomi';
    }
}

class Iphone extends Phone{
    constructor(model, year, color, memory) {
        super(model, year, color, memory)
        this.brand = 'Iphone';
    }
}

class Samsung extends Phone{
    constructor(model, year, color, memory) {
        super(model, year, color, memory)
        this.brand = 'Samsung';
    }
}

console.log(new Xiaomi('Redmi Note 11',2021,'red',64))
console.log(new Iphone('XS Max',2020,'gold',256))
console.log(new Samsung('Galaxy A13',2020,'blue',32))

//Завдання 3


class Phone{
    constructor(model, year, color, mem) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
    }

    calculatePrice = () => {
        let coefficient = 1.12 
        return Math. round(((this.mem * coefficient)/ (YearNow - this.year)) * 10);
    }

    calculateYear = () => {
        return(YearNow - this.year)
    }

}

class Iphone extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Iphone';
    }
}

class Xiaomi extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Xiaomi';
    }
}

class Samsung extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Samsung';
    }
}

var YearNow = 2022

let iphone = new Iphone('XS Max',2020,'gold',256)
let xiaomi = new Xiaomi('Redmi Note 11',2021,'red',64)
let samsung = new Samsung('Galaxy A13',2020,'blue',32)

console.log('Телефону ' + iphone.calculateYear() + ' iphone');
console.log('Ціна телефона - '+ iphone.calculatePrice() + ' $');

console.log('Телефону '+ xiaomi.calculateYear() + ' xiaomi');
console.log('Ціна телефона - ' + xiaomi.calculatePrice() + ' $');

console.log('Телефону '+ samsung.calculateYear() + ' samsung') ;
console.log('Ціна телефона - '+ samsung.calculatePrice() + ' $');

// Завдання 4

class Phone{
    constructor(model, year, memory,color){
    this.model = model
    this.year = year;
    this.memory = memory;
    this.color = color;
    }
    //модель
    get model(){
        this._model = model;
    }
    set model(model){
        this._model = 'XS Max'
    }
    
    get year(){
        this._year = year;
    }
    set year(year){
        this._year = 2020
    }
     get memory(){
        this._memory = memory;
    }
    set memory(memory){
        this._memory = 256
    }
    get color(){
        this._color = color;
    }
    set color(color){
        this._color = 'gold'
    }
    
}
let phone = new Phone()
console.log(phone)

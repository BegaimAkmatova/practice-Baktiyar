// let user = {
//     name: 'John',
//     go: function() {
//         alert(this.name)
//     }
// }

// user.go()  // John

//________________________________________

// function makeUser() {
//     return {
//         name: 'John',
//         ref: this
//     }
// }

// let user = makeUser();

// alert(user.ref.name);   // пусто, undefined, анткени this методдун ичинде гана иштейт


// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this;
//         } 
//     }
// }

// let user = makeUser();

// alert(user.ref().name);  // John

//___________________________________________________________

// Создайте обьект calculator(калькулятор) с тремя методами
// this - бул жерде 1-чи жана 2-чи санга ссылка кылып берип жатат
// this жок иштебейт

// let calculator = {
//     sum() {
//         return this.a + this.b
//         // return Number(this.a) + Number(this.b)
//     },
//     mult() {
//         return this.a * this.b
//     },
//     read() {
//         this.a = +prompt('num1',0)
//         this.b = +prompt('num2', 0)
//     }
// }

// calculator.read()

// alert(calculator.sum())
// alert(calculator.mult()) 

//_______________________________________________________

// функция конструктор мн calculator()

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('num1',0)
//         this.b = +prompt('num2',0)
//     }
//     this.sum = function() {
//         return this.a + this.b
//     }
//     this.mult = function() {
//         return this.a * this.b
//     }
// }

// // ошондо переменный функция болуп калды ошону мн дагы функция конструктор ынгайлуу
// let calculator = new Calculator()  // бир переменный ачтык ага функцияны new деген соз мн баштап переменныйга присваивать этип койдук

// calculator.read()  // переменныйдын атынан эле функциянын ичиндеги методдорго кайрылсак болот

// alert(calculator.sum())   
// alert(calculator.mult())

//_________________________________________________________________________________________
// Manager 1
// const John = {
//     name: 'John',
//     sales: 0,
//     sell: function(thing) {
//         this.sales++
//         return 'Manager ' + this.name + ' ' + 'sold ' + thing
//     }
// }

// console.log(John.sales);
// console.log(John.sell('Apple'))
// console.log(John.sell('Banan'))
// console.log(John.sell('Oruk'))
// console.log(John.sales)

// Manager 2
// const Nurs = {
//     name: 'Nurs',
//     sales: 0,
//     sell: function(thing) {
//         this.sales++
//         return 'Manager ' + this.name + ' ' + 'sold ' + thing
//     }
// }

// console.log(Nurs.sales);
// console.log(Nurs.sell('Apple'))
// console.log(Nurs.sell('Banan'))
// console.log(Nurs.sell('Oruk'))
// console.log(Nurs.sales)

//_____________________________________________________________________

// Функция конструктор мн

const Manager = function(name, sales) {   // function expression
    this.name = name;
    this.sales = sales;
}

Manager.prototype.sell = function(эмнесатты) {   // prototype-мурастоо,копировать. Manager ди копировать этип sell деген функция кошуп салдык
    this.sales++
    return 'Manager ' + this.name + ' ' + 'sold ' + эмнесатты
}

const John = new Manager('John', 10)  // (name, sales) аргументке данныларды беребиз
const Nurs = new Manager('Nurs', 20)

console.log(John.sales, Nurs.sales);
console.log(John.sell('Juzum'));
console.log(Nurs.sell('Kurut'));
console.log(John.sales, Nurs.sales);




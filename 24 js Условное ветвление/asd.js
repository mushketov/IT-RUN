// console.log(Boolean((true || 1) && 2 || (undefined && 0) || (2 || 5)));
// console.log(Boolean(undefined && 1));

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// let input = 'ECMAScript'
// if (input === 'ECMAScript'){
//     console.log('Верно!')
// }else {
//     console.log('Не знаете? ECMAScript!')
// }
//
// input === 'ECMAScript' ? console.log('Верно!') : console.log('Не знаете? ECMAScript!')

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//     Предполагается, что пользователь вводит только числа.
// let age = -1
// if (age > 0){
//     console.log(1)
// }
// else if (age < 0){
//     console.log(-1)
// }
// else if (age === 0){
//     console.log(0)
// }
// age > 0 ? console.log(1) : age < 0 ? console.log(-1) : age === 0 ? console.log(0) : ''

// Перепишите конструкцию if с использованием условного оператора '?':
// //
// // let result;
// //
// // if (a + b < 4) {
// //     result = 'Мало';
// // } else {
// //     result = 'Много';
// // }
// let result;
// a + b < 4 ? result = 'Мало' : result = 'Много'

// let a = 1, b = 4;
// let result = a + b < 4 ? 'Мало' : 'Много';
// console.log(result)

// Перепишите if..else с использованием нескольких операторов '?'.
//
//     Для читаемости рекомендуется разбить код на несколько строк.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

// let login = "Директор"
// login === "Сотрудник" ? console.log('Привет'):
//     login === "Директор" ? console.log('Здравствуйте'):
//        console.log('Нет логина')

// let login = "Директор";
// login === "Сотрудник" ? console.log("Привет") :
//     login === "Директор" ? console.log("Здравствуйте") :
//         console.log("Нет логина");

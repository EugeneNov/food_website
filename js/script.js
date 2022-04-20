"use strict";
/* // ! Задание переменных и констант
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
const obj = {
	a: 50,
};
console.log(obj);
obj.a = 10;

console.log(obj);
(function () {})();
// ! Типы данных
let number = 4.5; // Number

console.log(-4 / 0); // -Infinity
console.log("string" * 7); // NaN

const string = "Vasya"; // String

const booLean = false; // Boolean

console.log(undef); // null

let jija;
console.log(jija); // undefined

const obj = {
	name: "Vasya",
	age: 24,
	isMarrid: false,
};
console.log(obj.isMarrid);
console.log(obj.name);
console.log(obj["age"]);

let arr = [23, "lol", {}, [23, "lol", {}, [], "dick"], "dick"];
console.log(arr[2]);

"" + 1 + 0 = "10" //
"" - 1 + 0 = -1 //
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" //
"  -9  " - 5 = -14 //
null + 1 = 1 //
undefined + 1 = NaN //
" \t \n" - 2 = -2 //

// !Взаимодействие с пользователем
alert("Hi Nigga!");
const rezQues = confirm("Ты чмо?");
console.log(rezQues);
const answer = +prompt("Длинна указательного пальца?(см)", "2");
console.log(answer);

const answers = [];

answers[0] = prompt("Ваше имя?", "");
answers[1] = prompt("Ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof answers);

// ! 008 Интерполяция (вставлять внутри строки значения переменных)
const category = "toys";
const url = "https://someurl.com/";
console.log(`${url}${category}/5`); // !используем кавычки там, где буква ё

// ! 009 Операторы в JS
// *Конкатинация - при помощи оператора сложения (унарный плюс) преобразование строк в числа, и чисел в строки
console.log("someString" + " - object"); // *выйдет строка
console.log(typeof (4 + "5")); // *выйдет строка
console.log(typeof (4 + +"5")); // *выйдет число

// *Инкремент и декримент (2 формы префиксная и постфиксная)
let incr = 10,
	decr = 10;
// ++incr;
// decr--;
console.log(incr++); //выводит значение потом увеличивает
console.log(--decr); //уменьшает потом выводит измененное значение
console.log(2 * 5 == "10"); // true сравнение не строгое (не сравниваются типы данных)
console.log(2 * 5 === "10"); // false сравнение строгое
// * = - присваивание
// * == - сравнение только знчений без учета типа данных
// * === - строгое сравнение знчений с учетом типа данных
// * && - И - если все правда возвращает правду
// * || - ИЛИ - хотябы 1 правда возвращает правду
// * ! - Отрицание - меняет на противоположное
// * != - Отрицание - меняет на противоположное
const isCheked = false,
	isClose = true;
console.log(isCheked || !isClose);
 */
//!Практика 012
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	 - count - сюда передается ответ на первый вопрос
	 - movies - в это свойство поместить пустой объект
	 - actors - тоже поместить пустой объект
	 - genres - сюда поместить пустой массив
	 - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	 - 'Один из последних просмотренных фильмов?'
	 - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	 movies: {
		  'logan': '8.1'
	 }

Проверить, чтобы все работало без ошибок в консоли */

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const filmName1 = prompt("Один из последних просмотренных фильмов?", ""),
	filmRating1 = prompt("На сколько оцените его?", ""),
	filmName2 = prompt("Один из последних просмотренных фильмов?", ""),
	filmRating2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[filmName1] = filmRating1;
personalMovieDB.movies[filmName2] = filmRating2;
console.log(personalMovieDB);
 */
// ! 013 Условия
/* if (4 == 9) {
	console.log("OK!");
} else {
	console.log("error");
}

const numB = 23;
if (numB > 70) {
	console.log(">3");
} else if (numB < 50) {
	console.log("<50");
} else {
	console.log("fuck you!");
}
// * Тернарный оператор, который работает с 3мя аргументами
numB == 23 ? console.log("numB=23") : console.log("fuck you!");

// * Switch
const num = 20;
switch (num) {
	case 22:
		console.log("num=22");
		break;
	case 21:
		console.log("num=21");
		break;
	case 24:
		console.log("num=24");
		break;
	default:
		console.log("fuck you!");
		break;
} */
// ! 014 Циклы
/* let num = 50;

while (num <= 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++){
	if (i === 6) {
		//break;
		continue;
	}
	console.log(i);
} */
//!Практика 015
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
/* 
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
	let filmName = prompt("Один из последних просмотренных фильмов?", ""),
		filmRating = +prompt("На сколько оцените его?", "");
	if (!filmName || !filmRating || filmName.length > 50) {
		console.log(
			"пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов"
		);
		i--;
		continue;
	}
	personalMovieDB.movies[filmName] = filmRating;
}

let filmName,
	filmRating,
	i = 0;

while (i < 2) {
	filmName = prompt("Один из последних просмотренных фильмов?", "");
	filmRating = +prompt("На сколько оцените его?", "");
	if (!filmName || !filmRating || filmName.length > 50) {
		console.log(
			"пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов"
		);
		i--;
		continue;
	}
	personalMovieDB.movies[filmName] = filmRating;
	i++;
}
console.log(personalMovieDB);

// ?Ивана решение
for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = +prompt("На сколько оцените его?", "");
	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}
console.log(personalMovieDB);
// ?конец
 */
// ! 016 Функции, стрелочные функции
/* // ? Function declaretion
function showMessage(text) {
	console.log(text);
}
showMessage("lil");

let num = 20;
function showMessage() {
	num = 55;
	return num;
}
showMessage();
console.log(num);

function calc(a, b) {
	return a + b;
}
console.log(calc(5, 6));
console.log(calc(35, 44));

// ? Function expression
let bz = function (a, b, c) {
	return a + b + c;
};
console.log(bz(3, 4, 2));

const calk = (a, b, c) => {
	return a + b + c;
};
console.log(calk(3, 4, 2));

function checkAge(age) {
	return age > 18 ? true : confirm("Родители разрешили?");
}
console.log(checkAge(19));
function checkAge(age) {
	return age > 18 || confirm("Родители разрешили?");
}
console.log(checkAge(19));
 */

// ! 017 Методы и свойства строк и чисел
/* const str = "testLul",
	arr = [1, 2, 3];

console.log(arr.length);
const someText =
		"Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Языкового грустный ipsum дорогу необходимыми одна. Великий не семантика, предложения журчит ты проектах выйти свою возвращайся злых заголовок подзаголовок что?",
	slicedText = someText.indexOf("рыбные");

console.log(someText.slice(slicedText, -1));
console.log(someText.substring(slicedText, slicedText + 6));
console.log(someText.substr(slicedText, slicedText + 6));

const num = 15.5;
console.log(Math.round(num));

const numQ = "15.9px";
console.log(parseInt(numQ));
console.log(parseFloat(numQ));
console.log(Math.round(parseFloat(numQ))); */
//!Практика 018
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
// ? Начало
/*
let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

	while (!numberOfFilms) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
	}
	return numberOfFilms;
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let personalGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
		if (!personalGenres) {
			console.log(`Ваш любимый жанр под номером ${i + 1} ${personalGenres}`);
			i--;
		} else {
			personalMovieDB.genres[i] = personalGenres;
		}
	}
}
writeYourGenres();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let filmName = prompt("Один из последних просмотренных фильмов?", ""),
			filmRating = +prompt("На сколько оцените его?", "");
		if (!filmName || !filmRating || filmName.length > 50) {
			console.log("Введите данные");
			i--;
			continue;
		}
		personalMovieDB.movies[filmName] = filmRating;
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
detectPersonalLevel();
function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}
showMyDB();
// ? Конец
*/
// function detectPersonalLevel() {
// 	personalMovieDB.count < 10
// 		? console.log("Просмотрено довольно мало фильмов")
// 		: personalMovieDB.count <= 30
// 		? console.log("Вы классический зритель")
// 		: personalMovieDB.count > 30
// 		? console.log("Вы киноман")
// 		: console.log("Произошла ошибка");
// }
// detectPersonalLevel();

/* 
let filmName,
	filmRating,
	i = 0;

while (i < 2) {
	filmName = prompt("Один из последних просмотренных фильмов?", "");
	filmRating = +prompt("На сколько оцените его?", "");
	if (!filmName || !filmRating || filmName.length > 50) {
		console.log(
			"пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов"
		);
		i--;
		continue;
	}
	personalMovieDB.movies[filmName] = filmRating;
	i++;
}
console.log(personalMovieDB); */

// ! 019 Callback функции
/* function iLern(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}
function afterTimeout() {
	console.log("After timeOut!");
}
iLern("JS", afterTimeout); */
// ! 020 Объекты, деструктуризация объектов (ES6)
/* const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red",
	},
	makeTest: function () {
		// TODO Это метод, тоесть функция внутри обьекта
		console.log("Test");
	},
};
options.makeTest();
// TODO Деструктуризация объектов (вытащить данные обьекта в переменные)
const { border, bg } = options.colors; // TODO создали 2 переменные из объекта colors
console.log(border);
console.log(bg);

console.log(Object.keys(options).length);
// TODO Object.keys(название объекта) --выдает массив со всеми свойствами объекта.
// TODO .length --колличество ключей

console.log(options.colors.bg);
console.log(options["colors"]["bg"]);
delete options.name; // TODO Удалить свойство объекта
console.log(options);

for (let key in options) {
	// TODO перебор свойств обьекта
	if (typeof options[key] === "object") {
		// TODO свойство которое тоже обьект
		for (let i in options[key]) {
			// TODO перебор его значений
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		// TODO перебор обычных свойств
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
}
 */
// ! 021 Массивы и псевдомассивы
/* 
const arr = [20, 10, 44, 32];
arr.sort(compareNum);
function compareNum(a, b) {
	// TODO функция для сортировки цифр в массиве по порядку
	return a - b;
}
console.log(arr);

arr.forEach(function (item, i, arr) {
	// TODO --вывод всех элементов массива (перебор) используем всегда (кроме когда нужно остановить в определенном месте (break) или пропустить итерацию (continiue) тогда используем FOR)
	console.log(
		`${i}-порядковый номер (реальный индекс),${item}-значение соответствующее этому порядковому номеру, ${arr}-собственно весь массив`
	);
});

for (let value of arr) {
	// TODO --вывод всех элементов массива (перебор) через for_of
	console.log(value);
}
for (let i = 0; i < arr.length; i++) {
	// TODO --вывод всех элементов массива (перебор) через обычный цикл
	console.log(arr[i]);
	console.log(`${i + 1}-й элемент массива равен: ${arr[i]}`);
}
arr.pop();
// TODO --удаление последнего элемента массива
arr.push(10);
// TODO --добавление элемента в конец массива

const str = "sahjkdkj, asdasdj, asdjaslkd, askdoaskd";
const someShit = str.split(", ");
someShit.sort();
// TODO --сортерует по алфовиту
console.log(someShit);
// TODO --распиливает строку по ключу на отдельные элементы массива
console.log(someShit);
console.log(someShit.join("# "));
// TODO --слепить элементы массива в строку через разделитель
 */
// ! 022 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// ! передача по значению работает только для примитивных типов данных (числа, строки, булевые данные), при работе с объектами передача по ссылке
/* 
let a = 10,
	b = 20;
b = a;
b += 4;
console.log(a);
console.log(b);
// TODO примитивы выше передают данные
const obj = {
	a: 5,
	b: 10,
	c: 20,
};
const copyObj = obj; //TODO передается не сам обьект(данные обьекта, а просто ссылка на него
copyObj.a = 20;
console.log(obj);
console.log(copyObj);
// TODO обект obj изменился по ссылке

// ? Создание поверхносной копии обекта (первый уровень вложенности (тоесть сложные объекты внутри будут также пеедаваться по ссылке)) при помощи цикла.
const obj = {
	a: 5,
	b: 10,
	c: 20,
};

function copy(mainObj) {
	// TODO функция которая копирует и возвращает объект
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}
const newObj = copy(obj);
newObj.a = 100;
console.log(obj);
console.log(newObj);

const addToObj = {
	d: 32,
	e: 0,
};
console.log(Object.assign(obj, addToObj));
// ? Добавление елементов к обьекту. Также создает независимую копию объекта
console.log(Object.assign({}, obj));
// ? Независимая поверхносная копия объекта obj

// ? Создание поверхносной копии массива
const arr = ['a', 'b', 'c'],
		copyArr = arr.slice();
copyArr[1] = 2;
console.log(arr);
console.log(copyArr);

// ! Создание поверхносных копий (современных) при помощи Spread оператора ES6-ES9
const nums = [1, 2, 3, 4],
	words = ["vova", "pipka", "tr9s"],
	numsWords = [...nums, ...words, "da", 2]; // ? разбивает массивы на значения и вставляет копию
numsWords[2] = "asnhdjashd";
console.log(numsWords);
console.log(nums);
// ? Копирование массива
const copyMassive = [...numsWords];

// ? копирование объекта
const objN = {
	d: 32,
	e: 0,
};
const objNcopy = { ...objN };
 */
// ! 023 Основы ООП, прототипно-ориентированное наследование
/* 
// ! Любые методы примененные даже к простым данным преобразовуют их в обект, выполняются методы и возвращается такой же простой тип данных

let str = "some str",
	strObj = new String(str); //? приминение метода стринг к строке сделало ее объектом
console.log(typeof str);
console.log(typeof strObj);

const protoObj = {
	width: 500,
	height: 300,
	backgroundColor: "#fff",
	color: "black",
	seyHello: function () {
		console.log("Hello!");
	},
};
const obj = Object.create(protoObj); // ? создание объекта и присваивание ему прототипа
// const obj = {
// 	height: 100,
// };
// obj.__proto__ = protoObj; // ? старый способ установки прототипа объекта
// Object.setPrototypeOf(obj, protoObj); //? новый способ
console.log(obj.color);
obj.seyHello();
 */

// ! 024 Практика (Объекты и методы)
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
/* 
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
		while (!personalMovieDB.count) {
			personalMovieDB.count = +prompt(
				"Сколько фильмов вы уже посмотрели",
				""
			);
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			let personalGenres = prompt(
				`Ваш любимый жанр под номером ${i + 1}`,
				""
			);
			if (!personalGenres) {
				i--;
			} else {
				personalMovieDB.genres[i] = personalGenres;
				console.log(
					`Ваш любимый жанр под номером ${i + 1}: ${personalGenres}`
				);
			}
		}
		personalMovieDB.genres.forEach(function (item, i) {
			// TODO --вывод всех элементов массива (перебор) используем всегда (кроме когда нужно остановить в определенном месте (break) или пропустить итерацию (continiue) тогда используем FOR)
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let filmName = prompt("Один из последних просмотренных фильмов?", ""),
				filmRating = +prompt("На сколько оцените его?", "");
			if (!filmName || !filmRating || filmName.length > 50) {
				console.log("Введите данные");
				i--;
				continue;
			}
			personalMovieDB.movies[filmName] = filmRating;
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count <= 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function () {
		// ?personalMovieDB.privat = confirm("Сделать вашу базу данны приватной?");
		if (!personalMovieDB.privat) {
			console.log(personalMovieDB);
		}
	},
};
// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
 */

// ! 026 Динамическая типизация в JS
/* 
// ? to String

// 1)
console.log(typeof String(null));
console.log(typeof String(4));
// 2) конкатинация
console.log(typeof (4 + ""));

const num = 5;
console.log("http://fb.com/catalog/" + num);

const fontSize = 26 + "px";

// ? to Number
// 1)
console.log(typeof Number("null"));
console.log(Number("null"));

// 2) унарный плюс
console.log(typeof +"5");

// 3)
console.log(typeof parseInt("15px", 10));
console.log(parseInt("15px", 10));

// ? To boolean
// * что всегда превращается в false:
// *-- 0, '', null, undefind, NaN;
// 1)
let switcher = null;
if (switcher) {
	console.log("Not working....");
}
switcher = 1;
if (switcher) {
	console.log("Working....");
}

// 2)
console.log(Boolean("null"));
console.log(Boolean(null));

// 3)
console.log(Boolean(!!"null"));
console.log(Boolean(!!null));
 */

// ! 027 задача по пониманию типов данных
//Какое будет выведено значение: let x = 5; alert( x++ ); ?
//5

//Чему равно такое выражение: [ ] + false - null + true ?
// console.log(typeof([ ] + false)); // пустой массив приводится в строку + фалсе к строке выходит строка "false"
// console.log(typeof('false' - null)); // математ. действие к строке выходит NaN
// console.log(typeof(NaN + true)); // NaN + boolean = NaN
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// 2

// Чему равна сумма [ ] + 1 + 2?
// '12'

// Что выведет этот код: alert( "1"[0] )?
// 1

// Чему равно 2 && 1 && null && 0 && undefined ?
// ? оператор И (&&) запинается на лжи и выводит ее типа как через ретурн
// ? оператор ИЛИ (||) запинается на правде
// null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// нет

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// ? оператор ИЛИ (||) запинается на правде
// 3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// не верно, поскольку сравниваются не элементы массивов а сами массивы, и они разные

// Что выведет этот код: alert( +"Infinity" ); ?
// 1
// console.log(typeof(+"Infinity"));
// Infinity - число;

// Верно ли сравнение: "Ёжик" > "яблоко"?
// false

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// 2

// ! 028 Получение элементов со страницы
/* 
// ? Устаревшие
const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button");
console.log(btns[1]);

const circles = document.getElementsByClassName("circle");
console.log(circles);

// ? Новые
const hearts = document.querySelectorAll(".heart");
hearts.forEach((item) => {
	console.log(item);
});

const oneHeart = document.querySelector(".wrapper");
console.log(oneHeart);
 */

// ! 029 Действия с элементами на странице
/* 
const box = document.getElementById("box"),
	btns = document.getElementsByTagName("button"),
	circles = document.getElementsByClassName("circle"),
	wrapper = document.querySelector(".wrapper"),
	hearts = wrapper.querySelectorAll(".heart"),
	oneHeart = wrapper.querySelector(".heart");

box.style.backgroundColor = "#0f0";
box.style.width = "200px";

box.style.cssText = "background-color: red; width: 500px";

btns[1].style.borderRadius = "100%";

for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = "blue";
}
hearts.forEach((item) => {
	item.style.backgroundColor = "#0f0";
});

const div = document.createElement("div"); //создание Дива в коде
div.classList.add("black"); //добавление этому диву класса
wrapper.prepend(div); //вставка дива в ДОМ (в начало враппера)
wrapper.append(div); //вставка дива в ДОМ (в конец враппера)

wrapper.insertBefore(div, hearts[1]); //устаревшая вставка что вставляем (див), и куда вставляем до 2го элемента сердца.

hearts[1].before(div); //вставка до элемента
hearts[0].after(div); //вставка после элемента

circles[0].remove(); //del
wrapper.removeChild(hearts[1]); //удаление старое

hearts[1].replaceWith(circles[0]); //заменить один элемент другим
wrapper.replaceChild(circles[0,hearts[0]]); //замена старая

hearts[1].before(div);
div.innerHTML = "<h1>Hellow world!</h1>";
div.textContent = "Hellow!";
div.insertAdjacentHTML('beforebegin','<h2>Hellow</h2>');
 */

//! 031 События и их обработчики
/* 
const btn1 = document.querySelector(".btn1"),
	btn2 = document.querySelector(".btn2"),
	overlay = document.querySelector(".btn_wrapper"),
	btn3 = overlay.querySelector(".btn3"),
	btns = document.querySelectorAll("button");
 */
// btn1.onclick = () => {
// 	alert("click");
// };
// btn1.addEventListener("click", () => {
// 	console.log("click");
// });

// btn1.addEventListener("mouseenter", (event) => {
// 	console.log(event.target);
// 	// console.log("mausenter (hover)");
// });

// let i = 0;
// const chengeColorElem = (e) => {
// ? добавление и убирание обработчика после отработки
// 	console.log(e.target);
// 	i++;
// 	if (i == 1) {
// 		btn2.removeEventListener("click", chengeColorElem);
// 	}
// };
// btn2.addEventListener("click", chengeColorElem);

// const nElemListeners = (e) => {
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// 	console.log(e.type);
// };
// btns.forEach((btn) => {
// 	// ? обработчик на все кнопки
// 	btn.addEventListener("click", nElemListeners, { once: true }); //? 3й параметр который передаем аддЭвентЛис это опция (once - выполнить один раз)
// });
// const btn = document.querySelector('button');

/* 
function random(number) {
	//? возвращает рандомный цвет
	return Math.floor(Math.random() * (number + 1));
}

const funcClick = function () {
	const rndCol =
		"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
	this.style.backgroundColor = rndCol;
};
btn2.addEventListener("click", funcClick);
 */
// btn3.addEventListener("click", nElemListeners);
// overlay.addEventListener("click", nElemListeners);

// const link = document.querySelector("a");
// link.addEventListener("click", (e) => {
// 	e.preventDefault();// ? отмена событий по умолчанию
// 	console.log(e.target);
// });

// ! 032 Навигация по DOM - элементам, data-атрибуты, преимущество for_of
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('data-current="3"').nextElementSibling);

// for (let node of document.body.childNodes) {
// 	if (node.nodeName == "#text") {
// 		continue;
// 	}
// 	console.log(node);
// }
// ! 034 События на мобильных устройствах
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel
/* 
window.addEventListener("DOMContentLoaded", () => {
	const box = document.querySelector("#box");

	box.addEventListener("touchstart", (e) => {
		e.preventDefault();

		console.log("start");
	});

	box.addEventListener("touchmove", (e) => {
		e.preventDefault();

		console.log(e.targetTouches[0].pageX);
	});

	box.addEventListener("touchend", (e) => {
		e.preventDefault();

		console.log("end");
	});
});
 */
// touches
// targetTouches
// chengedTouches

// ! 035 Async, defer, динамические скрипты
/* 
// В HTML: <script async src="/js/script.js"></script>
// ? async -- загрузка паралельно со всем остальным, и выполнится как только будет готов, не ждет ДОМ, и другие скрипты

// В HTML: <script defer src="/js/script.js"></script>
// ? defer -- загрузка паралельно с ДОМ, но выполнится только после загрузки ДОМ, следующий скрипт с таким параметром, будет ждать загрузки этого скрипта прежде чем начнет сам загружаться

function loadScript(src) {
	const script = document.createElement("script");
	script.src = src;
	script.async = false; //по умолчанию true для динамически добавляемых на страницу скриптов
	document.body.append(script);
}

// loadScript(какой-то путь к скрипту)
 */

// ! 037 ClassList и делегирование событий
/* 
const btns = document.querySelectorAll(".first button"),
	btnsWrapper = document.querySelector(".wrapper .first");

// console.log(btns[0].classList.length); // кол-во классов у 1й кнопки
// console.log(btns[0].classList.item(1)); // возвращает 2й класс по счету у элемента

// console.log(btns[1].classList.add("green, sdad")); // добавить класс
// console.log(btns[0].classList.remove("red")); // удалить класс
// console.log(btns[2].classList.toggle("green")); // если есть удалить, если нет добавить

// btns[0].addEventListener("click", () => {
// 	// if (!btns[1].classList.contains("red")) {
// 	// 	btns[1].classList.add("red");
// 	// } else {
// 	// 	btns[1].classList.remove("red");
// 	// }

// 	btns[1].classList.toggle("red");
// });

btnsWrapper.addEventListener("click", (e) => {
	// ? делегирование (передача) события клика от враппера кнопок, к самим кнопка по условию, что позволяет работать с динамически добавленным контентом

	// console.dir(e.target);
	// if (e.target && e.target.nodeName == "BUTTON") {
	// 	// ? e.target --проверка существует ли (есть обьекты у которых нет таргета)
	// 	// ? имя ноды выше в консоле дир проверили что такое свойство есть
	// 	e.target.classList.toggle("green");
	// } else {
	// 	e.target.classList.toggle("red");
	// }

	// if (e.target && e.target.classList.contains("red")) {
	// //? e.target --проверка существует ли (есть обьекты у которых нет таргета)
	// //? содержит ли класс ред, наш таргет
	// 	btns[2].classList.toggle("green");
	// }

	if (e.target && e.target.matches("button.red")) {
		//? e.target --проверка существует ли (есть обьекты у которых нет таргета)
		//? matches ('button.red') - проверка с селекторами
		e.target.classList.toggle("green");
	}
});

const newBtn = document.createElement("button");
//? динамически добавляем еще 1 баттон
newBtn.classList.add("red");
btnsWrapper.append(newBtn);
 */

// ! 038 Создаем табы в новом проекте

window.addEventListener("DOMContentLoaded", () => {
	const tabHeader = document.querySelector(".tabheader__items"),
		tabHeaderItem = document.querySelectorAll(".tabheader__item"),
		tabContent = document.querySelectorAll(".tabcontent");

	function hideTabContent() {
		tabContent.forEach((e) => {
			e.classList.remove("show", "fade");
			e.classList.add("hide");
		});
		tabHeaderItem.forEach((e) => {
			e.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(i = 0) {
		//? если функция без параметра вызывается, то по умолчанию задаем 0
		tabContent[i].classList.remove("hide");
		tabContent[i].classList.add("show", "fade");
		tabHeaderItem[i].classList.add("tabheader__item_active");
	}
	hideTabContent();
	showTabContent();

	tabHeader.addEventListener("click", (e) => {
		// ? делегирование (передача) события клика от враппера кнопок, к самим кнопка по условию, что позволяет работать с динамически добавленным контентом
		const target = e.target;
		if (target && target.matches("div.tabheader__item")) {
			tabHeaderItem.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	// ! 041 Создаем таймер обратного отсчета на сайте
	const oneDayMillisec = 24 * 60 * 60 * 1000,
		plusOneDay = new Date(Date.now() + oneDayMillisec),
		// deadline = "2022-04-18", // ? можно указать так
		timerSelector = ".timer";

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function getZero(numb) {
		if (numb >= 0 && numb < 10) {
			// ? если число меньше 10 добавляем перед числом ноль
			return `0${numb}`;
		} else {
			return numb;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			seconds.textContent = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(timerSelector, plusOneDay);

	// !043 Создаем модальное окно
	const modalWind = document.querySelector(".modal"),
		modalBtn = document.querySelectorAll("button[data-modal]"),
		modalCloseBtn = document.querySelector("[data-close]");

	function showModal(modal = modalWind) {
		modal.classList.add("show", "fade");
		modal.classList.remove("hide");
		document.body.style.overflow = "hidden";
		clearInterval(intervalModal);
	}

	function hideModal(modal = modalWind) {
		modal.classList.add("hide");
		modal.classList.remove("show", "fade");
		document.body.style.overflow = "";
	}

	modalBtn.forEach((btn) => {
		btn.addEventListener("click", () => {
			showModal();
		});
	});

	modalCloseBtn.addEventListener("click", () => {
		hideModal();
	});

	modalWind.addEventListener("click", (e) => {
		if (e.target === modalWind) {
			hideModal();
		}
	});
	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modalWind.matches(".show")) {
			hideModal();
		}
	});

	// ! 044 Модификации модального окна
	const intervalModal = setTimeout(showModal, 5000);

	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			// ? невидимая область документа + видимая область = высота всего документа
			showModal();
			window.removeEventListener("scroll", showModalByScroll);
		}
	}
	window.addEventListener("scroll", showModalByScroll);
});

// ! 039 Скрипты и время их выполнения. setTimeout и setInterval
/* 
const modal = document.querySelector(".modal"),
	modalClose = document.querySelector(".modal__close"),
	modalBtn = modal.querySelector("button");
function hideModal(e = modal) {
	if (e.style.display == "block") {
		e.style.display = "none";
	}
}
function showModal(e = modal) {
	e.style.display = "block";
}
const intervalModal = setInterval(showModal, 1000);

// setTimeout(() => {
// 	modal.style.display = "block";
// }, 3000);

modalClose.addEventListener("click", () => {
	// ? делегирование (передача) события клика от враппера кнопок, к самим кнопка по условию, что позволяет работать с динамически добавленным контентом
	hideModal();
});
modalBtn.addEventListener("click", () => {
	// ? делегирование (передача) события клика от враппера кнопок, к самим кнопка по условию, что позволяет работать с динамически добавленным контентом
	console.log("1");
	clearInterval(intervalModal);
});
let i = 0; // ? счетчтик
let id = setTimeout(function log() {
	console.log("Hellow!"); // ? этот код будет строго выполняться строго через каждые полсекунды, вне зависимости от того, сколько времени нужно чтобы код выполнился (рекурсия СетИнтервал)
	id = setTimeout(log, 500);
	i++;
	if (i === 3) {
		// ? если выполнилось 10 раз отрубаем интервал
		clearInterval(id);
	}
}, 500);
 */
// ! 040 Работа с датами
// const nowData = new Date();

// console.log(nowData.getFullYear());
// console.log(nowData.getMonth());
// console.log(nowData.getDate());

// console.log(nowData.getDay());

// console.log(nowData.getHours()); // ? месный часовой пояс
// console.log(nowData.getUTSHours()); // ? по гринвичу

// console.log(nowData.getTimezoneOffset()); // ? на сколько минут разница с гринвичем

// console.log(nowData.getTime()); // ? милисекунд прошло с 1970 года

// const dats = nowData.getTime();
// console.log(new Date(dats));

// // ? сколько проходит времени между событиями
// const startDate = new Date();
// for (let i = 0; i < 9999999999; i++) {
// 	let some = i ** 3;
// }
// const endDate = new Date();
// console.log(`Код отработал за ${(endDate - startDate) / 1000} секунд`);

// !042 Параметры документа, окна и работа с ними
// console.log(
// 	document.querySelector(".offer__action .btn").getBoundingClientRect() //? координаты элемента (все считаются от лквого верхнего угла)
// );

// console.log(
// 	window.getComputedStyle(document.querySelector(".offer__action .btn"))
// 	//? все скомпилированные стили объекта
// );

// console.log(
// 	window.getComputedStyle(document.querySelector(".offer__action .btn"))
// 		.display
// 	//? Какое надо свойство можем получить, но не можем изменять
// );

// console.log(document.documentElement.scrollTop);
/* 
document.querySelector(".order__form .btn").addEventListener("click", (e) => {
	//? скролл топ 0
	e.preventDefault();
	function scrollTop0() {
		if (document.documentElement.scrollTop <= 0) {
			clearInterval(interval);
		} else {
			document.documentElement.scrollTop -= 30;
		}
	}
	const interval = setInterval(scrollTop0, 10);
});
 */
// window.scrollBy(0, 300); //? скролл от текущего положения на 300 пх вниз
// window.scrollTo(0, 300); //? скролл от начала страницы на 300 пх вниз

//! 045 Функции-конструкторы
// function User(name, age, id) {
// 	// ? Инициализация функции-конструкора (она создает разные объекты)
// 	this.name = name;
// 	this.age = age;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function () {
// 		// ? можно добавлять методы в конструктор
// 		console.log(`Hello ${this.name}`);
// 	};
// }
// User.prototype.exit = function () {
// 	// ? если нет доступа к основной функции конструктору таким образом добвляем к ней еще методы или параметры
// 	console.log(`Пользователь ${this.name} вышел`);
// };
// /*
// class User {
// 	// ? классы это синтаксический сахар функций-конструкторов (тоже самое)
// 	constructor(name,age,id){
// 		this.name = name;
// 	this.age = age;
// 	this.id = id;
// 	this.human = true;
// 	}
// 	hello() {
// 		console.log(`Hello ${this.name}`);
// 	}
// 	exit() {
// 		console.log(`Пользователь ${this.name} вышел`);
// 	}
// }
//  */
// const eugene = new User("Eugene", 33);
// // ? Создание с помощью конструктора новых обьектов
// const taras = new User("Taras", 10);
// // ? Создание с помощью конструктора новых обьектов
// eugene.id = "#322";
// // ? запись данных в обект
// eugene.id = "322";
// // ? перезапись данных в обект

// console.log(eugene);
// taras.hello();
// eugene.exit();

//! 046 Контекст вызова. This

//! ВАЖНО
// function showThis(a, b) {
// 	console.log(this); //undefind
// 	function sum() {
// 		console.log(this); //undefind
// 		return a + b; //ищит в теле своей функции, потом ищет у родительской функции
// 	}

// 	console.log(sum()); //зымыкаем функцию
// }
// showThis(5, 15);
//? 1) В обычной функции заданной через свойство function : контекст this = window, если не использован 'use strict', если использован = undefined.

// const obj = {
// 	a: 30,
// 	b: 40,
// 	sum: function () {
// 		// это метод функции и его контекст вызова сам объект
// 		console.log(`контекст вызова метода объекта равен = ${this}`);
// 		function shout() {
// 			console.log(
// 				`контекст вызова функции, которая не является методом равно = ${this}`
// 			);
// 		}
// 		shout();
// 		const bz = () => {
// 			console.log(
// 				`контекст вызова функции, которая не является методом (но являющейся стрелочной) равно = ${this}`
// 			);
// 		};
// 		bz();
// 	},
// };
// obj.sum();
// //? 2) Контекст this у методов объектов = самому обьекту.

// function User(name, age, id) {
// 	// ? Инициализация функции-конструкора (она создает разные объекты)
// 	this.name = name;
// 	this.age = age;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function () {
// 		// ? можно добавлять методы в конструктор
// 		console.log(`Hello ${this.name}`);
// 	};
// }
// const eugene = new User("Eugene", 33);

// //? 3) this в конструкторах и классах - это новый экземпляр объекта (конструктора или класса)

// function sayName(id, rlyBig) {
// 	console.log(this);
// 	console.log(this.name);
// 	console.log(this.dick);
// 	console.log(id);
// 	console.log(rlyBig);
// }

// const user = {
// 	name: "Pipka",
// 	dick: 10,
// };
// sayName.call(user, 23, true); //указание функции работы на контексте в часности на обьекте user
// sayName.apply(user, ["23", true]);

// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2); // (2) передается в функцию как контекст вызова (вместо this)
// console.log(double(5));
// console.log(double(22));

//? 4) Ручная привязка this: это методы call и apply (прямое указание функции контекста), bind (создает новую функцию связанную с определенным контекстом).

// const btn = document.querySelector(".modal__content button");

// // btn.addEventListener("click", function (e) {
// // 	if (e.target === this) {
// // 		console.log("e.target === this");
// // 	}
// // });

// const objJ = {
// 	num: 5,
// 	sayNumb: function () {
// 		const say = () => {
// 			console.log(this.num);
// 		};
// 		say();
// 	},
// };
// objJ.sayNumb();

//! 047 Классы (ES6)
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}
class ColoredRectangleWithText extends Rectangle {
	//? Наследует методы и свойства от родительского класса Rectangle
	constructor(height, width, text, bgColor) {
		super(height, width); //? копирует все параметры родителя this.height = height; и this.width = width;, если ничего в скобках не указано, либо непосредственно те, которые указываем
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(
			`Текст: ${this.text}, цвет: ${this.bgColor}, высота:${this.height}, ширина:${this.width}`
		);
	}
}

const squaer = new Rectangle(10, 10);
const squaerLong = new Rectangle(20, 100);
const squaerWidthText = new ColoredRectangleWithText(40, 50, "Lol", "#000");
// console.log(squaer.calcArea());
// console.log(squaerLong.calcArea());
squaerWidthText.showMyProps();
console.log(squaerWidthText.calcArea());
//! Принципы ООП
//? 1) Абстракция - отделение концепции от экземпляра. Пример это КЛАССЫ концепция это сам шаблон класса, и экземпляры это копии на основе этого шаблона с разными параметрами.

//? 2) Наследование - способность объекта или класса базироваться на другом объекта или классе

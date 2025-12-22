//Q1変数
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5四則演算
let johnAge = playerList[0].age;
let bobAge = playerList[1].age;
let michaelAge = playerList[2].age;

let averageAge = (johnAge + bobAge + michaelAge) / 3;

console.log(averageAge);

//Q6関数
// 名前つき関数
function sayHello() {
  console.log('Hello');
}

// 実行
sayHello();

// 無名関数
let sayWorld = function () {
  console.log('World');
};

// 実行
sayWorld();

//Q7メソッド
user.birthday = '2000-09-27';

user.sayHello = function () {
  console.log('Hello!');
};

user.sayHello();

//Q８引数
let calc = {};

// 足し算
calc.add = function (x, y) {
  console.log(x + y);
};

// 引き算
calc.subtract = function (x, y) {
  console.log(x - y);
};

// 掛け算
calc.multiply = function (x, y) {
  console.log(x * y);
};

// 割り算
calc.divide = function (x, y) {
  console.log(x / y);
};

// 実行
calc.add(3, 4);// 7
calc.subtract(15, 5); // 10
calc.multiply(7, 7);// 49
calc.divide(10, 2);// 5

//Q9返り値
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);

console.log('5 を 3 で割った余りは ' + result + ' です。');

//Q10スコープ
function foo() {
  let x = 1;
}

// x は foo 関数の中（ローカルスコープ）で定義されているため、
// 関数の外から参照することができない。
// そのため、console.log(x) を実行すると
// x is not defined（変数 x が定義されていない）というエラーになる。


//応用編
//Q1標準組み込みオブジェクト
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Q2-1コールバック関数
setTimeout(function () {
  console.log('Hello World!');
}, 3000);

//Q2-2コールバック関数
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('高沢', addIntro);


//Q3if
let num = 3;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

//Q4for
let numbers = [];

for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}














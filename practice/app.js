console.log('Hello World!');

console.log('1つ目の値', '2つ目の値');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

let num = 10;
console.log(num);
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加
let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 25;
let num2 = 2;

console.log(num1 + num2);

let stringNum1 = '25';
let stringNum2 = '2';
console.log(stringNum1 + stringNum2);


let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle + 'です');

function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea();   // ←これが関数の呼び出し
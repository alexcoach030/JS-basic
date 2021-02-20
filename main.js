var a =1, b=1, c, d; //Задание 1
c = ++a;
console.log(c);//2 - возвращает 2 благодаря префиксной форме (инкрементирование сразу)
d = b++;//постфиксная форма сначала возвращает значение, затем инкременирует b
//только после выполнения строки 4 b будет инкрементировано (то есть станет равно 2)
//поэтому следующая строка возвращает нам единицу
console.log(d);//1
c = (2 + ++a);
/* в 8 строке 2 прибавляется к еще одному ++а, "а" после икрементации во второй строке
имеет значение 2, плюс оно повторно сразу инкременируется и получает
 значение 3(префиксная форма ++),
таким образом получаем 5
 */
console.log(c);//5
d = (2 + b++);
/*в 14 строке "b" имеет значение 2 (поскольку было инкрементировано после
выполнения операции в строке 4), при этом инкрементация, указанная в текущей строке,
будет произведена уже после окончания выполнения операции, поэтому 2+2=4
 */
console.log(d);//4
console.log(a);//3 - исходное 1 дважды инкременировано в строках 2 и 8
console.log(b);//3 - исходное 1 дважды инкременировано в строках 4 и 15

/*В постфиксной форме сначала происходит возвращение значения,
    а потом выполняется инкрементирование.
    В префиксной форме инкрементирование производится сразу,
    а возврат — уже с обновленным значением.*/

//Задание 2

var x = 2;
var y = 1 + (x*=2);//*= -присваивание с умножением, работает как x = x*2 (2*2=4)
console.log(y);//5 = 1 + (2*2) = 1+4 = 5

//Задание 3

var a3=+prompt("Введите целое число");
var b3=+prompt("Введите целое число");
var x3;

if (isNaN(a3)||isNaN(b3)) {
    alert('Введены неверные параметры');
}else {
    if ((a3 >= 0 & b3 >= 0) || (a3 < 0 & b3 < 0)) {//Проверяем, что оба аргумента одного знака
        if ((a3 >= 0) && (b3 >= 0)) {//Проверяем, если оба положительные
            if (a3 >= b3) {//Добавил, чтобы разность всегда выдавало как положительное значение
                x3 = a3 - b3;
            } else {
                x3 = b3 - a3;
            }
            alert('Разница между числами составляет ' + x3);
        } else {//Выполняем, если аргументы отрицательные (разные знаки мы отсеили в строке 42)
            x3 = a3 * b3;
            alert('Произведение чисел составляет ' + x3);
        }
    } else {//Выполняем, если знаки разные
        x3 = a3 + b3;
        alert('Сумма чисел составляет ' + x3);
    }
}
/*Делал только через if else, как предполагалось, наверное, с учетом пройденных операторов
Наверняка ряд проверок можно упростить через иные комбинации условий, если да, то как?
Как в этой ситуации лучшим образом прекратить выполнение скрипта, если пользователь
введет не число и вернуть его к повторному вводу?
 */

//Задание 4
var a4 = prompt('Введите целое число от 0 до 15');
switch (a4){
    case '0':
        alert('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '1':
        alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '2':
        alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '3':
        alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '4':
        alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '5':
        alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '6':
        alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '7':
        alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '8':
        alert('8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '9':
        alert('9, 10, 11, 12, 13, 14, 15');
        break;
    case '10':
        alert('10, 11, 12, 13, 14, 15');
        break;
    case '11':
        alert('11, 12, 13, 14, 15');
        break;
    case '12':
        alert('12, 13, 14, 15');
        break;
    case '13':
        alert('13, 14, 15');
        break;
    case '14':
        alert('14, 15');
        break;
    case '15':
        alert('15');
        break;
}

/*Если делать только через switch, то получается так, хотя проще такое сделать
через массив и while, или я не правильно понял? Можно ли как-то только с использованием
switch автоматизировать добавление необходимого количества чисел в alert?
 */

//Задание 5

function addition (q,z) {//сложение
   return  q + z;
}

function subtraction (q,z){//Вычитание
    return q-z;
}

function multiplication (q,z){//умножение
    return q*z;
}

function division (q,z){//деление
    return  q/z;
}

var a5 = +prompt("Введите число");
var b5 = +prompt('Введите число');

if (isNaN(a5)||isNaN(b5)){
    alert("Вы ввели не число")
}else {
    addition(a5,b5);
    subtraction(a5,b5);
    multiplication(a5,b5);
    division(a5,b5);
    alert('Сумма: ' + addition(a5,b5)+ ' Разница: ' + subtraction(a5,b5) + ' Умножение: ' + multiplication(a5,b5) + ' Деление: ' + division(a5,b5));
}


//Задание 6
function mathOperation(arg1,arg2,operation){
    switch (operation) {
        case 1:
            return addition(arg1, arg2);
        case 2:
            return subtraction(arg1, arg2);
        case 3:
            return multiplication(arg1, arg2);
        case 4:
            return division(arg1,arg2);
    }
}

var a6 = +prompt('Введите число');
var b6 = +prompt('Введите число');
var op = +prompt('Выберите действие: 1 - сложение; 2 - вычитание; 3 - умножение; 4- деление');
if (isNaN(a6)||isNaN(b6)||isNaN(op)){
    alert('Вы ввели неверные данные');
}else{
    alert(mathOperation(a6,b6,op));
}

/*Очень интересно, можно ли здесь еще что-либо сократить
Так же обратил внимание, что если в этом задании прописывать следующим образом:
case 1:
addition(arg1, arg2)
return
В таком случае возвращается undefined, так понимаю, причина - области видимости?
 */

//Задание 7
console.log(null>0); //выдает false
console.log(null==0); //false
console.log(null<0); //false

console.log(null>=0); //true
console.log(null<=0); //true

/* Из учебника JS
Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному.
Сравнения преобразуют null в число, рассматривая его как 0.
Поэтому выражение null >= 0 истинно, а null > 0 ложно.
С другой стороны, для нестрогого равенства == значений undefined и null
действует особое правило: эти значения ни к чему не приводятся,
они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно
 */

//Задание 8
function power (val, pow){
    if (val === 0){
        return (0);
    }

    if (pow === 0){
        return (1);
    }

    if (pow < 0){
        return (val*power(1/val,-pow));
    }else {
        return (val*power(val,pow-1));
    }
}

var a8 = +prompt('Введите число');
var b8 = +prompt('Введите степень для возведения');

if (isNaN(a8)||isNaN(b8)){
    alert('Неверные данные. Введите числовые значения!');
}else {
    alert(power(a8,b8));
}

//Пришлось здорово повспоминать математику, но вроде бы все работает








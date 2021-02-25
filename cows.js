function getNewGame(){
    arr = [number.split('')];
}

function getUserNumber(){
     while (true) {
        let userNumber = prompt(`Загадано четырехзначное число (${number}). Чтобы прекратить игру, оставьте поле пустым или введите "0"`, '');
        if ((userNumber==0)||(userNumber==='')) break;
        userNumberToCheck = [userNumber.split('')];
        if (userNumberToCheck[0].length==arr[0].length) return userNumberToCheck;
     }return programFinish=1;
}

function getRandomNumber(min,max){
    let number = min + Math.random()*(max+1-min);//В учебнике по JS читал, что иные функции делают вероятности не равными
    return Math.floor(number);
}
let arr = [];
let number;
let cows;
let bulls;
let programFinish = 0;//для прекращения всей программы
let userNumberToCheck;
let newGame = 1;//для запуска повторной игры без выхода из программы

    number = `${getRandomNumber(1000,9999)}`;
        arr = [number.split('')];
        while (programFinish==0) {
            cows = 0;
            bulls = 0;
            userNumberToCheck = getUserNumber();
            for (i = 0; i < userNumberToCheck[0].length; i++) {//запускаем цикл, при котором i не превысит последнее значение массива
                if (userNumberToCheck[0][i] === arr[0][i]) bulls++;//совпадение элементов массивов = бык
                if (bulls == arr[0].length) {//если количество быков в итоге = длине массива, значит все числа отгаданы - победа
                    number = `${getRandomNumber(1000,9999)}`;
                    alert('Поздравляем! Вы угадали число!');
                    newGame = +prompt('Введите число "1", чтобы повторить игру, или оставьте поле пустым, чтобы закончить')
                    if (newGame !==1) break;
                    getNewGame();//соответственно, если победа, коровы проверять уже не треюуется
                }
            }
            for (j = 0; j < arr[0].length; j++) {//аналогично цикл для j не превышающего последний элемент
                for (item of arr[0]) {//перебор всего массива, проверяем совпадение чисел, но исключаем совпадение одновременно числа и позиции (то есть быки из коров исключаем)
                    if (item === userNumberToCheck[0][j]&&userNumberToCheck[0][j]!==arr[0][j]) cows++;
                }
            }
            if (bulls !== arr[0].length) {//Выводим подсказку пользователю
                alert(`Быки: ${bulls}, Коровы: ${cows}`);
            }
            if (newGame !== 1) break;
        }

/*Warnings:
line8: Comparison userNumber==0 may cause unexpected type coercion
l10: Comparison userNumberToCheck[0].length==arr[0].length may cause unexpected type coercion
l28:Comparison programFinish==0 may cause unexpected type coercion
l34:Comparison bulls == arr[0].length may cause unexpected type coercion

Так же обратил внимание IDE:
l32:Variable i implicitly declared
l42:Variable j implicitly declared
l43:Unresolved variable or type item
l44:Unresolved variable or type item

Хотелось бы разобраться с ними и понять, к чему они ведут
*/

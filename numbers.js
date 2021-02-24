function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getUserNumber(){
    userNumber = +prompt('Введите число!')
    if (isNaN(userNumber)){
        alert('Вы ввели не число');
        return getUserNumber();
    }
}

function checkUserNumber(){
    while (gameContinue == 0){
        compareUserNumber();
        attempsCounter++;
    }
    alert(`Поздравляем! Вам потребовалось попыток: ${attempsCounter}`);
    return;
}

function compareUserNumber(){
    if(userNumber<number){
        alert('Загаданное число больше!')
    }else if (userNumber>number) alert('Загаданное число меньше!');
    else {
        gameContinue=1;
        return;
    }
    getUserNumber();
}
let number;
let programmFinish = 0;
let gameContinue = 0;
let attempsCounter = 0;

while (programmFinish == 0){
    number = getRandomInt(100);
    console.log(number);
    getUserNumber();
    gameContinue = 0;
    attempsCounter = 0;
    checkUserNumber();
    if (prompt('Повторим игру? Введите y для повторения', '')!='y'){
        programmFinish = 1;
    }
}


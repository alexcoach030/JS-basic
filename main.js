//Задание 1
let i=0;
while (true){
    console.log(i++);
    if (i>100) break;
}

//Задание 2

function addBasket(){
    let cargoToAdd = prompt('Перечислите через запятую (без пробелов) порядковые номера товаров, которые хотите добавить в корзину: 1 - велосипед, 2 - автомобиль, 3 - самолет, 4 - яхта. Например: "1,2,3,4", если хотите добавить все товары');
    let cargoToBasket = cargoToAdd.split(',');
    for (i=0;i<cargoToBasket.length;i++){
        countBasket.push(cargos[+cargoToBasket[i]-1]);
    }
}

function countBasketPrice(){
    let price = 0;
    for (i=0;i<countBasket.length;i++){
        price += countBasket[i][1];
    }return alert(`Общая стоимость составит ${price}`);
}

let countBasket = [];
let cargos = [
    ['bicycle', 100],
    ['car', 300],
    ['plane', 500],
    ['ship', 1000]
]

addBasket();
countBasketPrice();

/*В cargos в массиве первое значение - наименование, второе (числовое) - цена товара
В последствии, так понимаю, будет лучше использовать объекты вместо массива для таких значений,
но пока не проходили, использую массив. Проверки на введеную пользователем не добавлял, потому что в последствии
все равно буду изменять данную форму при переходе к объектам*/

//Задание 3
for (i=0;i<10;console.log(i++)){}

//Задание 4
let pyramid = '';
for (i=0;i<20;i++){
    pyramid +='x'
    console.log(pyramid);
}

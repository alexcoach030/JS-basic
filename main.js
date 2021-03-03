function addBasket(){
    let bask = document.createElement('div');
    bask.className = 'basket-cargo'
    bask.innerText = `Корзина пуста`;
    shop.appendChild(bask);
}

function price (){
    for (let i = 0; i<basket.length; i++){
        let a = basket[i].id;
        sum += products[a].price*basket[i].amount;
    }
    return sum;
}

function addToBasket(){
    while (true){
        let id = +prompt('Введите товар из каталога: 1 - bike, 2 - car, 3 - ship, 4 - something. Если Вы больше не хотите совершать покупки, нажмите "Отмена", введите "0" или оставьте поле пустым', '');
        if (id == 0) return basket;
        if (id > 4 || id < 1) alert('Нет такого товара в каталоге!');
        if (isNaN(id)) alert('Вы не выбрали товар! Введите число!')
        if (id > 0 && id < 5) {
            let amount = +prompt('Введите количество', '1');
            let prod = {};
            prod.id = id;
            prod.amount = amount;
            basket.push(prod);
        }
    }
}

function changeBasket(){
    if (count > 0){
        let newBasket = document.querySelector('.shop');
        let newBasketCargo = document.createElement('div');
        newBasketCargo.className = 'basket-cargo'
        summary = price();
        quantity = count;
        newBasketCargo.innerText = `В корзине ${quantity} товаров на сумму ${summary}`;
        newBasket.replaceChild(newBasketCargo, shop.children[0]);
    }else return;
}

let products = {
    1: {
        name: 'bike',
        price: 300
    },
    2: {
        name: 'car',
        price: 500
    },
    3: {
        name: 'ship',
        price: 1000
    },
    4: {
        name: 'something',
        price: 100
    }
}

addBasket();
let basket = [];
let sum = 0;
let count = 0;
basket = addToBasket();
for (let i = 0; i< basket.length; i++){
    count += basket[i].amount;
}
changeBasket();



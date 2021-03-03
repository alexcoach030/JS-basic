function price (){
    for (let i = 0; i<basket.length; i++){
        let a = basket[i].id;
        sum += products[a].price*basket[i].amount;
    }
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
                let bask = document.createElement('div');
                bask.className = 'basket-cargo'
                shop.appendChild(bask);
                price();
                let quantity = document.createElement('span');
                quantity = amount;
                let summary = document.createElement('span');
                summary = sum;
                bask.innerText = `В корзине ${quantity} товаров на сумму ${summary}`;
                quantity = amount;
                summary = sum;


        }
    }
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

let basket = [];
let sum = 0;


basket = addToBasket();

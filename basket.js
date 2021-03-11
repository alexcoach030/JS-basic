document.addEventListener('DOMContentLoaded', () => {

    function filter(event){
        let action = event.target.dataset.filter;
        if (!action) return;
        let catalog = document.getElementById('catalog');
        if (action === 'all'){//если "Показать все товары"
            catalog.innerHTML = '';
            getCatalog();
            return;
        }
        let products = catalog.querySelectorAll('.prod');//получаем все prod в каталоге
        products.forEach(element => {//перебираем проды и удаляем лишние
            if (element.dataset.type !== action) element.remove();
        })
    }

    function getCatalog(){
        for (let [key, value] of Object.entries(products)) {//Перебираю объект массивов с каталогом для вывода в DOM
            let product = document.createElement('div');
            product.className = 'prod';
            product.dataset.id = key;
            product.dataset.type = value.type;
            let name = value.name;
            let price = value.price;
            product.innerHTML = `<p>Название:</p> <p>${name}</p><p>Цена: ${price}</p><button data-name="add" data-id="${key}">Добавить в корзину</button>`
            catalog.append(product);
        }
    }

    function price() {
        sum = 0;
        for (let i = 0; i < basket.length; i++) {
            let a = basket[i].id;
            sum += products[a].price * basket[i].amount;
        }
        return sum;
    }

    function getBasket() {
        let prodId = basket[basket.length - 1].id;
        let cargo = document.createElement('p');
        cargo.innerHTML = `<p>Название товара: <span>${products[prodId].name}</span>, цена: <span>${products[prodId].price}</span></p>`
        cart.append(cargo);
    }

    function addToCart(event) {
        let action = event.target.dataset.name;
        if (!action) return;
        let id = event.target.dataset.id;
        let amount = 1;
        basket.push({id, amount});
        price();
        cartText.innerHTML = `<p>Общая стоимость товаров составляет <span>${sum}</span></p>`;
        getBasket();
    }

    let sum = 0;

    let products = {
        1: {
            name: 'bike',
            price: 300,
            type: 'movable',
        },
        2: {
            name: 'car',
            price: 500,
            type: 'movable',
        },
        3: {
            name: 'ship',
            price: 1000,
            type: 'movable',
        },
        4: {
            name: 'something',
            price: 100,
            type: 'immovables',
        }
    }

    let basket = [];
    let container = document.querySelector('#shop');
    let cart = document.createElement('div');
    cart.className = 'basket';
    let cartText = document.createElement('p');
    cartText.innerText = 'Корзина пуста';
    container.append(cart);
    cart.append(cartText);

    getCatalog();
    document.addEventListener('click', addToCart);
    document.addEventListener('click', filter);
})
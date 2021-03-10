document.addEventListener('DOMContentLoaded', () => {

    function changeImg(event) {
        let img = event.target.dataset.name;
        if (!img) return;
        let gallery = document.getElementById('gallery');
        for (let i = 1; i <= gallery.childNodes.length; i++) {
            if (img === `img${i}`) {
                let bigImg = document.createElement('img');
                bigImg.src = `img/big/img${i}.jpeg`;
                bigImg.dataset.num = i;
                bigImg.onload = function (){
                    let query = big_picture.querySelector('img');
                    if (query == null) {
                        big_picture.append(bigImg)
                    } else {
                        query.replaceWith(bigImg);
                    }
                }

                prevButton.hidden = false;
                nextButton.hidden = false;
            }
        }
    }

    function prevImg(event){
        let action = event.target.dataset.name;
        if (action !== 'prev') return;
        let img = big_picture.querySelector('img');
        if (img.dataset.num<2) return;//чтобы не выйти за пределы количества изображений
        let prevImg = document.createElement('img');
        prevImg.src = `img/big/img${img.dataset.num-1}.jpeg`;
        prevImg.dataset.num = img.dataset.num-1;
        prevImg.onload = () => img.replaceWith(prevImg);
    }

    function nextImg(event){
        let action = event.target.dataset.name;
        if (action!== 'next') return;
        let img = big_picture.querySelector('img');
        if (img.dataset.num>2) return;//проверка на то, чтобы не выйти за предел количества изображений
        let nextImg = document.createElement('img');
        nextImg.src = `img/big/img${++img.dataset.num}.jpeg`;
        nextImg.dataset.num = img.dataset.num;
        nextImg.onload = () => img.replaceWith(nextImg);
    }


    document.addEventListener('click', changeImg);
    let prevButton = document.createElement('button');
    prevButton.dataset.name = 'prev';
    prevButton.innerText = 'Предыдущее';
    prevButton.hidden = true;
    big_picture.before(prevButton);

    let nextButton = document.createElement('button');
    nextButton.dataset.name = 'next';
    nextButton.innerText = 'Следующее';
    nextButton.hidden = true;
    big_picture.after(nextButton);
    document.addEventListener('click', prevImg);
    document.addEventListener('click', nextImg)

})
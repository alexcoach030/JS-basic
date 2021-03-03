function getStrokes(){//вынес отдельно получение букв для ликвидации дублирования кода
    for (let i = 0; i < 8; i++){
        let strokes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let stroke = document.createElement('div');
        stroke.className = 'stroke';
        stroke.innerText = strokes[i];
        chess.appendChild(stroke);
    }
}

function getNumbers(){//аналогично вынес отдельно цифровые поля
    let numbersLeft = document.createElement('div');
    numbersLeft.className = 'numb';
    content.insertBefore(numbersLeft, content.children[0]);
    for (let i = 1; i<=8;i++){
        let numb = document.createElement('div');
        numb.className = 'numb-cell';
        numb.innerText = i;
        numbersLeft.appendChild(numb);
    }
    let numbersRight = document.createElement('div');
    numbersRight.className = 'numb';
    content.appendChild(numbersRight);
    for (let i = 1; i<=8; i++){
        let numb = document.createElement('div');
        numb.className = 'numb-cell';
        numb.innerText = i;
        numbersRight.appendChild(numb);
    }
}

function getChess(){
    let black = 0;
    getNumbers();
    getStrokes();
    for (let i = 0; i < 8*8; i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        chess.appendChild(cell);
        if (black && black%2){
            cell.className = 'black';
        }
        black += ((black + 2) % 9) ? 1 : 2;//вычисляем позиции черных полей
        if (i > 7 && i < 16){//далее расставляем фигуры из Font Awesome
            cell.innerHTML = '<i class="fas fa-chess-pawn"></i>';
        }

        if (i > 47 && i < 56){
            cell.innerHTML = '<i class="fas fa-chess-pawn white"></i>';
        }

        if (i === 2 || i === 5){
            cell.innerHTML = '<i class="fas fa-chess-bishop"></i>';
        }

        if (i === 58 || i === 61){
            cell.innerHTML = '<i class="fas fa-chess-bishop white"></i>';
        }

        if (i === 4){
            cell.innerHTML = '<i class="fas fa-chess-king"></i>';
        }

        if (i === 60){
            cell.innerHTML = '<i class="fas fa-chess-king white"></i>';
        }

        if (i === 3){
            cell.innerHTML = '<i class="fas fa-chess-queen"></i>';
        }

        if (i === 59){
            cell.innerHTML = '<i class="fas fa-chess-queen white"></i>';
        }

        if (i === 1 || i === 6){
            cell.innerHTML = '<i class="fas fa-chess-knight"></i>';
        }

        if (i === 57 || i === 62){
            cell.innerHTML = '<i class="fas fa-chess-knight white"></i>';
        }

        if (i === 0 || i === 7){
            cell.innerHTML = '<i class="fas fa-chess-rook"></i>';
        }

        if (i === 56 || i === 63){
            cell.innerHTML = '<i class="fas fa-chess-rook white"></i>';
        }
    }
    getStrokes();
}

getChess();


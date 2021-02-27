let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};


ladder.up().up().down().up().up().up().showStep();

/*
Если использовать функции без return this - такая запись l18 не выполнится,
потребуется вводить функции пораздельно - почему? Не совсем понимаю особенности this,
что происходит с this в данном коде без использования return this и с использованием?*/

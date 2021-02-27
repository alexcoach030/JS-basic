function Calculator(){
    this.read = function (){
        this.a = +prompt('Введите 1 число', '');
        this.b = +prompt('Введите 2 число', '');
    }
    this.sum = function (){
        return this.a + this.b;
    }
    this.mul = function (){
        return this.a*this.b;
    }
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/*В целом, с тем, как работает создание через конструктор, разобрался.
При этом, если создавать не через конструктор,
можно записывать просто - this read(), например - но в текущем варианте,
уже с использованием конструктора, это не будет работать - почему?*/
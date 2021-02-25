let users = [
    {id: 1, name: "Катя"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 1);//Так понимаю, здесь используется стрелочная ф-я

alert(user.name);
/*Не могу разобрать, как написать users.find без стрелочной функции,
чтобы вытащить, например, id=3?

Плюс phpStorm так же выдает в этом примере Warning:
l7: Comparison item.id == 1 may cause unexpected type coercion
Хотя пример взят из учебника, что означает?
*/


// ввод с клавиатуры пользователем 
// изначально строковая велечина


//  Number (...) - ПРЕОБРАЗУЕТ В INT

/*let n1 = Number (prompt("Ввод числа" , 0));

let n2 = Number( prompt("Ввод числа" , 0));
if (isNaN(n1) || isNaN(n2) )
{
  alert("введите число а не строку")
 
}
else
{
  alert(n1+n2)

}
*/


/*
const password = 12345;
let my_password = Number(prompt("введите пароль: ")) 

while ( my_password != password)
{
alert("пароль не верный")
 my_password = Number(prompt("введите пароль: ")) 
}
alert("пароль верный !")
*/

// МАССИВ
/*let mas = [1, 2, 3, 4, 5, 6];
// цикл перебора масива
for (let item of mas)
{
  console.log(item)

}
*/


// генерация случайных чисел 

//console.log(Math.floor(Math.random() * 21))

// от 10 до 30
//console.log(Math.floor(Math.random() * (30 - 10) + 10))


/*let rand = []

for (let i=1; i<=10; i ++)
{
  rand.push(Math.floor(Math.random() * (10-1)+1 ))
}

console.log(rand)
*/
/*let numbers = [4,2,54,34,44,76,99,20,10,5,1,-4,0,-33,22,3];
console.log(numbers);
numbers.sort( (a,b) =>  {return a-b});
console.log(numbers);*/



//Конструктор это функция которая создает объект
function Car (car_n , car_y)
{
  this.марка = car_n;
  this.год = car_y;
  this.info = function()
  {
    console.log(`Марка авто: ${this.mark} `)
  }
}

let cars = [];

cars.push =( new Car ("BMW" , 2020));
cars.push = (new Car ("УАЗ" , 1999));
console.log(cars);
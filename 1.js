//1 Объясните почему код даёт именно такие результаты?

    //1.1
    let a = 1, b, c, d
    c = ++a
    alert(c)                //res = 2, because ++a this a = a + 1 is sintaxis sugar

    //1.2 Нужна консультация, почему в задании вывод 1, у меня Nan
    d = b++;
    alert(d); //ответ: 1    //my res Nan, because in b and d are not initialized

    //1.3
    c = 2 + ++a;
    alert(c); // ++a = a=3, c = 2+3 

    //1.4
    d = 2 + b++;
    alert(d); //ответ: 4    //myres Nan, 
    //but i can idey, we want to show difirent execution queues math symbols. 
    //++i this first adds then assigns, i++ this first assigns then adds 

    alert(a); //3 this value from 1.3
    alert(b); //3 this value from 1.4



//2 Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий).
let a = 2;
let x = 1 + (a *= 2);
//ferst a = a * 2
//second x 1 + 4


// 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);

let a = 5, b = 8
if (a >= 0 && b >= 0) {alert(Math.abs(8-9));}

// - если а и b отрицательные, вывести их произведение;
else if (a < 0 && b < 0) {alert(a*b);}

// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму
else {alert(a+b);}

// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

function plus(a, b) { 
  return a + b;
}
function minus(a, b) { 
  return a - b;
}
function multiply(a, b) { 
  return a * b;
}
function divide(a, b) { 
  return a / b;
}

// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(a, b, operation){
  switch (operation){
  	case '+':
      return a + b;
  	case '-':
      return a-b;	
  	case '*':
      return a*b;
    case '/':
      return a/b;
	}
}
mathOperation(2,4,'-'); 



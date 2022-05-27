// Первый
let text = "Hello,world";
document.write(text + "<br>");

// Второй
let Text = "I am from Kyrgyzstan";
document.write(Text + "<br>");

Text = "I am learning Javascript";
document.write(Text + "<br>");

// Третий 
let name = "Erlan";
let email = "erlan.kojonazarov.kk@gmail.com";
document.write("My name is: " + name + "<br>");
document.write("My email: " + email + "<br>");

// Четвертый 
let memento = 75;
let bauble = 112;
let NumberOfSouvenirs = prompt("Введите количество сувениров", 5);
let BaubleQuantities = prompt("Введите количество безделушек", 8);
let totalWeight = memento * NumberOfSouvenirs + bauble * BaubleQuantities;
document.write("Общий вес: " + totalWeight + "<br>");

// Пятый
let a = Number(prompt("Напишите любое чило a",6));
let b = Number(prompt("Напишите любое число b",2));
document.write(a + b + "<br>");
document.write(a - b + "<br>");
document.write(a * b + "<br>");
document.write(a / b + "<br>");
document.write((a % b) + "<br>");
document.write(a ** b + "<br>");



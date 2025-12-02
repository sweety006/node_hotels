var prompt = require('prompt-sync')();
//Problem : 1
// var age = prompt('Enter your age:');
// if (age < 18) {
// console.log("You get a 20% discount!");
// }
// else if(age >= 18  && age <= 65){
// console.log("Normal ticket price applies");
// }
// else {
//  console.log("You get a 30% senior discount");   
// }
//Problem : 2
// var length = parseFloat(prompt('Enter length of rectangle:'));
// var width = parseFloat(prompt('Enter width of rectangle:'));
// var area = length * width;
// console.log("Area of rectangle is: ", area)
//Problem : 3
// const product1 = {
//     name: 'Milk',
//     price: 26,
//     inStock: true
// };
// const product2 = {
//     name: 'Bread',
//     price: 20,
//     inStock: true
// };
// const product3 = {
//     name: 'Butter',
//     price: 10,
//     inStock: false
// };
// console.log(product1);
// console.log(product2);
// console.log(product3);
//Problem : 4
// const guest = prompt('Enter guest name: ')
// const guestList = ['Sheetal','Jinu','Ram','Shyam','Seeta'];

// if(guestList.includes(guest)) {
//         console.log(`Welcome to the party, ${guest}!`)
//     }
//     else{
//       console.log("Sorry, you're not on the guest list.")
//     }
//Problem : 5
const weatherForecast = { 
    date: '26-11-2025',
    temperature: 24,
    conditions:  'sunny',
    humidity: 60
};
console.log("Weather Forecast for:", weatherForecast.date);
console.log("Temperature:", weatherForecast.temperature+ "C");
console.log("Conditions:", weatherForecast.conditions);
console.log("Humidity:", weatherForecast.humidity + "%");


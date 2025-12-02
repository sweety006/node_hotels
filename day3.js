//Problem : 1
// A Server in Node Js is like a computer program that recieves and response to requests from clients
// (like web browsers,mobile apps) and processes requests and sends back appropriate responses.

const express = require('express')
const app = express()

// app.get('/',(req, res) => {
//   res.send('Hello from Express server!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })
//Problem : 2
//b
const json  = {"name": "Alice", "age": 25, "hobbies": ["reading",
"painting"]}
console.log(json.age)
//c
console.log(JSON.stringify({"title": "Book", "pages": 200}));
//
//Problem : 3
//Problem : 4
//b
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//Problem : 5
//a
console.log(JSON.parse({"product": "Laptop", "price": 999.99}));
//b
console.log(JSON.stringify({ "name": "Bob", "age": 30 }));
//Problem : 6
app.get('/weather', (req, res) => {
    const weatherData = {
     temperature: 25,
     conditions: 'Sunny',
     city: 'Indore' 
    };
 res.json(weatherData);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
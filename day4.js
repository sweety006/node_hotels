//problem 2
//a
 db.students.insertOne({name: 'John', age: 26, grade: "A"});
//b
 db.employees.updateOne({name: "John"} , { $set: { age: 30 }});
//c
db.products.deleteOne( {name: "Product A"});
//d
db.orders.find( { totalAmount: { $gt: 100} });

//problem 4


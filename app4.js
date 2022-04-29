//jshint eversion:6

const { Db } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema );

const fruit = new Fruit ({
    name: "Apple",
    rating: 10,
    review: "Best Apple Ever",
});

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
});

const People = mongoose.model("People", peopleSchema );

const people = new People ({
    name: "John",
    age: 37,
});
 


// fruit.save();

const kiwi = new Fruit ({
    name : "kiwi",
    rating: 8,
    review: "black unsoothing taste",
});

const orange = new Fruit ({
    name : "orange",
    rating: 7,
    review: "sweet like fanta",
});

const banana = new Fruit ({
    name : "banana",
    rating: 6,
    review: "soothing feeling",
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully Saved all the fruits to fruitsDB");
//     }
// })

Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }

    
});
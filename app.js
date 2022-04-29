//jshint eversion:6

const { Db } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "check details"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// fruit side

const Fruit = mongoose.model("Fruit", fruitSchema );

const fruit = new Fruit ({
    name: "peach",
    rating: 1,
    review: "Fruit is peachy",
    
});

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema, 
});

// fruit.save();

// people side

const People = mongoose.model("People", peopleSchema );

const pineapple = new Fruit({
    name: "pineapple",
    rating: 5,
    review: "Great sour fruit."
});

pineapple.save();

// const people = new People ({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: lime,
// });
 
// people.save();

Fruit.find(function(err, fruits) {
    if(err) {
        console.log(err);
    } else {

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "6244a80ba7a6b19f0e75aecf"}, {name: "peach"}, function (err) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("successfully log the name in the review");
//     }
// })

// Fruit.deleteOne( { name: "pineapple" }, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("successfully deleted")
//     }
// })

People.updateOne({_id: "62448c087682095ecd8e9f8e"}, {favouriteFruit: pineapple}, function (err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("successfully log the name in the review");
    }
})
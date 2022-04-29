//jshint eversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/peopleDB', {useNewUrlParser: true});

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
});

const People = mongoose.model("People", peopleSchema );

const people = new People ({
    name: "John",
    age: 37,
});

//people.save();
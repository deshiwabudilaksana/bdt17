<<<<<<< HEAD
var names = ['Made', 'Putu', 'Wayan'];

names.forEach(
    function(item) {
        console.log('Hai '+item);
    }
);

var dogs = {
    count : 10,
    bark : function() {
        return 'guk';
    },
    dogCount : function() {
        return this.count;
    },
    setName : function(name) {
        this.dogName = name;
    },
    getName : function() {
        return this.dogName;
    }
};

dogs.setName('Dowg');
console.log(dogs.bark());
console.log(dogs.dogCount());
console.log(dogs.getName());
=======
var names = ['Made', 'Putu', 'Wayan'];

names.forEach(
    function(item) {
        console.log('Hai '+item);
    }
);

var dogs = {
    count : 1,
    bark : function() {
        return 'guk';
    },
    dogCount : function() {
        return this.count;
    }
};
console.log(dogs.bark());
console.log(dogs.dogCount())
>>>>>>> 20f248693fdcf4b49f616512f83bc04f17bab06a

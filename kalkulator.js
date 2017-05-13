<<<<<<< HEAD
var calculator = {
    
    tambah : function(a,b) {
        hasil = a+b;
        return 'hasilnya ' + hasil ;
    },
    kurang : function(a,b) {
        hasil = a-b;
        return 'hasilnya ' + hasil;
    },
    kali : function(a,b) {
        hasil = a*b;
        return 'hasilnya ' + hasil;
    },
    bagi : function(a,b) {
        hasil = a/b;
        return 'hasilnya ' + hasil;
    },
    modulo : function(a,b) {
        hasil = a%b;
        return 'hasilnya ' + hasil;
    },
    samadengan : function(a,b) {
        //jika lebih besar a
        if(a>b) {
            return a + ' lebih besar dari ' + b;
        } else if(a<b) {
        // jika lebih besar b
            return a + ' lebih kecil dari ' +b;
        } else {
            return a + ' sama besar dengan ' +b;
        }
    }
};

console.log(calculator.tambah(2,3));
console.log(calculator.kurang(5,3));
console.log(calculator.bagi(10,2));
console.log(calculator.modulo(100,4));
console.log(calculator.samadengan(4,4));
=======
// var cats=['kitty','rudy','shitty']
// cats.forEach(
// 	function(item){
// 		console.log('meow ' + item);
// 	}
// );

// var object={ 
// 	"nama": "object",
// 	"alamat": "object"
// };

// console.log(object);

// var dogs = {
// 	count :1,
// 	bark : function(){
// 		return 'guk';
// 	},
// 	dogCount : function(){
// 		return this.count;
// 	}
// };
// console.log(dogs.bark());
// console.log(dogs.dogCount());

// var people = function(name){
// 	return this.name;
// };

// var person = new people('kris');
// console.log(person);

// var dogs = {
// 	count:1,
// 	dogName : '',
// 	bark: function(){
// 		return 'guk';
// 	},
// 	dogCount : function(){
// 		return this.count;
// 	},
// 	setName : function(name){
// 		this.dogName = name;
// 	},
// };

var calculator = {
	tambah : function(a,b){
		hasil = a+b;
		return hasil;
	},
	kurang : function(a,b) {
		hasil = a-b;
		return hasil;
	},
	kali : function(a,b){
		hasil = a*b;
		return hasil;
	},
	samadengan : function(a,b){
		if(a > b){
			return a + ' lebih besar dari ' + b;
		} else if(a < b){
			return a + ' lebih kecil dari ' + b;

		}else {
			return a + ' sama dengan ' + b;
		}

	}

};
console.log(calculator.tambah(3,3));
console.log(calculator.kurang(3,3));
console.log(calculator.kali(3,3));
console.log(calculator.samadengan(3,3));




>>>>>>> 7c44c935c6ef5366c7d09163b0d1ff16e35c5559

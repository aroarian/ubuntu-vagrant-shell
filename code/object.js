var dogs = {
    raining: true,

    noise: "Woof!",

    makeNoise: function(){
        if(dogs.raining){
            console.log(dogs.noise);
        }
        else{
            console.log("It's not raining for the dog.")
        }
    }
}

var cats = {
    raining: false,

    noise: "Meow!",

    makeNoise: function(){
        if(cats.raining){
            console.log(cats.noise);
        }
        else{
            console.log("It's not raining for the cat.")
        }
    }
}

function massHysteria(animal1, animal2){
    if(animal1.raining && animal2.raining){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}

massHysteria(dogs, cats);
cats.raining = true;
dogs.makeNoise();
cats.makeNoise();
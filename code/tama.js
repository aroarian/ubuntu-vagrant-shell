function DigitalPal (hungry, sleepy, bored, age){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if(this.hungry){
            console.log("That was yummy!")
            this.hungry = false;
        }
        if(!this.hungry){
           console.log("No thanks! I'm full.") 
        }
    }
    this.sleep = function(){
        if (this.sleep){
            console.log("Zzzzzzzz")
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        if (!this.sleep){
            console.log("No way! I'm not tired.");
        }
    }

    this.play = function(){
        if (this.bored){
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        if (!this.bored){
            console.log("Not right now. Later?");
        }
    }

    this.increaseAge = function(){
        this.age++        
        console.log(`Happy Birthday to me! I am ${age} old!`);
    }
}

var animals = {}
animals.dog = new DigitalPal(false, false, true, 0);

animals.dog.outside = false;

animals.dog.bark = function(){
    console.log("Woof! Woof!");
}

animals.dog.goOutside = function(){
    if(!this.outside){
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }

    if(this.outside){
        console.log("We're already outside though...")

    }
}

animals.dog.goInside = function(){
    if (this.outside){
        console.log("Do we have to? Fine...");
        this.outside = false;
    }

    if (!this.outside){
        console.log("I'm already inside...");
    }
}

animals.cat = new DigitalPal(false, false, true, 0);

animals.cat.houseCondition = 100;

animals.cat.meow = function(){
    console.log("Meow! Meow!");
}

animals.cat.destroyFurniture = function(){
    if (this.houseCondition === 0){
        return;
    }

    this.houseCondition = (this.houseCondition - 10);
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored = false;
    this.sleepy = true;
   
}

animals.cat.buyNewFurniture = function(){
    this.houseCondition = (this.houseCondition + 50);
    console.log("Are you sure about that?");
}

var animal = process.argv[2];
var method = process.argv[3];


animals[animal][method]();


// if (animal === "cat" && method === "feed"){
//     cat.feed();
// }
// else if (animal === "cat" && method === "sleep"){
//     cat.sleep();
// }
// else if (animal === "cat" && method === "play"){
//     cat.play();
// }
// else if (animal === "cat" && method === "play"){
//     cat.play();
// }




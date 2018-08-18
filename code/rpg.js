function Character (name, prof, gender, age, str, hp){
    this.name = name;
    this.prof = prof;
    this.gender = gender;
    this.age = age;
    this.str = str;
    this.hp = hp;
    this.PrintStats = function(){
        console.log("--------------");
        console.log("");
        console.log("Name: " + this.name);
        console.log("Profession: " + this.prof);
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Strength: " + this.str);
        console.log("Hit Points: " + this.hp);
        console.log("");
        console.log("--------------");
    
    };
};

var elf = new Character ("Fart", "None", "Male", 344, 3, 800);

var human = new Character ("Bob", "Blacksmithing", "Male", 42, 8, 600);

elf.PrintStats();
human.PrintStats();


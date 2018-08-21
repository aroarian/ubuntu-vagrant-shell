function Programmer (name, job, age, language) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.language = language;
    this.prgPrint = function(){
        console.log("--------------");
        console.log("");
        console.log("Name: " + this.name);
        console.log("Current Job: " + this.job);
        console.log("Age: " + this.age);
        console.log("Favorite Language: " + this.language);
        console.log("");
        console.log("--------------");
    }

};


var Ian = new Programmer("Ian", "QA Analyst", 34, "JQuery")




Ian.prgPrint();
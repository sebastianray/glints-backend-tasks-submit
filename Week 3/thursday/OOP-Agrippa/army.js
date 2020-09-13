// ### Ready the army! - Task 1 (15%)
// Make Army class that have 
// - attributes :
//     - name
//     - type
//     - level (default 1)

// - method : 
//     - talk (console log about his name type level)
//     - training (can level army up to 10)

class Army {
    //Attributes
    constructor(name,type,level) {
        this.name = name;
        this.type = type;
        this.level = level || 1;
    };
    
    //Method
    talk (){
        if (this.type === "Archer"){
            console.log((`I am ${this.name}, an ${this.type} level ${this.level}, member of the army!`))
        } else {
            console.log(`I am ${this.name}, a ${this.type} level ${this.level}, member of the army!`)
        };
    };

    training(amount){
        let maxLevel = 10;
        this.level += amount;
            if (this.level < maxLevel){
                console.log(`${this.name} level up to ${this.level}!`);
            } else {
                this.level = maxLevel;
                console.log(`${this.name} reaches the max level!`);
            }
    };
};


// ### Train another army - Task 2 (15%)
// Make another class from the Army
// - Knight
// - Spearman
// - Archer

// Each class has override the talk method.

class Knight extends Army {
    constructor(name,type,level){
    super(name,type="Knight",level);
    };

    //Override Method
    talk(){
        super.talk();
        console.log(`The Knights are ready to fight!`)
    };
};

class Spearman extends Army {
    constructor(name,type,level){
    super(name,type="Spearman",level);
    };

    //Override Method
    talk(){
        super.talk();
        console.log(`The Spearmans are ready to fight!`)
    };
};

class Archer extends Army {
    constructor(name,type,level){
    super(name,type="Archer",level);
    };

    //Override Method
    talk(){
        super.talk();
        console.log(`The Archers are ready to fight!`)
    };
};

//Export Module
module.exports = {
    Knight : Knight,
    Spearman : Spearman,
    Archer : Archer
};
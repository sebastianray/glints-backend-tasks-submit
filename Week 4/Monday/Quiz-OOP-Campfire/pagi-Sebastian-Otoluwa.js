class Meats {
    constructor(slot,type,weight){
        this.slot = slot;
        this.type = type;
        this.weight = weight;
    }
};

class Beef extends Meats {
    constructor(slot,type,weight,status){
    super(slot,type,weight);
    this.status = status;
    }
};

class Mutton extends Meats {
    constructor(slot,type,weight,status){
    super(slot,type,weight);
    this.status = status;
    }
};

class Campfire {
    constructor(container,fullness){
        this.container = container || []
        this.fullness = {
            beefs : 0,
            muttons:0,
        } 
    };
    
    //Method
    grill(meat){
        let cookStatus = ["Rare","Medium","Well Done"];
        let grillProcess = Math.floor(Math.random()*cookStatus.length);
        meat.status = cookStatus[grillProcess];
        console.log(`The ${meat.type} is grilled ${meat.status}`);
        this.container.push(meat);
        console.log(`The ${meat.type} steak is stored to comtainer`);
    };

    eat(steak){
        //eat tracker from this.fullness
        if (steak.type === "beef"){
            this.fullness.beefs +=1;
        } else {
            this.fullness.muttons +=1;
        }
        for (let i = 0; i < this.container.length; i++){
            if (steak === this.container[i]){
                this.container.splice(i,1);
            }
        }
    };

    checkContainer(){
        console.log(this.container);
    };

    eatTracker(){
        console.log("Steaks eaten")
        console.log(this.fullness);
    }

};

// TEST CASE
//Preparing Beef
let firstBeef = new Beef(1,"beef",500);
let secondMutton = new Mutton(2,"mutton",400);
let thirdBeef = new Beef(3,"beef",450);
let fourthMutton = new Mutton(4,"mutton",450);
//Preparing Campfire
let campfire = new Campfire();

//Grilling Meats
campfire.grill(firstBeef);
campfire.grill(secondMutton);
campfire.grill(thirdBeef);
campfire.grill(fourthMutton);

//Checking Container
campfire.checkContainer();

//Eat the steaks
campfire.eat(firstBeef);
campfire.checkContainer();
campfire.eat(secondMutton);
campfire.checkContainer();
campfire.eat(thirdBeef);
campfire.checkContainer();

//Count how many steaks eaten
campfire.eatTracker();
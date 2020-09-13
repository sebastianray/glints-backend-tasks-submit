class Cat {
    constructor(name,exhaustion,hunger,loneliness,happiness){
    this.name = name;
    this.exhaustion = exhaustion;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
    };

    play() {
      this.hunger += 5;
      this.hunger += 5;
      this.happiness += 20;
    }
    eat() {
      this.hunger -= 5;
      this.happiness += 5;
    }
    pet() {
      this.loneliness -= 5;
      this.exhaustion += 5
    }
    sleep() {
      this.exhaustion -= 5;
    }
  };

  let Tom = new Cat("Tom",1,3,7,1);
  console.log(Tom)
  Tom.eat()
  Tom.play()
  Tom.pet()
  Tom.sleep()
  console.log(Tom)
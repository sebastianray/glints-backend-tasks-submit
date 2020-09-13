class Student {
    //Properties
    constructor(name,age,dateofBirth,gender,id,hobbies) {
        this._name = name;
        this._age = age;
        this._dateofBirth = dateofBirth;
        this._gender = gender;
        this._id = id;
        this._hobbies = hobbies || [];
    }
    //Method
    set setName(name){
        this._name = name;
    }

    set setAge(age){
        this._age = age;
    }

    set setDateofBirth(dateofBirth){
        this._dateofBirth = dateofBirth;
    }

    set setGender(gender) {
        this._gender = gender;
        if (gender === "male"){
        return this._gender = "male"
        } else if 
        (gender === "female"){
        return this._gender = "female"
        } else {
        return this._gender = "unknown"
        }
    }

    addHobbies(hobbies) {
        this._hobbies.push(hobbies);
    }

    removeHobbies(hobbies) {
        for (let i=0; i<this._hobbies.length; i++){
            if (hobbies === this._hobbies[i]){
            this._hobbies.splice(i,i);
            }
        }
    }
    get getData() {
        return `Name: ${this._name}, Age: ${this._age}, Date of Birth: ${this._dateofBirth}, Gender: ${this._gender}, Id: ${this._id}, Hobbies: ${this._hobbies}` 
    }
}

let Xhaka = new Student("Xhaka",17,"091003","male",1,["Gaming","Watching"]);
let Anne = new Student("Anne",18,"040402","female",2,["Photography","Fangirling"]);

console.log(Xhaka);
console.log(Anne);

//Test Case Set Name
Xhaka.setName = "Granit";
console.log(Xhaka._name);

//Test Case Set Age
Anne.setAge = 19;
console.log(Anne._age)

//Test Case Set Date of Birth
Xhaka.setDateofBirth = "17082001"
console.log(Xhaka._dateofBirth)

// Test Case Set Gender
Anne.setGender = "male";
console.log(Anne._gender);
Anne.setGender = "boi";
console.log(Anne._gender);
Xhaka.setGender = "gurl"
console.log(Xhaka._gender);

// Test Case Add/Remove Hobbies
Xhaka.addHobbies("Sport");
console.log(Xhaka._hobbies);
Anne.addHobbies("Shopping");
console.log(Anne._hobbies);
Anne.removeHobbies("Fangirling");
console.log(Anne._hobbies);

// Test Case Get Data
console.log(Xhaka.getData);
console.log(Anne.getData);
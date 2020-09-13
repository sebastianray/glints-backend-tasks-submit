// ### Tidy Up files! - Task 5 (10%)
// Split the files into 3 js'es.
// - index (main) -> node index.js
// - army
// - barrack

//Import from army.js and barrack.js
const armyImport = require("./army.js");
const Knight = armyImport.Knight;
const Spearman = armyImport.Spearman;
const Archer = armyImport.Archer;
const Barrack = require("./barrack.js");

//LETS PREPARE THE ARMY!!!
//All the new army all still in first level, 
//Train them to increase the level up to 10!
//You can set amount of training that you want  

//Create and train the Knights!
let Ainsley = new Knight("Ainsley");
Ainsley.training(11);
Ainsley.talk();

let Ceballos = new Knight("Ceballos");
Ceballos.training(9);
Ceballos.talk();

let Guendouzi = new Knight("Guendouzi");
Guendouzi.training(8);
Guendouzi.talk();

//Create and train the Spearmans!
let Tierney = new Spearman("Tierney");
Tierney.training(5);
Tierney.talk();

let Bellerin = new Spearman("Bellerin");
Bellerin.training(6);
Bellerin.talk();

let Saliba = new Spearman("Saliba");
Saliba.training(7);
Saliba.talk();

//Create and train the Archers!
let Aubameyang = new Archer("Aubameyang");
Aubameyang.training(8);
Aubameyang.talk();

let Willian = new Archer("Willian");
Willian.training(7);
Willian.talk();

let Nicolas = new Archer("Nicolas");
Nicolas.training(6);
Nicolas.talk();

let Martinelli = new Archer("Martinelli");
Martinelli.training(5);
Martinelli.talk();

//Let's create the Barrack, getting the armies ready to attacc!! 
let barrack = new Barrack();

//Recruiting Knights to the barrack
barrack.recruitArmy(Ainsley);
barrack.recruitArmy(Ceballos);
barrack.recruitArmy(Guendouzi);

//Recruiting Spearman to the barrack
barrack.recruitArmy(Tierney);
barrack.recruitArmy(Bellerin);
barrack.recruitArmy(Saliba);

//Recruiting Archers to the barrack
barrack.recruitArmy(Aubameyang);
barrack.recruitArmy(Willian);
barrack.recruitArmy(Nicolas);
barrack.recruitArmy(Martinelli);

//Grouping the armies based on the type.
barrack.groupArmy();

//Checking the army list in Barrack.
barrack.summonArmy();

//You can delete an army as you like!
barrack.disbandArmy(Martinelli); 

//Regroup and Checking the army list in Barrack after deleting an army.
barrack.groupArmy();
barrack.summonArmy();

//THANK YOU!
// ### Barrack - Task 3 (50%)
// All the process must be in Barrack.

class Barrack {
    constructor(slots,groups){
        this.slots = slots || []
        this.groups = groups;
    };
    //METHOD
    recruitArmy(army){
        this.slots.push(army);
        return this.slots
    };

    summonArmy(){
        console.log("########## AGRIPPA ARMY'S LIST ##########");
        console.log("************* K N I G H T S *************")
        this.slots.forEach(el => {
            if(el.type === 'Knight'){
                console.log(`${el.name}, type : ${el.type}, level : ${el.level}`);
                }
            }
        )
        console.log("*****************************************")
        console.log("*********** S P E A R M A N S ***********")
        this.slots.forEach(el => {
            if(el.type === 'Spearman'){
                console.log(`${el.name}, type : ${el.type}, level : ${el.level}`);
                }
            }
        )
        console.log("*****************************************")
        console.log("************* A R C H E R S *************")
        this.slots.forEach(el => {
            if(el.type === 'Archer'){
                console.log(`${el.name}, type : ${el.type}, level : ${el.level}`);
                }
            }
        )
        console.log("*****************************************")
        console.log("#### THE ARMIES ARE READY TO ATTACC! ####");
    };

    disbandArmy(name){
        for (let i=0; i < this.slots.length; i++){
            if (name === this.slots[i]){
            this.slots.splice(i,i);
            }
        }
    };

    groupArmy(){
        let group = {
            Knight : [],
            Spearman : [],
            Archer : []
        };
        this.slots.forEach(el => {
            if(el.type === 'Knight'){
                group.Knight.push(el);
            } else if(el.type === 'Spearman'){
                group.Spearman.push(el);
            } else {
                group.Archer.push(el);
            }
        })
        this.groups = group;
        console.log(this.groups);
    };
};

//Export Module
module.exports = Barrack;
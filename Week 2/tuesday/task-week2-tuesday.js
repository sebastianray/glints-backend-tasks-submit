// FPB

function fpb(number1, number2){
    var minNumber;
    if(number1 < number2){
        minNumber = number1; 
    }else {
        minNumber = number2;
    }
    for(let i=minNumber; i>=1; i--){
        if(number1 % i === 0 && number2 % i === 0){
            return i
        }
    }
}

console.log(fpb(30,50));
console.log(fpb(12,15));
console.log(fpb(35,17));

// Print the first n numbers

function checkPrime(number){
    var jumlahFaktor = 0;
    //code here
    for(let i=1; i<=number; i++){
        if(number % i === 0){
            jumlahFaktor++;
        }
    }
    if(jumlahFaktor === 2){
        return true;
    }else {
        return false;
    }
}
function print(n){
    //code here
    var x = 0; 
    var number = 1;

    if(n < 1) {
        console.log(1)
    }else {
        while(x < n){

            if(checkPrime(number)){
                console.log(number);
                x++;
            }
            number++;
        }
    }
}

// Test Case
print(3); //2 3 5
print(5); //2 3 5 7 11 
print(0); //1
console.log(checkPrime(7));

// Mean
function mean(array){
    var total = 0;
    var average;
    for(let i=0; i<array.length; i++){
        total = total + array[i];
    }
    average = total / array.length;

    return average.toFixed(3);
}

console.log(mean([1,2,3,4,5])) //3
console.log(mean([3.7,5.3,7.0,1.9,3.1,0.5,1.5])) //3.28 -> 2 

// 'x' and 'o'
function checkXO(string) {
    //code here
    var isX=0;
    var isO=0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === 'x'){
            isX++;
        }
        else if(string[i] === 'o'){
            isO++;
        }
    }
    if(isX === isO){
        return 1;
    }else {
        return -1;
    }
}

// //Test
console.log(checkXO('xxxxxooooo')) //1
console.log(checkXO('xxxooooo')) //-1
console.log(checkXO('xoxoxoxoxo')) //1

// Encrypt the string

function swap(string) {
    var letter = 'abcdefghijklmnopqrstuvwxyz';
    var word = '';

    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < letter.length; j++) {
            if (string[i] == letter[j]) {
                if (string[i] == 'z') {
                    word += 'a';
                }
                else word += letter[j + 1];
            }
        }
    }
    console.log(word);
}

// //Test
swap("wow") //xpx
swap("javascript") //kbwbtdsjqu

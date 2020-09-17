// SOAL 1
var nilai;
function oddEven(nilai) {
if(nilai % 2 === 0){
    console.log( nilai = "Even")
}
else if(nilai % 2 !== 0){
    console.log("odd")
}
}

oddEven(5)
oddEven(10)

// SOAL 2
function kelipatan() {
    for (var x=1; x < 16; x++){
        if( x % 3 === 0 && x % 5 === 0 ) {
            console.log(x + " kelipatan 3 dan 5");
        } else if( x % 5 === 0 ) {
            console.log(x + " kelipatan 5");
        } else if (x % 3 === 0){
            console.log(x + " kelipatan 3");
        } else { 
            console.log(x)
        }
    }
}

kelipatan()

// SOAL 3
function triangle(x) {
    var temp = "";
    for (var i = 1; i <= x; i++) {
      for(var j=1; j<=i; j++){ 
        temp += "*";
      }
      temp+="\n";
    }
    return temp + "\n";
  }
  console.log(triangle(3));
  console.log(triangle(5));

// SOAL 4
var string = 'Lorem ipsum is dummy text';
var split = [];
var word = " ";
for(var i = 0; i < string.length; i++) {
    word += string[i];
    if(string[i] == " ") {
        split.push(word);
        word = "";
    }
}
split.push(word)
console.log(split)

// SOAL 5
function checkPrime(angka){

  var faktor = 0
  for(let i=1; i<= angka; i++){
      if(angka % i === 0){
          faktor++
      }
  }
  if(faktor === 2){
      return true
  }else {
      return false
  }
  // return faktor === 2 ? true : false
}
console.log(checkPrime(15))

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
console.log(factorialize(5));







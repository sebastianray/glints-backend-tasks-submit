// # Exercise 
// In order to help organizing the students score.
// Mr. James asks developers to make it
// - Apps must contain these
//     - Sort the students score from the highest
//     - Group from th major
//     - Calculate the average score
let studentsProfile = [
    {
      "id": 1,
      "name": "Erica Kumaha",
      "major": "science",
      "score": 99,
      "status": true
    },
    {
      "id": 2,
      "name": "Jadi Yaqin",
      "major": "science",
      "score": 80,
      "status": true
    },
    {
      "id": 5,
      "name": "Takada Leebur",
      "major": "social",
      "score": 100,
      "status": true
    },
    {
      "id": 7,
      "name": "Lieurita Akiks",
      "major": "science",
      "score": 75,
      "status": true
    },
    {
      "id": 10,
      "name": "Ann Jaye",
      "major": "social",
      "score": 81,
      "status": true
    }
  ]

let studentScore = []
for (i = 0; i < studentsProfile.length; i++){
    studentScore.push(studentsProfile[i].score) 
  }
  console.log(studentScore)
    
  
// ## 1. Implement the "Bubble Sort" algorithm
// ```javascript
function swap(arr, first_Index, second_Index){
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}    

function sortScore(arr){
  var len = arr.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=0, stop=len-i; j < stop; j++){
          if (arr[j] > arr[j+1]){
              swap(arr, j, j+1);
          }
      }
  }
  return arr;
}

console.log(sortScore(studentScore))


// ## 2. Implemen the "Sequential Search" algo
// Sort the letter from the word

    // function sortLetter(){
        
    // }
    
    //Test Case

// ## 3. Calculating Student's Average Score 
averageScore = (array) => {
  let totalScore = 0;
  for(let i = 0; i < array.length; i++) {
    totalScore += array[i];
}
  let avg = totalScore / array.length;
  console.log(`Students Average Score is ${avg}`);
}  

averageScore(studentScore)
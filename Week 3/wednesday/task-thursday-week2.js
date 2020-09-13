// # Exercise 

// ## 1. Convert Minute to time
//     function convertMinute(minute){
//     let hours = (minute / 60);
//     //console.log(hours)
//     let fixedHours = Math.floor(hours);
//     // console.log(fixedHours)
//     let minutes = (hours - fixedHours) * 60;
//     //console.log(minutes)
//     let fixedMinutes = Math.round(minutes);
//     //console.log(fixedMinutes)
//     if (fixedMinutes < 10) {
//         return fixedHours + ":" + '0' + fixedMinutes 
//     } else {
//         return fixedHours + ":" + fixedMinutes
//     }
// }

    // Test Case
    // console.log(convertMinute(100)) //1:40
    // console.log(convertMinute(185)) //3:05

// ## 2. Sort the letters
// Sort the letter from the word
// ```javascript
    // function sortLetter(words){
    //     let wordSplited = words.split('');
    //     // console.log(wordSplitted)
    //     let wordSorted = wordSplited.sort();
    //     //console.log(wordSorted)
    //     let joined = wordSorted.join('');
    //     console.log(joined);
    //     }  
    
    // // Test Case
    // sortLetter("hello"); //ehllo
    // sortLetter("sebastian");

// ## 3. A random color
// Output a random color from a given color  
    //Global
    // const colors = ['red','green','blue']
    // function randomColor(){
    //     let randomColor = Math.floor(Math.random() * colors.length);
    //     console.log( "Color : " + colors[randomColor]);  
    // }
    
    //Test Case
    // randomColor(); //Output -> Color : red

// ## 4. Split words without function .split(" ") and find the max 
//     let string = "Lorem ipsum is dummy text"
//     let word = "";
//     let temp = [];
//     // Using For
    
//     for(let i=0;i<string.length;i++){
//     if(string[i] !== " "){
//         word += string[i];
//         // console.log(word);
//     } else{
//         temp.push(word);
//         word = "";
//         // console.log(word);
//     } 
//     if(i === string.length - 1){
//         temp.push(word);
//         // console.log(word);
//     }
// } 
// console.log(temp)

//     function maxWordLength(temp) {
//         let longest = temp[0];
//         console.log(longest)
//         for (let i = 1; i < temp.length; i++) {
//             if (temp[i].length > longest.length) {
//                 longest = temp[i];
//             }
//         }
//         return longest;
//     }

        
// // // Test Case
// console.log(maxWordLength(temp)); //Lorem


// ## 5. Count the vowel
// Count the vowels and turn into object
    // function vowelsObject(apaja){
    //     let countedVowels = countVowel(apaja)
    //     let obj = {}
    //     for (let i = 0 ; i < countedVowels.length; i++) {
    //         obj[i] = countedVowels[i];
    //     } 
    //     const renameKey = (({0: a, 1: i, 2: u, 3: e, 4: o}) => ({a,i,u,e,o}))
    //     console.log(renameKey(obj))
    // }
    // let arrVowels = ""
    // countVowel = (apaja) => {
    //     // hitung vowel
    //     let countA = apaja.match(/[a]/gi).length;
    //     let countI = apaja.match(/[i]/gi).length;
    //     let countU = apaja.match(/[u]/gi).length;
    //     let countE = apaja.match(/[e]/gi).length;
    //     let countO = apaja.match(/[o]/gi).length;
    //     let arrVowels = `${countA}${countI}${countU}${countE}${countO}`
    //     return arrVowels
    //     // console.log(typeof arrVowels);
    // } 
    
    
    
    // // //Test Case
    // vowelsObject("rum raisin chocolate ice cream");
    // countVowel("rum raisin chocolate ice cream")
    //console.log(typeof countVowel("rum raisin chocolate ice cream"))    
    //     {
    //         a : 3,
    //         i : 3,
    //         u : 1,
    //         e : 3,
    //         o : 2
    //     }
    // */
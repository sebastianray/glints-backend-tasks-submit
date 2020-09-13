// # DOM Exercise

// **Background**
// Mr. James decided to make a notes about his Income and Expenses every month.

// ### Main Task
// **Make Income and Expenses Apps**

// ## Task 1 : Prepare variable 
// Prepare global variable for data

var posts = [
    {
        id : 1,
        title : "Salary Income",
        type : "income",
        total : 5000000
    }
];
getData();

function submitHandler(){
    var incomeTitle = document.getElementById('title-post').value;
    var incomeType = document.getElementById('type-post').value;
    var incomeTotal = document.getElementById('total-post').value;
    
    addData(incomeTitle,incomeType,incomeTotal);
    getData();
    document.getElementById('title-post').value = "";

    return false;
}
// ## Task 2 : getData
// Code getData function to read the data from the global variable

function getData(){
    var postData = document.getElementById('data-post');
    postData.innerHTML = "";
    
    for(let i=0; i<posts.length; i++){
        let postHTML = `
            <p>${posts[i].id}. ${posts[i].title}, type : ${posts[i].type}, total : ${posts[i].total}</p>
        `
        postData.insertAdjacentHTML('beforeend',postHTML);
    }
}

// ## Task 3 : addData
// User can input the data

function generateNumber(){
    var postsLength = posts.length;
    var number = posts[postsLength - 1].id;
    return number
}
function createObject(title,type,total){
    var temp = {
        id : generateNumber() + 1,
        title : title,
        type : type,
        total : total
    }
    return temp
}

function addData(title,type,total){
    var postObject = createObject(title,type,total);
    posts.push(postObject);
    console.log(`"${title}" has been submitted!`);

};
console.log("I love beans");
//window.alert("New man on the block"); // creates a pop up
//declaration of a variable
    //if a variable is declared without an assignment, it returns "undefined"

let r;
r = 5000 + 40; //a value is assigned to the variable r
console.log(r);

//common date types
let fname = "Tioluwaniope is a string"; //strings 
let ssce = false;  //boolean
let age = 405; //number
console.log(fname);
console.log("Enrolled:",ssce);


//let us print the above on the html page
document.getElementById("p1").innerHTML = "Tolu's age is: "+ age;


//augumented assignment operator
let students = 30;
//students = students + 5;
students += 5; //augumented assignment operator
console.log("students population: ", students)
document.getElementById("p2").innerHTML = "Your students population is "+ students;
//there is operator precedence amongst operators


//creating a user input with a prompt and on the webpage

//using the console
/*
let new_user = window.prompt("Enter your Username:")
console.log(new_user, "is welcome to this page")
*/

//using Html
let new_user;

document.getElementById("mybutton").onclick = function(){
    new_user = document.getElementById("myresponse").value;
    console.log("Welcome to Panda Blog", new_user)
    document.getElementById("p3").innerHTML = "Welcome to Pand Blog " + new_user;
}


//type conversion
//changing a data type from one form to another
//let us receive input for date of birth and return their age

/*
let new_age = window.prompt("Enter your year of birth:")
new_age = Number(new_age);
new_age = 2025 - new_age;
console.log("You are ", new_age, "years old");
*/

let new_age;

document.getElementById("mybutton2").onclick = function(){
    new_age = document.getElementById("myresponse1").value;
    new_age = Number(new_age);
    new_age = 2025 - new_age;
    console.log("You are ", new_age, " years old")
    document.getElementById("p3").innerHTML= "You are " + new_age + " years old";
}


//using the const keyword
//let us try a program that calculates the circumference of a circle
/*
let circumference;
let Pi = 3.142
let radius;


radius = window.prompt("Enter the radius of your stadium:");
radius = Number(radius);
circumference = 2 * Pi * radius;
console.log("The circmference of your stadium is ", circumference);
*/

let circumference;
let Pi = 3.142  //declare as a const if you don't want Pi to be changed later
let radius;

document.getElementById("mybutton3").onclick = function(){
    radius = document.getElementById('myresponse2').value;
    radius = Number(radius);
    Pi = 9.78433; //value of Pi can be changed here becaue it was not declared a const
    circumference = 2 * Pi * radius;
    document.getElementById("p5").innerHTML = "The circmference of your stadium is "+ circumference;
}


//using JS Math to calculate the hyp of a triangle

let adj;
let opp;
let hyp;

document.getElementById("mybutton4").onclick = function(){
    opp = document.getElementById("myresponse3").value;
    adj = document.getElementById("myresponse4").value;
    opp = Number(opp);
    adj = Number(adj);
    hyp = opp**2 + adj**2;
    hyp = Math.sqrt(hyp)
    console.log(hyp)
    document.getElementById("p6").innerHTML = "The Hypotenus of the triangle is " + hyp;
}


//creating a counter program 

let count= 0;

document.getElementById("increase").onclick = function(){
    count += 1;
    document.getElementById("num_label").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("num_label").innerHTML = count;
}

document.getElementById("decrease").onclick = function(){
    count -= 1 ;
    document.getElementById("num_label").innerHTML = count;
}

//random number generator
/*
let trial_1 = Math.floor(Math.random()*100); //floor rounds it up to the nearest whole number
let trial_2 = Math.random()*50;
let trial_3 = Math.ceil(Math.random()*500); //ceil rounds it down to the nearest whole number

console.log(trial_1);
console.log(trial_2)
console.log(trial_3)
*/

let trial_1;
let trial_2;
let trial_3;

document.getElementById("roll").onclick = function(){
    trial_1 = Math.floor(Math.random()*100);
    trial_2 = Math.random()*50;
    trial_3 = Math.ceil(Math.random()*500);
    document.getElementById("num_gen").innerHTML = trial_1;
    document.getElementById("num_gen2").innerHTML = trial_2;
    document.getElementById("num_gen3").innerHTML = trial_3;
}


//string methods in js
let nomeclature = "  Toluwalope is a freaking beast in coding  "
let nome_phone = "080/608/115/20";


console.log(nomeclature.length); //returns the lenght of a string
console.log(nomeclature.charAt("9")); //returns the character at index 9
console.log(nomeclature.indexOf("i")); //to get the index of a character. e.g "i";
console.log(nomeclature.lastIndexOf("o")); // to return the last index of a character
console.log(nomeclature.trim()); // to remove spaces before and after any character
console.log(nomeclature.toUpperCase()) //to convert our username to uppercase
console.log(nomeclature.toLowerCase()) // to convert to lowercase
console.log(nome_phone.replaceAll("/","")); // to replace a character with another character

//string slicing
//let us get a firstname and lastname from a fullname

let fullname = "Adeotan Tolulpe Samuel"
let first_name;
let last_name;

console.log(fullname.slice(8,16));
console.log(fullname.slice(16))


let player_name = "Delima ronaldo Gucho"
let middle_name;
let fi_name;
let l_name;

middle_name = player_name.slice(6,15); //using some methds in string slicing
console.log("Your middle name is: ", middle_name);


//method chaining; adding multiple methods to make code cleaner

let nickname;
nickname = fullname.slice(16,20).replaceAll("u","ilolo").toUpperCase(); //addig multiple methods as a chain
console.log(nickname);

//IF STATEMENTS

let your_age;
let youth_age = 35;


document.getElementById("status").onclick = function(){
    your_age = Number(document.getElementById("myage").value);

    if (your_age < youth_age){
    document.getElementById("age_status").innerHTML = "You are still a youth jare";
    }
    else if(your_age === youth_age){
        document.getElementById("age_status").innerHTML = "You are at your peack youthtul age";
    }
    else if(your_age > youth_age && your_age <= 97){ 
        document.getElementById("age_status").innerHTML = "You are a senior citizen";
    }
    else{
        document.getElementById("age_status").innerHTML = "I don't know where you belong";
    }
}

//checked property (checkbox or radion button)
document.getElementById("subscription_btn").onclick = function(){

    if (document.getElementById("subscribe").checked){
        document.getElementById("subscription_message").innerHTML = "You have subscribed already"
    }
    else{
        document.getElementById("subscription_message").innerHTML = "No subscription yet"
    }
}

//radion button for payment
document.getElementById("cardbtn").onclick = function(){

    const visa = document.getElementById("visa");
    const verve = document.getElementById("verve");
    const paypal = document.getElementById("paypal");
    const mastercard = document.getElementById("mastercard");

    if (visa.checked){
        document.getElementById("pay_message").innerHTML = "You are paying with a VISA card"
    }
    else if (verve.checked){
        document.getElementById("pay_message").innerHTML = "You are paying with a VERVE card"
    }
    else if (paypal.checked){
        document.getElementById("pay_message").innerHTML = "You are paying through PAYPAL"
    }
    else if (mastercard.checked){
        document.getElementById("pay_message").innerHTML = "You are paying via Mastercard"
    }
    else {
        document.getElementById("pay_message").innerHTML = "You haven't selected any card yet"
    }
}


//javascript switches
//instead of lots of if else statements, a switch is better

let grade;

document.getElementById("gradebtn").onclick = function(){
    grade = Number(document.getElementById("grade").value);

    switch(true){  //a  boolean has to  be used when trying to check with comparison (<,>,=)
    case grade >= 69:
        document.getElementById("grade_score").innerHTML = "Excellent work Mister";
        break;
    case grade >= 59:
        document.getElementById("grade_score").innerHTML = "Great work my friend";
        break;
    case grade >= 49:
        document.getElementById("grade_score").innerHTML = "Average work Nigga";
        break;
    case grade >= 39:
        document.getElementById("grade_score").innerHTML = "Not good enough bro";
        break;
    case grade <= 39:
        document.getElementById("grade_score").innerHTML = "woeful work there nigga";
        break;
    default:
        document.getElementById("grade_score").innerHTML = "Enter a valid score";
        break;
}

}

//strict equality operator
//= assignment operator
//== comparison equality operator (compares values only)
//===strict equality operator (compare values and data types)


//&& :they give us the ability to check that both conditions are true
//|| : ability to check that either condition is true


//NOT logical operator !
//used to reverse a condition's bbolean value

let rainy = true;

if (!rainy){   //if it is not rainy 
    console.log("Raining cat and dogs");
}
else{
    console.log("It is sunny outside")
}


//while loop; for executing code unlimited amount of times
//it repeats a section of code while the condiions are true
// potential infinite


let user_input;

document.getElementById("userbtn").onclick = function(){
    user_input = document.getElementById("user_input").value;

    while(user_input === ""){
        document.getElementById("userlab").innerHTML = "Wrong entry, Pls try again"
}
    document.getElementById("userlab").innerHTML = "Welcome to Alexer " + user_input;
}


//do while loop
//do sth and check the condition; if is true

//for loop: for repeating code a certain number of times
//

for(counter = 1; counter <= 40; counter += 10){//from 1 to 10 with a difference of 1
    console.log(counter)
}
  console.log("Merry Xmas you filthy animal");



  //break and continue
  //break breaks out of the loop
  //continue skips an iteration in the loop

  for(let i = 2; i <= 500; i += 20 ){ //local variable
    if(i == 222){ 
        break;      //the system breaks out of the loop at 222
    }
    console.log(i);
  }


    for(let b = 2;  b <= 20; b += 2 ){ //local variable
    if(b == 14){ 
        continue;      //the system continues after skipping 14
    }
    console.log(b);
  }



  //nested loop
  // a loop inside a loop

      for(let a = 2;  a <= 20; a += 2 ){ //local variable
    if(a == 14){ 
        continue;      
    }
    console.log(a);
  }

  //a rectangle with a nested loop
  for(let t = 1; t <= 10; t += 1){
    for(let v = 1; v <=2; v += 1){
        for(let w = 1; w <=5; w += 1)
            document.getElementById("draw").innerHTML += w;
        document.getElementById("draw").innerHTML += "<br>";
    }
    document.getElementById("draw").innerHTML += "<br>";
  }

//function
//you define it once and use many times
//global variables are variables outside the function / {}

function greetPeople(){   //creating a function
    console.log("Good morning");
}

greetPeople()   //calling the function created



function addSum(a,b) {  //show the parameters involved in this function
    console.log(a**b);
    console.log(a/b);
}

addSum(4,89)   //pass the parameters anywhere


//getting a data from a functin using the return keyword
function calculateAge(c,d){
    return 1990 - c + d;   //returning a value from a functon
    console.log("it will never run") //this code doesn;t run because it comes after return keyword
}

newAge = calculateAge(45,3)
console.log(newAge)

//writing a program for calculating area
//variables declared
let height;
let width;
let triArea;

//click button
document.getElementById("checkArea").onclick = function(){
    //assign input values
    height = document.getElementById("heightInput").value;
    width = document.getElementById("widthInput").value;

    //calculate the area by calling the function
    triArea = getArea(width,height) //call the function

    //display area on html
    document.getElementById("areaOutput").innerHTML = "This is the area of the triangle " + triArea;
    
    //viewing the function on the console
    console.log(triArea)
}


//function created for calculating area
function getArea(width,height){
    let result = width * height;
    return result;
}


//tenary operator
//shortcut for if/else statement
// ? true : false





let mass;
checkMass(13)

function checkMass(mass){
    return mass >= 30
    ? console.log("You are super fat nigga") 
    : console.log("You are stil looking sharp");
}   //using the tenary operator

/*
printing out on the webpage
let mass;

function checkMass(mass){
    return mass >= 30
    ? "You are super fat nigga" 
    :  "You are stil looking sharp";
}   //using the tenary operator



document.getElementById("checkMass").onclick = function(){
    mass = document.getElementById("massInput").value;
    document.getElementById("massOutput").innerHTML = checkMass(mass);
}*/

//difference betwween var and let
//let + variable are limited to a blockscope
//var = variables are limited to a function(){}


//template literals `
//allows embedding of expression and variables

let favFood = "Beans"
let favColor = "Black";
let place = "Abeokuta"

console.log(`Tolu's favorite food is ${favFood} but he likes it ${favColor} when he is in ${place}`)


//toLocalestring(locale, {options})
//JavaScript toLocaleString() currency

//toLocaleString() = returns a string with a language 
//                                sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // standard German

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);




//create a number guessing game

const answer = Math.floor(Math.random()*10 + 1);
let guesses = 0;

document.getElementById("checkGuess").onclick = function(){
    guess = document.getElementById("guessInput").value;
    guesses +=1

    if (guess == answer){
        document.getElementById("guessOutput").innerHTML = `You got the guess correctly. The Number is ${answer} <br> it took you ${guesses} guesses`;
    }
    else{
        document.getElementById("guessOutput").innerHTML = `You got it all wrong. Your correct number is ${answer}`;
    }
}



//temperature conversion 
/*let temp = 65
temp = toCelsius(temp)

console.log(temp)
*/

//write the function
function toCelsius(temp){
    return (temp - 32) * (5/9);
}


function toFahrenheit(temp){
    return temp * 9/5 + 32;
}


document.getElementById("convertTemp").onclick = function(){
    let temp;
    if(document.getElementById("cbtn").checked){
        temp = Number(document.getElementById("tempInput").value);
        temp = toCelsius(temp);
        document.getElementById("tempOutput").innerHTML =`Your temperature in Fahrenheit is ${temp}`
    }
    else if(document.getElementById("fbtn").checked){
        temp = Number(document.getElementById("tempInput").value);
        temp = toFahrenheit(temp)
        document.getElementById("tempOutput").innerHTML =`Your temperature in Fahrenheit is ${temp}`
    }
    else{
        document.getElementById("tempOutput").innerHTML =`Select a unit please`
    }
}
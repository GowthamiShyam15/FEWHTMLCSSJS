//print first 10 natural numbers-1,2,3,4,5,6,7,8,9,10
//using iterative statements- while, for loop
//while - 3 steps:initialization,condition(stop),updation(increment, decrement)
//conditions - relational operators(==,!=,<,>,<=,>=) - compare 2 variables/values

//FullStack-5times
// var i = 1
// while (i<=5){ //i<6 -> 5 times
//     var result = document.write("FullStack"+"<br>")
    
//     i += 1 //i=i+1 - += -> add and assign operator
// }
// document.write("End loop..")
// document.getElementById("id1").innerHTML = result;

//for loop - for(initialize; condition(stop); updation)

//print "Fullstack" for 5 times - for loop
// for (var x=1; x<=5; x++){
//     var output = document.write("MyJobGrow"+"<br>")
// }
// document.write("End for loop..")
// document.getElementById("id1").innerHTML = output;


//conditional statements - if, else, else if
//var res = document.write(24!=24) //true/false
// var n = 0; //positive/negative/neutral
// if (n>0){
//     var res = document.write("Positive Integer");
// }
// else if(n<0){
//     var res = document.write("Negative Integer");
// }
// else{//n==0
//     var res = document.write("Neutral Integer");
// }
// document.getElementById('id1').innerHTML=res;

//generate even numbers between 1-20
// for(var z=1;z<=20;z++){
//     if(z%2==0){ //even numbers
//         var res = document.write(z+"<br>")
//     }
// }
// document.getElementById('id1').innerHTML=res

for (var z = 2; z <= 20; z+=2) {
    var res = document.write(z + "<br>");

}
document.getElementById("id1").innerHTML = res;
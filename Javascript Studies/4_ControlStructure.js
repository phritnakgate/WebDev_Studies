/*Control Structure 
1. Sequence Control Structure
2. Conditional Control Structure
3. Loop Control Structure
*/
//Conditional Control Structure --> if else
let balance = 5000;
function checkBal(){
   alert("Your balance is " + balance);
}
function deposit(){
    document.getElementById("money")
    if (document.getElementById("money").value > 0){
        balance = balance + parseFloat(document.getElementById("money").value);
        alert("Your balance is " + balance);
    }
    else{
        alert("Invalid amount");
    }
}
function withdraw(){
    if (document.getElementById("money").value > 0){
        balance -= document.getElementById("money").value;
        alert("Your balance is " + balance);
    }
    else if(document.getElementById("money").value >= balance){
        alert("Insufficient balance");
    }
    else{
        alert("Invalid amount");
    }
}
//Conditional Control Structure --> switch case
let lightStatus = 0;
let light
switch(lightStatus){
    case 0:
        light = "off";
        alert("Light is " + light);
        break;
    case 1:
        light = "on";
        alert("Light is " + light);
        break;
}
//Loop Control Structure --> while
let count = 1;
while(count <= 10){
    console.log("Count is " + count);
    count++;
}
//Loop Control Structure --> for
for(let i = 1; i <= 10; i++){
    console.log("Count is " + i);
}
//Loop Control Structure --> do while
let d = 0;
do{
    console.log("Count is " + d);
    d++;
}while(d < 5);
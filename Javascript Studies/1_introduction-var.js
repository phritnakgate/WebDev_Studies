/*การแสดงข้อมูล*/ 
document.write("Eiei");         /*บนหน้าเว็บ*/ 
alert("Welcome to my website"); /*กล่องแจ้งเตือน*/
console.log("Console Test");    /*บน console*/
console.error("Error Test");
console.warn("Warning Test");

/*Variable*/
let name = "Phrit Nakgate";
document.write(name);
console.log(typeof(name)); //check type of variable

const age = 18;
document.write("Age: ",age);

let n = null; //undefined

/*String --> Number*/
let sti = parseInt("1234");
console.log(sti);
let stf = parseFloat("1234.567");
console.log(stf)

/*Number --> String*/
let nts = age.toString(); //or age+""
console.log(nts)

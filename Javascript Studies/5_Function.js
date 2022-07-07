let a = 100; //Global variable
//1. ฟังก์ชั่นที่ไม่มีการรับและส่งค่า
function hello() {
    alert("Hello World");
}
//2. ฟังก์ชั่นที่มีการรับค่า
function sayhi(name) {
    name=document.getElementById("name").value;
    alert("Hello " + name);
}
//3. ฟังก์ชั่นที่มีการส่งค่า
function getIP() {
    return "127.0.0.1"
}
myip = getIP();
//4. ฟังก์ชั่นที่มีการรับค่าและส่งค่า
function getSalary(salary){
    let bonus = salary * 0.1; //Local variable
    return salary + bonus;
}
thismonthsalary = getSalary(25000);
console.log("thismonthsalary is " + thismonthsalary);
//5. ฟังก์ชั่นที่มีการกำหนดค่าเริ่มต้น
function fullname(fname,lname,city="Bangkok"){
    console.log("Fullname is " + fname + " " + lname + " " +"City:" + city);
}
fullname("John","Doe");
fullname("John","Doe","London");
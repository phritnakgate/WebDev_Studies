let colors = ['red', 'green', 'blue', 'yellow'];

//Rearrange of an array and find length of the array
let cl = colors.length;
console.log(cl);
let ca = colors.sort(); 
console.log(ca);
let cr = colors.reverse();
console.log(cr);

//First&Last element of the array
let fir = colors[0];
console.log(fir);
let lir = colors[colors.length-1];
console.log(lir);

//Add More Elements to the array
colors.push('black');
console.log(colors);

//เข้าถึงสมาชิกของอาร์เรย์ด้วย for loop
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);     //เข้าถึงผ่าน index
}
//เข้าถึงสมาชิกของอาร์เรย์ด้วย forEach loop
colors.forEach(colorData);
function colorData(item){
    console.log(item);
}
//แปลง array เป็น string
cstring = colors.toString();
console.log(cstring);
cpop = colors.pop();
console.log(cpop);

//รวม Array
let fruits = ['apple', 'banana', 'orange'];
let dairy = ['milk', 'yogurt', 'cheese'];
let vegetables = ['tomato', 'potato', 'carrot'];
let cart = fruits.concat(dairy, vegetables);
console.log("Total product that you buy:",cart);

//เรียงลำดับข้อมูลตัวเลขใน array
let num = [20,100,-100,5,-25,10];
num.sort(function(a,b){
    return a-b;      //เรียงลำดับตัวเลขจากน้อยไปมาก ถ้ามากไปน้อย b-a
});
console.log(num);
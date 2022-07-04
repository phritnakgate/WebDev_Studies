let num1 = 20;
let num2 = 10;
console.log("number1 is",num1,"and number2 is",num2);

const t = true;
const f = false;

//Math Operator
console.log("Summation is ",num1 + num2);
console.log("Subtraction is ",num1 - num2);
console.log("Multiplication is ",num1 * num2);
console.log("Division is ",num1 / num2);
console.log("Modulus is ",num1 % num2);
console.log("Exponent is ",5 ** 2);

//Comparison Operator --> return boolean
console.log("num1 is greater than num2",num1 > num2);
console.log("num1 is less than num2",num1 < num2);
console.log("num1 is greater than or equal to num2",num1 >= num2);
console.log("num1 is less than or equal to num2",num1 <= num2);
console.log("num1 is not equal to num2",num1 != num2);
console.log("num1 is equal to num2",num1 == num2);

/*Logical Operator --> return boolean
1. && --> AND
2. || --> OR
3. ! --> NOT
*/
console.log("True(&&,||)True",t && t,t || t);
console.log("False(&&,||)False",f && f,f || f);
console.log("True(&&,||)False",t && f,t || f);
console.log("False(&&,||)True",f && t,f || t);
console.log("Not True(!)",!t);
console.log("Not False(!)",!f);

/*การเพิ่มค่าลดค่า --> prefix postfix*/
//Prefix
console.log("++num1",++num1);
console.log("num1 now",num1);
console.log("--num1",--num1);
console.log("num1 now",num1);
//Postfix
console.log("num1++",num1++);
console.log("num1 now",num1);
console.log("num2--",num2--);
console.log("num2 now",num2);

/*Compound Assignment*/
console.log("num1 += num2",num1 += num2);
console.log("num1 -= num2",num1 -= num2);
console.log("num1 *= num2",num1 *= num2);
console.log("num1 /= num2",num1 /= num2);
console.log("num1 %= num2",num1 %= num2);

/*Test*/
console.log("5+8*9 =",5+8*9);
console.log("10-4+2 =",10-4+2);
console.log("10-(2+1) =",10-(2+1));
console.log("5*2-40/5 =",5*2-40/5);
console.log("7+8/2+25 =",7+8/2+25);
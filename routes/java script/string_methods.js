// let string="praveen   ";
// console.log(string.charAt(5));
// console.log(string.indexOf("e"));
// console.log(string.length);
// console.log(string.trim())
// let username=" jaswanth";
// let result=username.startsWith(" ")
// if(result){
//     console.log("it must not begin with ` `");
// }
// else{
//     console.log(result);
// }
 let phonenumber="323-324-342";
 //ph=phonenumber.replaceAll("-","/");
 ph=phonenumber.padStart(20,"0");
 ph=phonenumber.padEnd(15,"1");
console.log(ph);

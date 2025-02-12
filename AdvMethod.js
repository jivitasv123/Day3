
let numbers = [12,5,6,8,2,3,8];  //Length : 7  & Index : 6
let updated = numbers.map( num => num+1 );
console.log(updated)

let students = ["Arun", "AsHWIN" , "SUPriya" , "ABHishek" , "Sabari"];
let capital = students.map( stu => stu.toUpperCase());
console.log(capital)


let marks = numbers.filter( n => n >= 10)
console.log(marks)
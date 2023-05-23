const readLine = response('readline-sync')

let Menu = ['chicken $5.25','beef $6.25','tofu $5.75'];
console.log('')

let values = [1, 2, 3];
console.log('')


console.log(Menu);
console.log(Menu[1]);
console.log(Menu[2]);
console.log(Menu[3]);

let response = readLine.response("Enter chicken $5.25, beef $6.25, or tofu $5.75: ");
while (response !== "chicken $5.25" && response !== "beef $6.25" && response !== "tofu $5.75" ){

    console.log("invalid choice");
    response = readLine.response("Enter chicken $5.25,  beef $6.25, or tofu $5.75: ");
}








// let start = 0;
// while (start <= 100){
//     if(start < 10){
//         console.log(start);
//
//     } else if (start > 25){
//
//         console.log(start);
//     }
//     start++;
// }
// let answer = readLine.question("Enter y or n: ");
// while (answer != "y" && answer != "n"){
//
//     console.log("invalid choice");
//     answer = readLine.question("Enter y or n: ");
// }
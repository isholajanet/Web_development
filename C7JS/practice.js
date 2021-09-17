// console.log("Hello world")
// let name = "Tobi"
// console.log(typeof(name))
// name = "jane"
// console.log(name)
//
// //Conditions
// let x = true
// let y = false
// let z = false
// if(x && y && z){
//     console.log("xyz")
// }else if(y && z){
//     console.log("yz")
// }else{
//     console.log("y")
// }
//
// if((y || z) && x){
//     console.log("xyz")
// }else if((x||y) && z){
//     console.log("yz")
// }else {
//     console.log("y")
// }
//
// for (let x = 1; x <= 12; x++) {
//     console.log("2 * " + x + " = " + (2 * x))
// }
// let check;
// for(let x = 1; x <= 12; x++){
//     if(x % 2 === 0){
//         check = true
//     }else{
//         check = false
//     }
//     console.log(x + " = " + check)
// }
// function sum(x,y){
//     return x + y
// }
// console.log(sum(4,5))
//
// //call-back functions
// function A(anArray, aFunction){
//     console.log("I called now")
//     aFunction(anArray)
// }
// function B(item){
//     setTimeout(() => {
//         console.log("I called after with: " +item)
//     }, 5000)
// }
// function C(){
//     console.log("I called either ways")
//
//
// }
// A([1,2,3,4], B)
// C()

//multiplication table
// function multiplication(start_number, end_number){
//    for(let number = start_number; number <= end_number; number ++) {
//        for (let x = 1; x <= 12; x++) {
//            let product = number * x;
//            console.log(number + " * " + x + " = " + product)
//        }
//        console.log("*******************")
//    }
// }
// multiplication(1, 9)

function product(array) {
    for (let counter = 1; counter <= array.length; counter++) {
        for (let count = 1; count <= array.length; count++) {
            let product_answer = count * counter
            console.log(`${counter} * ${count}  =  ${product_answer}`);
        }
        console.log("*************")
    }

}
const array =[1,2,3,4,5,6,7,8,9]
product(array)

function array_product(array_start){

}


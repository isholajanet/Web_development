let my_list = ["love", "janet", "oshioke", "tobi"]

for (const value of my_list){
    console.log(value)
}

//Array methods
let number = [1,2,3,4,5,6,7,8,9]
number.forEach(value => console.log(value))
let newArray = number.map(element => element % 2 === 0)
console.log(newArray)

let c7 = {
    name: "janet",
    age: 20,
    get_nick_name: function (){
        return this.name;
    }
}
console.log(c7.age);

console.log(c7["age"]);
for(const value in c7){
        console.log(value + ": " + c7[value]);
}
c7["age"] = "28 march";
console.log(c7["age"]);
console.log(Object.keys(c7));
console.log(Object.values(c7))
Object.keys(c7).forEach(value => console.log(value + ": " + c7[value]))
console.log(c7.get_nick_name())

let name = "tobi"
console.log({name})
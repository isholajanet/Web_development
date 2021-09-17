let value = document.getElementById("p-tag");
let elements = document.getElementsByName("button")
let tag_elements = document.getElementsByTagName('button');
let class_elements = document.getElementsByClassName('name');
let query_selector = document.querySelectorAll("button");
let query_elements = document.querySelector('.name');
console.log(query_elements)

let parentNode = query_elements.parentNode;
//Node is DOM it is the name of any type of object in the DOM tree, element is the html
//All elements are node
 console.log(parentNode);

let firstChild = parentNode.firstElementChild;
console.log(firstChild);

let firstChildNode = parentNode.firstChild;
console.log(firstChildNode);

let nextSibling = query_elements.nextElementSibling;
console.log(nextSibling);

let text = document.createElement('div');
let body = document.getElementsByTagName('body')[0]
let paragraph = document.createElement('p');
paragraph.innerHTML = 'I am Janet'
text.appendChild(paragraph);
body.appendChild(text);

let customType = document.getElementById('capitalizeInput');
// customType.addEventListener('keyup', function(e){
//               console.log(e.target.value.toUpperCase());
//               customType.value = e.target.value.toUpperCase();
customType.addEventListener('keyup', (e) => customType.value = e.target.value.toUpperCase());

console.log(customType);

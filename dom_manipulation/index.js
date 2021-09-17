console.log("janet")
let inputObject = document.getElementsByName('age')[0]
let age = 0
function increase_age(){
    inputObject.value = age
    age++
}

let btn = document.getElementById('btnCount');
btn.addEventListener('click', () => {
    let headings = document.getElementsByTagName('p');
    alert(`The number of p tags: ${headings.length}`);
});

function count_tags(){
    let headings = document.getElementsByTagName('p');
    return headings;
}
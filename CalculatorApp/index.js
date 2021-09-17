let result = document.getElementById('result')
function display(val){
    result.value += val
    return val
}

function solve(){
    let x = eval(result.value)
    result.value = x
    return x
}
function clear_screen(){
    result.value = ""
}
function del_value(){
    result.value = result.value.slice(0, result.value.length-1)
}
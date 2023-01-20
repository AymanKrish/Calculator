function display_num(data) {
    result.value += data
}
function all_clear() {
    result.value = ""
}
function equal() {
    result.value = eval(result.value)
}
function backspace() {
    result.value = (result.value).slice(0,-1)
}
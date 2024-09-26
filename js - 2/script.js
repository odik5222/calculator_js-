let calculator1 = +prompt("Введите число")
let operation = prompt("+,-,*,/")
let calculator2 = +prompt("Введите 2 число")

let result = 0

if(operation === "+") {
    result = calculator1 + calculator2
} else if (operation === "-") {
    result = calculator1 - calculator2
}  else if (operation === "*") {
    result = calculator1 * calculator2
}  else if (operation === "/") {
    result = calculator1 / calculator2
} else {
    alert("error")
}

alert("Результат:" + result)
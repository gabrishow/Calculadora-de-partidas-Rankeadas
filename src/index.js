let winAndLose = subtract(200, 100) //Aqui você vai digitar o numéro de (vitoria, o número de derrotas), respectivamentes.

function subtract(numero1, numero2){
    
    return numero1 - numero2
}

let nivel = ["Ferro", "Bronze" , "Prata" , "Ouro" , "Diamante", "Lendário" , "Imortal"]
if (winAndLose < 10){
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[0])
}
else if (winAndLose <= 20) {
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[1]) 
}
else if (winAndLose <= 50) {
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[2]) 
}
else if (winAndLose <= 80) {
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[3]) 
}
else if (winAndLose <= 90) {
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[4]) 
}
else if (winAndLose <= 100) {
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[5]) 
}
else if (winAndLose >= 101){
    console.log (" O herói tem saldo de " + winAndLose + " e está no nível de " + nivel[6]) 
}
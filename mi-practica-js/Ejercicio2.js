function encontrarMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
function encontrarMenor(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

const numeroMayor = encontrarMayor(10, 5, 8);
const numeroMenor = encontrarMenor(10, 5, 8);
console.log(`El numero mayor es: ${numeroMayor}`);
console.log(`El numero menor es: ${numeroMenor}`);
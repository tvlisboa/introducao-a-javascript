/**
 * for (inicio ; teste ; inremento)
 */

for (var cont = 1; cont <= 10; cont++) {
    console.log(cont)
}

/**
 * Imprimi somente os numeros divisiveis por 5
 */

for (var cont = 1; cont <= 30; cont++) {
    if (cont % 5 == 0) {
        console.log(cont)
        continue;
    }
}

for (var cont1 = 12; cont1 <= 30; cont1++) {
    if (cont1 % 5 == 0) {
        console.log(cont1)
        break
    }
}
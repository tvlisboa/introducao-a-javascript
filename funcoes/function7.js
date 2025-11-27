function recursiva(number) {
    if (number == 1) {
        return 1
    } else {
        return number * recursiva(number - 1)
    }

}

/**
 * 5! = 5 x 4 x 3 x 2 x 1 = 120
 * 5! = 5 x 4! = 120
 * n! = n  x (n - 1) !
 * 1! = 1
 */
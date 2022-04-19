// RECURSIVIDADE
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5 fatorial = 5x4x3x2x1 = 120
5 fatorial = 5 x 4 fatorial

n1 = n x (n-1)f
1fatorial = 1

*/
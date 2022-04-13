let num = [5, 3, 4, 5, 6];

num.sort();
num.push(1);

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O vetor em ordem crescente ${num.sort()}`);
console.log(`O valor do segundo é ${num[1]}`);

let pos = num.indexOf(4);
console.log(`O valor 4 esta da posição ${pos}`);

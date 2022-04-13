let valores = [0, 2, 8, 4, 5, 3, 9];

//console.log(valores)
/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
*/
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A Posição ${pos} tem o valor ${valores[pos]}`);
}

for (let pos in valores) {
  console.log(
    `A posição ${pos} em codigo simplificado tem o valor ${valores[pos]}`
  );
}

//exercicio 1:
let a = 5;
let b = 6;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//exercicio 2:
let x = 6;
let y = 9;
if (x > y) {
    console.log("'x' + é maior que + 'y'");
} else {
    console.log("'y' + é maior que + 'x'");
}

//exercicio 3:
const e = 8;
const f = 9;
const g = 11;

if (e > f && e > g) {
    console.log('O número maior é ' + e + '(e)');
} else if (f > e && f >g) {
    console.log('O número maior é ' + f + '(f)');
} else {
    console.log('O número maior é ' + g + '(g)');
}

//exercicio 4:

const valor = 0

if(valor > 0) {
    console.log("Positive");
} else if (valor < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//exercício 5:

const angulo1 = 60;
const angulo2 = 70;
const angulo3 = 50;

let somaDosAngulos = angulo1 + angulo2 + angulo3;
let parametroAngulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (parametroAngulos) {
if (somaDosAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
}
 } else {
     console.log("Ângulo Inválido.");
 } 

 //exercício 6:
 let pecaXadrez = "cavalo";

 switch (pecaXadrez.toLowerCase()) {
     case "cavalo":
        console.log("cavalo -> anda em L");
        break;
     case "peão":
        console.log("peão -> anda uma casa vazia");
        break;
     case "torre":
        console.log("torre -> anda qualquer casa ao longo da coluna ou fileiraque ocupa");
        break;
     case "rei":
         console.log("rei -> anda uma casa em qualquer direção");
         break;
     case "rainha":
         console.log("rainha -> anda quantas casas quiser em qualquer direção");
         break;
     case "bispo":
         console.log("bispo-> anda quantas casas quiser nas diagonais");
         break;
     default:
         console.log("Peça inválida");
 }

 //exercicio 7:
  let notaDada = 56;
  let nota = notaDada >= 0 && notaDada >= 100  
  
  if (notaDada < 0 && notaDada > 100){
      console.log("Erro!")
  } else if (nota >= 90) {
      console.log("A");
  } else if (notaDada >= 80) {
      console.log("B");
  } else if (notaDada >= 70) {
      console.log("C");
  } else if (notaDada >= 60) {
      console.log("D");
  } else if (notaDada >= 50) {
      console.log("E");
  } else {
      console.log("F");
  } 

  //exercicio 8:
  const num1 = 5;
  const num2 = 6;
  const num3 = 9;

  let par = false;

  if (num1 % 2 === 0 || num2 % 2 === 0|| num3 % 2 === 0){
      par = true;
    }
    console.log(par);

 //exercicio 9:
 const num4 = 7;
 const num5 = 4;
 const num6 = 1;

 let impar = false;

 if (num1 % 2 !== 0 || num2 % 2 !== 0|| num3 % 2 !== 0){
     impar = true;
   }
   console.log(impar);


  
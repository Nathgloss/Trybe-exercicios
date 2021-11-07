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

//exercicio 10:
const valorCusto = 100;
const valorVenda = 180;
// imposto sobre o valor de custo = 20% = 20 / 100 = 0,2
// valorCusto -> (100) * 0.2 = 20
 if (valorCusto >= 0 && valorVenda >= 0) {
     const valorCustoTotal = valorCusto + 20;
     const lucro = (valorVenda - valorCustoTotal) *1000;
     console.log(lucro);
 } else {
     console.log("Erro no valor de entrada");
 }

 //exercicio 11:
 let salarioBruto = 1896.75;
 let aliquotaINSS;
 let impostoRenda;
 
if (salarioBruto >= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if(salarioBruto >= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88
};

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    impostoRenda = 0;
} else if (salarioBase <= 2826.65) {
    impostoRenda = (salarioBase * 0.075) - 142,80;
} else if (salarioBase <= 3751.05) {
    impostoRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    impostoRenda = (salarioBase * 0.225) - 636.13;
} else {
    impostoRenda = (salarioBase * 0.275) - 869.36;
};
console.log("Salário líquido a receber: R$" + (salarioBase - impostoRenda));

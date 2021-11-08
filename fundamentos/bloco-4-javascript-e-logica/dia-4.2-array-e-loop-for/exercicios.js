let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1:
for(i = 0 ; i < numbers.length ; i+=1) {
    console.log(numbers[i]);
}

//exercício 2:
let somaNumbers = 0;
for(i = 0 ; i < numbers.length ; i+=1) {
        somaNumbers += numbers[i] ;
} 
console.log(somaNumbers);

//exercício 3:
let soma= 0;
for(i = 0 ; i < numbers.length ; i+=1) {
        soma += numbers[i] ;
} 
let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);
 
//exercício 4:
 if(mediaAritmetica > 20){
     console.log("valor maior que 20");
 } else {
     console.log("valor menor ou igual a 20");
 }

 //exercício 5:
 let maiorNumero = numbers[0]
 for(i = 1; i < numbers.length; i+=1) {
    if(numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    } 
 }
 console.log(maiorNumero);

 //

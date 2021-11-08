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


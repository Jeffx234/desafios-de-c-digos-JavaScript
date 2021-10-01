/* Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

 
Exemplo de Entrada	Exemplo de Saída
6	
2
4
6

*/

let line = gets().split(' ')

let A = parseInt(line[0])

for (var i = 2; i <= A; i = i + 2) {
  console.log(i)
}

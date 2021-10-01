/* Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos. Considere que o número zero é positivo, mas não pode ser considerado como positivo ou negativo.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
Exemplo de Entrada	Exemplo de Saída
-5
0
-3
-4
12

3 par(es)
2 impar(es)
1 positivo(s)
3 negativo(s) */

let valores = []

let Positivos = 0

let Negativos = 0

let Par = 0

let Impar = 0

for (var i = 0; i < 5; i++) {
  valores[i] = gets()

  if (valores[i] > 0) {
    Positivos += 1
  }

  if (valores[i] < 0) {
    Negativos += 1
  }

  if (valores[i] % 2 == 0) {
    Par += 1
  } else {
    Impar += 1
  }
}

console.log(Par + ' valor(es) par(es)')

console.log(Impar + ' valor(es) impar(es)')

console.log(Positivos + ' valor(es) positivo(s)')

console.log(Negativos + ' valor(es) negativo(s)')

var array = [1,2,3,4,5,6,7,8,9,10] // o array tem que estar ordenado

var busca_binaria = (array, left, right, valor)=>{  //parametros array ordenado  valor esquerdo e valor direito, valor ha ser buscado
            if(right >= left){   // verifica se o array esta ordenado. Se o lado direito for maior ou igual ao valor do lado esquerdo
              indice = parseInt(left + (right-left)/2) // divide o array em 2 ou achar o meio do array : array de 5 posição formula left + (right-left)/2 =   1 + (5-1/2)

              if(array[indice] === valor){ //se o valor do meio do array for igual ao valor  desejado achamos o valor fim do programa
                return valor
              }
              if(array[indice] > valor){ //se o valor do meio do array for maior que o valor devemos voltar uma posição do array pois os valores menores são os do lado esquedo do array <-
                return busca_binaria(array, left, indice-1, valor)
              }

              return busca_binaria(array, indice+1, right, valor) // se o valor do meio do array for menor que o valor desejado devemos andar uma posição adiante ->
            }

            return "não achou"
}

console.log(busca_binaria(array, 0, array.length-1, 1));
console.log(busca_binaria(array, 0, array.length-1, 10));

const array = ['renan', 'lucas', 'ruan', 'silva', 'rogerinho', 'ronaldinho', 'leozinho', 'elisa', 'monalisa', 'rugal', 'leesin', 'sona', 'master'];


const buscaNome = (list, nome) => {
    for (let i = 0; i < list.length; i++) {

        if (list[i] == nome) {
            return "encontrado"
        }
    }
    return 'não encontrado'
}
console.time('tempo')
console.log(buscaNome(array, 'renan'));
console.timeEnd('tempo');
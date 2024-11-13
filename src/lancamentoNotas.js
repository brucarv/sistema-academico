// lancamentoNotas.js

function lancarNota(nota1, nota2) {
    // Função para validar se a nota é numérica e dentro do intervalo esperado
    function validarNota(nota) {
        return !isNaN(nota) && typeof nota === 'number' && nota >= 0.0 && nota <= 10.0 && (nota * 10) % 10 === 0;
    }

    // Verificar se as duas notas são válidas e numéricas
    if (typeof nota1 !== 'number' || isNaN(nota1)) {
        throw new Error('Entradas devem ser numéricas');
    }
    if (typeof nota2 !== 'number' || isNaN(nota2)) {
        throw new Error('Entradas devem ser numéricas');
    }

    if (!validarNota(nota1)) {
        throw new Error('Nota de 1UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal.');
    }
    else if (!validarNota(nota2)) {
        throw new Error('Nota de 2UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal.');
    }

    // Se as notas são válidas, podemos armazená-las ou processá-las (aqui apenas retornamos como exemplo)
    return { nota1, nota2 };
}


module.exports = { lancarNota};

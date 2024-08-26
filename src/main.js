const alunos = ["Aluno1"]

const AlunoscomNota = alunos.map(function(nomes) {
    return {
        nome: nomes,
        nota: 7
    }
})

AlunoscomNota.push({
    nome: 'Aluno2',
    nota: 4
})

AlunoscomNota.push({
    nome: 'Aluno3',
    nota: 6
})

AlunoscomNota.push({
    nome: 'Aluno4',
    nota: 2
})

const passou = AlunoscomNota.filter(function(notas) {
    return notas.nota >= 6;
})

console.log(passou)
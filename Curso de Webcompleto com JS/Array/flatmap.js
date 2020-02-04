const escola = [{
    nome: 'Turma 01',
    alunos: [{
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma 02',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

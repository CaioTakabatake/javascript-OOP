import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Caio', 'caio@email.com', '2022-01-01');
console.log(novoAdmin);
console.log(novoAdmin.exibeInfos());
console.log(novoAdmin.criarCurso('JavaScript', 300));
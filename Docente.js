import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}.`;
    }
}

const novoDocente = new Docente('Juliana', 'ju@email.com', '2021-01-01');
console.log(novoDocente.exibeInfos());
console.log(novoDocente.aprovaEstudante('Caio', 'JavaScript'));
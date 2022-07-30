class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibeInfos() {
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User('Caio', 'caio@email.com', '2022-01-01');
console.log(novoUser);
console.log(novoUser.exibeInfos());
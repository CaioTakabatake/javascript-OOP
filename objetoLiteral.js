const user = {
    nome: 'Caio',
    email: 'caio@email.com',
    nascimento: '2022/07/29',
    role: 'estudante',
    ativo: true,

    exibirInfos() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Robson',
    email: 'robson@email.com',
    nascimento: '2022/07/29',
    role: 'admin',
    ativo: true,

    criarCurso() {
        console.log('curso criado!');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
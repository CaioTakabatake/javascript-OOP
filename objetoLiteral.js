const user = {
    nome: 'Caio',
    email: 'caio@email.com',
    nascimento: '2022/07/29',
    role: 'admin',
    ativo: true,

    exibirInfos() {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos()
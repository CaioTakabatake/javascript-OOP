// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = () => {
//         return `${this.nome}, ${this.email}`;
//     }
// }

// function Admin(role) {
//     User.call(this, 'Caio', 'caio@email.com');
//     this.role = role || 'estudande';
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('admin');

// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
    init: function (nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos(nome) {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init('Caio', 'caio@email.com');
console.log(novoUser.exibirInfos());
// console.log(user.isPrototypeOf(novoUser));
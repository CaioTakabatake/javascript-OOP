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
    exibirInfos(nome) {
        return nome;
    }
}

const novoUser = Object.create(user);
console.log(novoUser.exibirInfos('Caio'));
console.log(user.isPrototypeOf(novoUser));
import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

// const novoUser = new User('Caio', 'caio@email.com', '2022-01-01');
// console.log(novoUser.exibeInfos());
// novoUser.nome = 'Rodolfo';
// console.log(novoUser.exibeInfos());

const novoUser = new User('Caio', 'caio@email.com', '2022-01-01');
console.log(novoUser.exibeInfos());

const novoAdmin = new Admin('Rodolfo', 'rodolf@email.com', '2021-01-01');
console.log(novoAdmin.nome);
novoAdmin.nome = 'André';
console.log(novoAdmin.nome);
import Sequelize from 'sequelize';
import {Funcionario} from '../models/Funcionario.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

Funcionario.init(sequelize);

(async () => {
    await sequelize.sync({ force: true });
    await Funcionario.create({nome: "Alberto", telefone: "", cpf: "111.111.111-11", ds_endereco: "Rua 1", ds_nascimento: "2001-01-01", ds_genero: "M", status: "0"});
    await Funcionario.create({nome: "Matheus", telefone: "", cpf: "111.111.111-12", ds_endereco: "Rua 2", ds_nascimento: "2001-01-01", ds_genero: "M", status: "1"});
})();

export default sequelize;
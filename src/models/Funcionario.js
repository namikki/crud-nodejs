import { Model, DataTypes } from 'sequelize';

class Funcionario extends Model {

  static init(sequelize) {
    super.init({
      ds_nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Funcionario deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Funcionario deve ter entre 2 e 50 letras!" }
        }
      },
      telefone: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Número de Telefone deve ser preenchido!" },
          len: { args: [2, 50], msg: "Número de Telefone deve ter entre 2 e 50 letras!" }
        }
      },
      cpf: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "CPF do Funcionario deve ser preenchido!" },
          is: {args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: "CPF do Funcionario deve seguir o padrão NNN.NNN.NNN-NN!" },
        }
      },
      ds_endereco: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "O Endereço deve ser preenchido!" },
          len: { args: [2, 250], msg: "O Endereço deve ter entre 2 e 250 letras!" }
        }
      },
      dt_nascimento: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Nascimento do Funcionario deve ser preenchido!" },
          is: {args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Nascimento do Funcionario deve seguir o padrão yyyy-MM-dd!" }
        }
      },
      ds_genero: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Gênero do Funcionario deve ser preenchido!" },
          len: { args: [2, 50], msg: "Gênero do Funcionario deve ter entre 2 e 50 letras!" }
        }
      },
      status: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Status do Funcionario deve ser preenchido!" },
          len: { args: [2, 50], msg: "Status do Funcionario deve ter entre 2 e 50 letras!" }
        }
      },
    }, { sequelize, modelName: 'funcionario', tableName: 'funcionarios' })
  }

}

export { Funcionario };
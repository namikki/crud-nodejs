import express from "express";
import { FuncionarioController } from './controllers/FuncionarioController.js';

const routes = express.Router();

routes.get('/Funcionarios', FuncionarioController.findAll);
routes.get('/Funcionarios/:id', FuncionarioController.findByPk);
routes.post('/Funcionarios', FuncionarioController.create);
routes.put('/Funcionarios/:id', FuncionarioController.update);
routes.delete('/Funcionarios/:id', FuncionarioController.delete);

export default routes;
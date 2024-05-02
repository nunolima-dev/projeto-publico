const express = require('express');
const controladorAgendamentos = require("./controladores/agendamentos");
const rotas = express();

rotas.get("/", controladorAgendamentos.listaAgendamentos);
rotas.post("/", controladorAgendamentos.adicionarAgendamento);
rotas.put("/:id", controladorAgendamentos.atualizarAgendamento);
rotas.delete("/:id", controladorAgendamentos.excluirAgendamento);

module.exports = rotas;

const express = require('express');
const app = express();
const rotasAgendamento = require("./rotas");

// Middleware para permitir o uso de JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send('Bem-vindo à sua agenda de tattoos!');
});

// Rotas relacionadas aos agendamentos
app.use("/agendamentos", rotasAgendamento);

// Iniciar o servidor
app.listen(3000);

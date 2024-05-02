let agendamentos = [];

const listaAgendamentos = (req, res) => {
    res.json(agendamentos);
};

const adicionarAgendamento = (req, res) => {
    const { data, horarioInicio, nomeCliente, valorTatuagem, formaPagamento } = req.body;

    // verificar se já existe cliente agendado neste horário/data:
    const agendamentoExistente = agendamentos.find(agendamento =>
        agendamento.data === data && agendamento.horarioInicio === horarioInicio
    );

    if (agendamentoExistente) {
        return res.status(400).json({ message: 'Já existe um agendamento para este horário nesta data.' });
    }

    const novoAgendamento = {
        id: agendamentos.length + 1,
        data,
        horarioInicio,
        nomeCliente,
        valorTatuagem,
        formaPagamento
    };
    agendamentos.push(novoAgendamento);
    res.status(201).json({ message: 'Agendamento adicionado com sucesso!', agendamento: novoAgendamento });
};

const atualizarAgendamento = (req, res) => {
    const { id } = req.params;
    const { data, horarioInicio, nomeCliente, valorTatuagem, formaPagamento } = req.body;
    const indiceAgendamento = agendamentos.findIndex(agendamento => {
        return agendamento.id === parseInt(id)
    });

    if (indiceAgendamento !== -1) {
        agendamentos[indiceAgendamento] = {
            id: parseInt(id),
            data,
            horarioInicio,
            nomeCliente,
            valorTatuagem,
            formaPagamento
        };
        res.json({ message: 'Agendamento atualizado com sucesso!', agendamento: agendamentos[indiceAgendamento] });
    } else {
        res.status(404).json({ message: 'Agendamento não encontrado.' });
    }
};

const excluirAgendamento = (req, res) => {
    const { id } = req.params;
    agendamentos = agendamentos.filter(agendamento => {
        return agendamento.id !== parseInt(id)
    });
    res.json({ message: 'Agendamento excluído com sucesso!' });
};

module.exports = {
    listaAgendamentos,
    adicionarAgendamento,
    atualizarAgendamento,
    excluirAgendamento
};

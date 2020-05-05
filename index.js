const express = require('express');

const server = express();
server.use(express.json());

var jogos = [
    {
        id: 1,
        nome: "Counter-Strike",
        categoria: "FPS",
        desenvolvedora: "Valve",
        dataLancamento: "08/11/2000"
    },
    {
        id: 2,
        nome: "Need For Speed Underground 2",
        categoria: "Corrida",
        desenvolvedora: "EA Games",
        dataLancamento : "09/11/2004"
    },
    {
        id: 3,
        nome: "Age of Empires II",
        categoria: "RTS",
        desenvolvedora: "Ensemble Studios",
        dataLancamento: "30/09/1999"
    }
]


server.post('/jogos', function(request, response) {
    const novoJogo = request.body;
    jogos.push(novoJogo);
    return response.status(201).send();
})

server.get('/jogos', function(request, response) {
    response.send(jogos);
})

server.get('/jogos/:id', function(request, response) {
    const jogoAtual = jogos.filter(e => e.id == request.params.id);
    response.send(jogoAtual);
})

server.put('/jogos/:id', function(request, response) {
    const novoJogo = request.body;
    jogos.forEach(e => {
        if(e.id == request.params.id) {
            e.nome = novoJogo.nome;
            e.categoria = novoJogo.categoria;
            e.desenvolvedora = novoJogo.desenvolvedora;
            e.dataLancamento = novoJogo.dataLancamento;
        }
    })
    return response.send();
})

server.delete('/jogos/:id', function(request, response) {
    jogos = jogos.filter(e => e.id != request.params.id);
    response.status(200).send();
})
server.listen(3000)
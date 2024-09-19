//informações do jogo
const getGameInfo = (req, res) => {
    res.json({
        titulo: "EA FC 24",
        descricao: "Jogo ruim da porra, cheio de bug e dos caralho quatro, handicap pra todo lado, vamo ve de consertar isso logo"
    });
};

//jogadores cansados
const getPlayers = (req, res) => {
    res.json({
        jogadores: [
            { nome: "Alan Patrick", clube: "Internacional", overall: 99 },
            { nome: "Rafael Borré", clube: "Internacional", overall: 99 },
            { nome: "Enner Valencia", clube: "Internacional", overall: 10 },
            { nome: "Sérgio Rochet", clube: "Internacional", overall: 99 },
            { nome: "Gabriel Mercado", clube: "Internacional", overall: 99 },
        ]
    });
};

//data de lançamento dessa porra de jogo
const getReleaseDate = (req, res) => {
    res.json({
        dataLancamento: "29 de setembro de 2023"
    });
};

module.exports = { getGameInfo, getPlayers, getReleaseDate };

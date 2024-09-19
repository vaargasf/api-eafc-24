const express = require('express');
const router = express.Router();
const { getGameInfo, getPlayers, getReleaseDate } = require('../controllers/gameController');

//rota de informações
router.get('/info', getGameInfo);

//rota dos jogadores
router.get('/jogadores', getPlayers);

//rota da data
router.get('/lancamento', getReleaseDate);

module.exports = router;

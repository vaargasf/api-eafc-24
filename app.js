const express = require('express');
const app = express();
const gameRoutes = require('./routes/gameRoutes');

app.use('/api/fc24', gameRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

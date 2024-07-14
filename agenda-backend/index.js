const express = require('express');
const connectDB = require('./src/config/database'); // Verifique o caminho correto do arquivo de configuração do banco de dados
const eventRoutes = require('./src/routes/routes'); // Verifique o caminho correto das rotas


//const app = require('./src/app');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use('/api/events', eventRoutes);

// Conectar ao Banco de Dados
connectDB(); // Esta função deve lidar com a conexão com o MongoDB

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});

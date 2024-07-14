const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/agenda', {});
            console.log('Conectado ao Banco de Dados');
} catch(error) {
  console.error('Connection error', error);
  process.exit(1);
}
};

module.exports = connectDB;


const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.error('Error connecting to database:', error);
});

connection.on('connected', () => {
    console.log('Database connection successful');
});

module.exports = connection;

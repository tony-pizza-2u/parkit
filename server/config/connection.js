const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/national-parks');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://parkit:goteamgo@parkit-bootcamp.bdckvne.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;

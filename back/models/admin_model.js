const mongoose = require('mongoose');


// Schema de l'admin

const Admin = mongoose.Schema ({
    email: { type: String, required: true },
    password: { type: String, required: true },
});


module.exports = mongoose.model('Admins', Admin);

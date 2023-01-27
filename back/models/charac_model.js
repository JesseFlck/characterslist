// Importation des modules

const mongoose = require('mongoose');

// Schema de l'utilisateur

const Charac = mongoose.Schema ({
    firstName: { type: String, required: true},
    secondName: { type: String, required: false},
    lastName: { type: String, required: true},
    timeline: { type: String, required: true},
    //age: { type: String, required: true },
    dateOfBirth: {
        day: { type: String, required: true },
        month: { type: String, required: true },
        year: { type: String, required: true }
    },
    birthPlace: { type: String, required: true },
    localisation: { type: String, required: true},
    occupation: { type: String, required: true},
    faceclaim: { type: String, required: true},
    avatar: {type: String, required: false},
    banniere: {type: String, required: false }
});


module.exports = mongoose.model('characs', Charac);
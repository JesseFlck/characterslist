const Admin = require('../models/admin_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const passwordValidator = require('password-validator');
const fs = require('fs');
/*const {
    stringify
} = require('querystring');*/




// Création de l'admin

exports.signup = (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    /*if (!email || !password) {
        return res.status(400).json({
            error: 'Veuillez remplir tous les champs'
        });
    }*/
    Admin.findOne({
            email: email
        })
        .then(admin => {
            if (admin) {
                return res.status(400).json({
                    error: 'Cet email est déjà utilisé'
                });
            }
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt); //Chiffrage du mot de passe
            Admin.create({
                    email: email,
                    password: hashPassword,
                })
                .then(() => {
                    res.status(201).json({
                        message: 'Utilisateur créé avec succès !'
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        error: 'Une erreur est survenue lors de la création de l\'utilisateur'
                    });
                });
        })
        .catch((error) => {
            res.status(500).json({
                error: 'Une erreur est survenue lors de la création de l\'utilisateur'
            });
        });
};



//Connexion du compte

exports.login = (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    Admin.findOne({
            email: email
        })
        .then(admin => {
            if (!admin) {
                return res.status(400).json({
                    error: 'Utilisateur non trouvé'
                });
            }
            if (!bcrypt.compare(req.body.password, admin.password)) {
                return res.status(400).json({
                    error: 'Mot de passe incorrect'
                });
            }
            res.status(200).json({
                adminId: admin._id,
                token: jwt.sign(
                    { adminId: admin._id },
                    'RANDOM_TOKEN_SECRET',
                    {
                        expiresIn: '24h',
                    }
                ),
            });
        })
        .catch(error => res.status(500).json({
            error: 'Une erreur est survenue lors de la connexion',
            message: error.message
        }));
};




// Déconnexion de l'utilisateur

exports.logout = async (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1
    });
    //res.redirect('/connexion');
}

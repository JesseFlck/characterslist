const Charac = require('../models/charac_model');
const fs = require('fs');


// Création d'un nouveau perso

exports.newCharac = (req, res, next) => {
    /*if (req.file === undefined) { // Aucune image dans le post
        const post = {
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId,
            likes: []
        };
        Post.create(post)
            .then(() => res.status(201).json({
                message: 'Post créé !'
            }))
            .catch(error => res.status(401).json({
                error,
                message: error.message
            }));
    } else if (req.body.title && req.body.content && req.file) { // Avec image dans le post*/
        const image = req.file;
        const characAvat = image && `${req.protocol}://${req.get("host")}/${image.path}`;
        const charac = {
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            timeline: req.body.timeline,
            dateOfBirth: {
                day: req.body.day,
                month: req.body.month,
                year: req.body.year
            },
            birthPlace: req.body.birthPlace,
            localisation: req.body.localisation,
            occupation: req.body.occupation,
            color: req.body.color,
            faceclaim: req.body.faceclaim,
            avatar: characAvat,
        };
        Charac.create(charac)
            .then(() => res.status(201).json({
                message: 'Perso créé !'
            }))
            .catch(error => res.status(402).json({
                error,
                message: error.message
            }));
    /*} else {
        return res.status(403).json({
            message: "Un champ ne peut être vide"
        });
    }*/
};



// Recupération de tout les persos

exports.getAllCharacs = (req, res, next) => {
    Charac.find().sort({ firstName: 1 })
        .then(characs => {
            res.status(200).json(characs);
        })
        .catch(error => res.status(500).json({
            error,
            message: error.message
        }));
};



// Récupération d'un seul perso

exports.getOneCharac = (req, res, next) => {
    Charac.findOne({
        _id: req.params.id,
    })
        .then(post => {
            res.status(200).json(post)
        })
        .catch(error => res.status(500).json({
            error,
            message: error.message
        }));
};



// Suppression d'un perso

exports.deleteCharac = (req, res, next) => {
    Charac.findOne({
            _id: req.params.id
        })
        .then(charac => {
            //if (post.UserId === req.body.userId || req.body.isAdmin) {
                /*if (post.imageUrl === undefined) { // Sans image
                    post.deleteOne({
                            id: req.params.id
                        })
                        .then(() => res.status(201).json({
                            message: 'Post supprimé !'
                        }))
                        .catch(error => res.status(400).json({
                            error,
                            message: error.message
                        }));
                } else { // Avec image*/
                    const filename = charac.avatar.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () =>
                        charac.deleteOne({
                            id: req.params.id
                        })
                        .then(() => res.status(200).json({
                            message: 'Perso supprimé !'
                        }))
                        .catch(error => res.status(400).json({
                            error,
                            message: error.message
                        }))
                    );
                //}
            /*} else {
                res.status(401).json({
                    message: 'Vous n\'êtes pas autorisé à supprimer ce post !'
                });
            }*/
        })
        .catch(error => res.status(500).json({
            error,
            message: error.message
        }));
};

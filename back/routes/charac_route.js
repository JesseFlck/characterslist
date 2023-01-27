// Import des éléments nécessaires à la mise en place des routes

const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const characController = require('../controllers/charac_controller');

// Mise en place des routes

router.get('/', characController.getAllCharacs);
router.get('/:id', characController.getOneCharac);
router.post('/new', multer, characController.newCharac);
router.delete('/:id', characController.deleteCharac);
//router.put('/:id', auth, multer, postController.updatePost);
//router.post("/:id/like", auth, postController.likePost);

module.exports = router;
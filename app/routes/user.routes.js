const express = require('express');
const router = express.Router();

const user = require("../controller/user.controller.js");

router.get('/', user.getAll);
router.get('/:id', user.getById);
router.post('/', user.create);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

module.exports = router;
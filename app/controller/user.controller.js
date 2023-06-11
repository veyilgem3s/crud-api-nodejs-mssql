const express = require('express');
const router = express.Router();
const userService = require('../service/user.service');

exports.getAll = (req, res, next) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

exports.getById = (req, res, next) => {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

exports.create = (req, res, next) => {
    userService.create(req.body)
        .then(() => res.json({ message: 'User created' }))
        .catch(next);
}

exports.update = (req, res, next) => {
    userService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'User updated' }))
        .catch(next);
}

exports.delete = (req, res, next) => {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted' }))
        .catch(next);
}

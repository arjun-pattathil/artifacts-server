const Router = require('express').Router()
    , CardController = require('../controllers/card.controller');
Router.get('/tableInfo', CardController.TableInfo)
Router.get('/transactions', CardController.transactions)

module.exports = Router;
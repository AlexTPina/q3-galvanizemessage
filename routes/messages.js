const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages')

/* GET ALL MESSAGES */
router.get('/', messagesController.getAllmessages)
router.get('/:id', messagesController.getOneAppointment)
router.post('/', messagesController.addOneAppointment)
router.patch('/:id', messagesController.updateOneAppointment)
router.delete('/:id', messagesController.removeOneAppointment)

module.exports = router;

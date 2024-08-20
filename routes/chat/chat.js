const express = require('express')
const router = express.Router()

const messagesData = require('../../src/js/messagesData')
const Chat = require('../../src/js/Chat')
const chat = new Chat(messagesData)

router.get('/', (req, res) => {
  const timeout = setTimeout(() => {
    const id = req.query.from
    res.send(JSON.stringify(chat.getPartialMessages(id)))
  }, 2000)
})

router.post('/', (req, res) => {
  chat.addMessage(req.body)
  res.status(204).send('Success')
})

module.exports = router

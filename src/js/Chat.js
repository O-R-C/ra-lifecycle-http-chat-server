const { v4: uuidv4 } = require('uuid')

class Chat {
  constructor(messages = []) {
    this.messages = messages.map((message) => {
      return this.getMessageWithId(message)
    })
  }

  addMessage(message) {
    this.messages.push(this.getMessageWithId(message))
  }

  getPartialMessages(id) {
    const index = this.messages.findIndex((message) => message.id === id) + 1
    if (index > this.messages.length) return null
    return this.messages.slice(index)
  }

  getMessageWithId(message) {
    return { ...message, id: uuidv4() }
  }
}

module.exports = Chat

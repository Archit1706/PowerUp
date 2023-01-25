class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    this.actionProvider.ResponseHandler(message)
  }
}

/*const MessageParser = (message) => {
  if (message === 'hi') {
    return {
      message: 'Hello! How can I help you today?',
      value: 'greeting'
    }
  } else if (message === 'bye') {
    return {
      message: 'Goodbye! Have a great day!',
      value: 'farewell'
    }
  } else {
    return {
      message: 'I am sorry, I did not understand what you mean',
      value: 'unclear'
    }
  }
}*/

export default MessageParser;
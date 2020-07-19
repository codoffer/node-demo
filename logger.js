const EventEmitter = require('events')

class Logger extends EventEmitter{
    showMessage(message){
        this.emit('messageListner', {id: 1, message: message});
    }
}

module.exports = Logger;
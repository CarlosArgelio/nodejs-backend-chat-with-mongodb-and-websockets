const store = require('./store');
const socket = require('../../socket').socket
const  { port }  = require('../../config/config')

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat ||!user || !message) {
      return reject('Los datos son incorrectos');
    }

    let fileUrl = '';
    if ( file ) {
      fileUrl = `http://localhost:${port}/app/files/${file.filename}`;
    }

    const fullmessage = {
      'chat': chat,
      'user': user,
      'message': message,
      'date': new Date(),
      'file': fileUrl,
    };

    store.add(fullmessage);

    socket.io.emit('message', fullmessage)

    resolve(fullmessage);
  })
}

function getMessages(filterUser) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);

  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido');
      return false;
    }
    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });

}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};

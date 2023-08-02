const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }
    const fullmessage = {
      'user': user,
      'message': message,
      'date': new Date()
    };

    store.add(fullmessage);
    resolve(fullmessage);
  })
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
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

module.exports = {
  addMessage,
  getMessages,
  updateMessage
};

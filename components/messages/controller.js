

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

    console.log(fullmessage);
    resolve(fullmessage);
  })
}

module.exports = {
  addMessage,
};

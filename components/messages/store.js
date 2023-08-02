const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

// DECRECATED
// async function getMessages(filterUser) {
//   return new Promise((resolve, reject) => {
//     let filter = {};
//     if (filterUser !== null) {
//       filter = { user: filterUser };
//     }
//     Model.find(filter)
//       .populate('user')
//       .exec((error, populated) => {
//         if (error) {
//           reject(error);
//           return false;
//         }
//         resolve(populated);
//         return true;
//       });
//   });
// }

function getMessages(filterUser) {
  // eslint-disable-next-line no-async-promise-executor, no-unused-vars
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    const populated = await Model.find(filter).populate('user');
    resolve(populated);
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({_id: id});
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  //get
  remove: removeMessage
};

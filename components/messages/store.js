const db = require('mongoose');
const Model = require('./model');

const user = encodeURIComponent('palaciosrcarlosa2')
const password = encodeURIComponent('AIWrO0oyuVtsVEDy')
const cluster = 'cluster0.2ez0s8x.mongodb.net'
const clusterPrimary = 'c-guivwrn-shard-00-00.2ez0s8x.mongodb.net:27017'
const clusterSecondary = 'ac-guivwrn-shard-00-01.2ez0s8x.mongodb.net:27017'
const clusterTertiary = 'ac-guivwrn-shard-00-02.2ez0s8x.mongodb.net:27017'
const nameCollection = 'messages'

const uri =
  `mongodb://${user}:${password}@${clusterPrimary},${clusterSecondary},${clusterTertiary}/${nameCollection}?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true`;

const uri2 = `mongodb+srv://${user}:${password}@${cluster}/${nameCollection}`

db.Promise = global.Promise;

db.connect(uri2, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'telegrom' })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter)
  return messages;
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

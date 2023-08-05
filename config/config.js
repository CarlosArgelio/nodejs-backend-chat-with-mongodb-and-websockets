require('dotenv').config()
const port = process.env.PORT || 3002;

const user = encodeURIComponent(process.env.USER_MONGO)
const password = encodeURIComponent(process.env.PASSWORD_MONGO)
const cluster = process.env.CLUSTER_MONGO
const nameCollection = 'messages'

const config = {
  dbUrl: `mongodb+srv://${user}:${password}@${cluster}/${nameCollection}`,
  publicRoute: process.env.PUBLIC_ROUTE || 'app',
  port: port

}

module.exports = {
  port,
  config
}

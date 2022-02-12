export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:password@localhost:27017/clean-node-api?authSource=admin',
  port: process.env.PORT ?? 8080
}

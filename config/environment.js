module.exports = {
    port: process.env.POST || 3001,
    environment: process.env.NODE_ENV,
    db: process.env.MONGO_URL || 'mongodb://localhost:27017/almundo'
}

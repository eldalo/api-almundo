module.exports = {
    port: process.env.POST || 3001,
    db: process.env.MONGO_URL || 'mongodb://localhost:27017/almundo'
}

const { prisma } = require('./prisma')

const connectDB = async () => {
    return await prisma.$connect()
}

module.exports = { connectDB }

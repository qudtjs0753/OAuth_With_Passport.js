const PrismaClient =  require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();


const getUserByUsername = async(username) => {
    try{
        return await prisma.user.findUnique({
            where: {
                username,
            }
        })
    }catch(err){
        console.error(err);
    }
}

const getUserByUserId = async(id) => {
    try{
        return await prisma.user.findUnique({
            where: {
                id,
            }
        })
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    getUserByUsername,
    getUserByUserId
}
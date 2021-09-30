const PrismaClient =  require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

const signup = async profile => {
    try{
        return await prisma.user.create({
            data:{
                username: profile.username,
                googleId: profile.googleId
            }
        });
    }catch(err){
        console.error(err);
    }
}

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

const getUserById = async(id) => {
    try{
        return await prisma.user.findUnique({
            where:{
                id,
            }
        })
    }catch(err){
        console.error(err);
    }
}
module.exports = {
    signup,
    getUserByUsername,
    getUserById
}
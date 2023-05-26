const {User} = require("../db")

const allUsers = () => {
    const results = User.findAll({where:{deleted : false}});
    return results
}


const getAllUsers = async (req,res) => {
    try {
        const users = await allUsers();
        if (users.length>0) { 
            return res.send(users)
        } else { 
            throw new Error("There is not users")}
    } catch (error) {
        return res.send({"error" : error.message})
    }
}

module.exports = getAllUsers
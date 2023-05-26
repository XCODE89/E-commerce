const {User} = require("../db")
const bodyParse = require("../utils/bodyParse")

const newUser = async (req, res) => {
    bodyParse(req)
    const {name, lastname, country, city, email, nickname} = req.body 
    const createUser = await User.create({name, lastname, country, city, email, nickname})
    return createUser
}

const postNewUser = async (req,res) => {
    
    try {
        const result = await newUser(req)
        res.json(result)
    } catch (error) {
        res.send({"error": error.message})
    }
}

module.exports = postNewUser
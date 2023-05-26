const postNewUser = require("../controllers/postNewUser")
const getAllUsers = require("../controllers/getAllUsers")
const deleteUser = require("../controllers/deleteUser")
const putUserInfo = require("../controllers/putUserInfo")

const {Router} = require("express")

const userRouter = Router()


userRouter.post("/", postNewUser)
userRouter.get("/", getAllUsers)
userRouter.delete("/", deleteUser)
userRouter.put("/", putUserInfo)

module.exports = userRouter
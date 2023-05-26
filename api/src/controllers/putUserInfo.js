const putUserInfo = (req,res) => {
    try {
        res.send("putUserInfo")
    } catch (error) {
        res.send("error")
    }
}


module.exports = putUserInfo;
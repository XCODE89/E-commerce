const deleteUser = (req,res) => {
    try {
        res.send("deleteUser")
    } catch (error) {
        res.send("error")
    }
}


module.exports = deleteUser
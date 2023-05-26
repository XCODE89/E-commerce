const app = require("./src/app.js");
const {conn} = require("./src/db.js")


conn.sync({ force: true }).then(() => {
    app.listen(5000, () => {
        console.log('Server listenning on port 5000');
    })
})
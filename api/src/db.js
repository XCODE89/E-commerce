const { Sequelize } = require("sequelize")
const user = require("./models/user");
const course = require("./models/course")

require("dotenv").config()
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
})

user(sequelize);
course(sequelize);

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const {User, Course} = sequelize.models

User.hasMany(Course, {onDelete: 'CASCADE'}); 
Course.belongsTo(User);

module.exports = {
    ...sequelize.models,
    conn: sequelize
  };



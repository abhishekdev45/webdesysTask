const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.SCHEMA,process.env.USER,process.env.PASSWORD,{dialect:"mysql",host: process.env.HOST_NAME});
// const sequelize = new Sequelize("webdesys","root","@k45264*",{dialect:"mysql",host: "localhost"});

module.exports = sequelize;
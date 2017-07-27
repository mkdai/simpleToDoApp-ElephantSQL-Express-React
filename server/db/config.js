const sequelize = require('sequelize');

const db = new sequelize('postgres://ofzggihd:23zg4i_0fbY63rWPMOvjwbT5sULpJ1xc@pellefant.db.elephantsql.com:5432/ofzggihd', {
    dialect: 'postgres'
});

db.authenticate()
.then( ()=>{
    console.log('DB connection successful');
})
.catch(()=>{
    console.log('DB connection failed');
})

module.exports = db;
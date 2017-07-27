const sequelize =  require('sequelize');
const db = require('./config');

const Entry = db.define('entry', {
    todo: {
        type: sequelize.STRING,
        allowNull: false
    },
    finished: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    }
});

const List = db.define('list', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    }
});

List.hasMany(Entry, {
    foreignKey: {
        name: 'list_id',
        allowNull: true,
        // autoIncrement: true
    },
    onDelete: 'CASCADE'
})

Entry.belongsTo(List, {
    foreignKey: {
        name: 'list_id',
        allowNull: true
    },
    onDelete: 'CASCADE'
});


List.sync();
Entry.sync();

module.exports = {
    Entry,
    List
}
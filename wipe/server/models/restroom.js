const db = require('./db')
const Sequelize = require('sequelize')

const RestRooms = db.define('restrooms',{
    mainImgUrl  : {
        type : Sequelize.TEXT,
    },
    address : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            len : [0,250]
        }
    },
    name : {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
            len : [0,250]
        }
    },
    hours: {
        type: Sequelize.ARRAY
    },
    waitTime : {
        type: Sequelize.STRING
    },
    phone: {
        type : Sequelize.NUMBER
    },
    menu : {
        type : Sequelize.TEXT
    },
    free : {
        type : Sequelize.BOOLEAN
    }
})

module.exports = RestRooms
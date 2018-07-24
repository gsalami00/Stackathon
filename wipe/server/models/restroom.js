const db = require('./db')
const Sequelize = require('sequelize')

const Restroom = db.define('restroom',{
    mainImgUrl  : {
        type : Sequelize.TEXT,
    },
    address : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            len : [1,250]
        }
    },
    name : {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
            len : [1,250]
        }
    },
    hours: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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

module.exports = Restroom
const db = require('../database/knexconfig')

module.exports = {
    add, 
    find, 
    findBy, 
    findById,
}

function find() {
    return db('users').select('id', 'username');
}

function add (user) {

}

function findBy(filter){

}

function findById(id){

}

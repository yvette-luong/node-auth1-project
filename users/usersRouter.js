const router = require('express').Router();
const model = require('./usersModel');

function protected(req, res, next) {
    if (req.session && req.session.user) {
        next()
    } else {
        res.status(401).json({ notification: 'you have no session here' })
    }
}

router.get('/', protected, (req, res) =>{
    model.find() 
    .then(users =>{
        res.status(200).json({userData: users})
    })
    .catch(err => res.send({err, err: err.message}) )
}) 

module.exports = router;
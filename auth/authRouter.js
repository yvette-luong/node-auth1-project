const bc = require('bcryptjs')
const router = require('express').Router()
const usermodel = require('../users/usersModel')

router.post('/register', (req, res)=>{

    const { username, password } = req.body
    console.log(req.body)
    const hashedPassword = bc.hashSync(password, 10)
    usermodel.add({ username, password: hashedPassword })
    // console.log({ username, password: hashedPassword })
    .then((data) =>{
        console.log(data)
        res.status(200).json({register: data, username: username,  password:hashedPassword
        })
    })
    .catch(err =>{
        res.status(500).json({notification: 'ERR IN REGISTER', err: err.message })
    }) 
})

module.exports = router
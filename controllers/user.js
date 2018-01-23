const User = require('../models/user');


function Login(req, res) {
    let user = new User();
    res.send({ message: "Login" });
}

function Register(req, res) {
    console.log(req.body);
    let user = new User();
    user.email = req.body.email
    user.save((err, userStored) => {
        if (err)
            res.status(500).send({ message: 'Error: ' + err })
        else
            res.status(200).send({ user: userStored })
    })
}

module.exports = {
    Login, Register
}
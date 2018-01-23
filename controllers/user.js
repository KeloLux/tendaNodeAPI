const User = require('../models/user');


exports.Login = function (req, res) {
    let user = new User();
    res.send({ message: "Login" });
}
exports.Register = function (req, res) {
    console.log(req.body);
    let user = new User();
    user.email = 'email@esmil.com'
    user.save((err, userStored) => {
        if (err)
            res.status(500).send({ message: 'Error: ' + err })
        else
            res.status(200).send({ user: userStored })
    })
}
var express = require('express');
var app = express();
var port = 3000;


app.listen(port, () => {
    console.log('El servidor esta corriente en localhost:%s', port);
})

app.get('/name/:user_name', (req, res) => {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<html><body>' +
        '<h1>Hello ' + req.params.user_name + '</h1>' +
        '</body></html>')
    console.log(object);
})



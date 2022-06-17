const express = require("express");
const router = express.Router();
const db = require("../db");


router.get('/', function (req, res) {
    db.query('SELECT * FROM users',(err, result) =>    {
            if(err) throw err;
            res.send(result);
         });

});

router.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;

    let sql = 'INSERT INTO users (name, email) values ("' +name+'","'+email+'")';
    // console.log(sql)
    let query = db.query(sql, (err, result)  => {
        if(err) throw err;
        console.log(result);
        res.send('1 User Added');
    });


});

module.exports = router;
const mysql = require("mysql");

const db = mysql.createConnection({

    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE

});

exports.register = (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const passwordconfirm = req.body.passwordconfirm;

    db.query('INSERT INTO yash SET ?', {one  : name , two : email ,three : password , four : passwordconfirm } , (error, results) => {

        if(error){
            console.log(error);
        } else {
            console.log(results);
        }

    });

    res.send("form submitted");

}
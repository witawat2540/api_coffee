const db = require('./connect');

exports.Login = (req, res, next) => {
    db.query('SELECT * FROM tb_user WHERE username = ? AND password = ?', [req.body.user, req.body.password],
        (err, results, fields) => {
            if (err) {
                res.send(err);
            } else {
                if (results.length == 0) {
                    res.send({ "status": "NotLogin" })
                } else {
                    res.send({ "status": "pass", "data": results });
                }
            }
        }
    );
}
const db = require("./connect");

exports.getAll = (req, res, next) => {
    db.query("SELECT * FROM tb_product", (err, results, fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
};

exports.add_sale = (req, res, next) => {
    db.query("SELECT id FROM tb_saletemp WHERE id = ?", [req.body.id], (err, results, fields) => {
        //res.send(results);
        if (results.length == 0) {
            db.query(
                "INSERT INTO tb_saletemp (name,price,qty) values(?,?,1)", [req.body.name, req.body.price],
                (err, results, fields) => {
                    if (err) {
                        res.send(err.message);
                    } else {
                        res.send({ status: "success" });
                    }
                }
            );
        } else {
            db.query(
                "UPDATE tb_saletemp SET qty = qty+1 WHERE id = ? ", [req.body.id],
                (err, results, fields) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({ status: "success" });
                    }
                }
            );
        }
    });
};


exports.sum_qty = (req, res, next) => {
    db.query("SELECT COALESCE(SUM(qty),0) AS sum_qty, COALESCE(SUM(price*qty),0) AS sum_price FROM tb_saletemp", (err, results, fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results[0]);
        }
    });
};
const db = require("./connect");

exports.endsale = (req, res, next) => {
    db.query(
        "INSERT INTO tb_order (sumbill) VALUES(?)", [req.body.sumbill],
        (err, results, fields) => {
            if (err) {
                res.send(err);
            } else {
                let id_order = results.insertId;
                for (item of req.body.detail) {
                    db.query(
                        "INSERT INTO tb_oder_detail (id_product,price,qty,id_order) VALUES(?,?,?,?)", [item.id_product, item.price, item.qty, id_order]
                    );
                }
                db.query(
                    "DELETE FROM tb_saletemp"
                );
                res.send({ 'status': 'success' })
            }
        }
    );
};

exports.report_sale = (req, res, next) => {
    db.query(
        "SELECT  COALESCE(SUM(sumbill),0) AS sumbill FROM tb_order", [req.body.sumbill],
        (err, results, fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(results[0]);
            }
        }
    );
};
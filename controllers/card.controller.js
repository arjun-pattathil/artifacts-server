const DBConnect = require('../config/dbconnect');


const TableInfo = (req, res) => {
    var query = "select * from general_info";
    DBConnect.query(query, function (err, result) {
        if (err)
            res.status(401).json({
                success: false,
                error: err,
                message: 'Something went wrong. Please try again'
            });
        else
            res.status(200).json({
                success: true,
                data: result,
                message: 'Record inserted successfully'
            });
    })
}

const transactions = (req, res) => {
    var query = "select * from transactions";
    DBConnect.query(query, function (err, result) {
        if (err)
            res.status(401).json({
                success: false,
                error: err,
                message: 'Something went wrong. Please try again'
            });
        else
            res.status(200).json({
                success: true,
                data: result,
                message: 'Record inserted successfully'
            });
    })
}

module.exports = {
    TableInfo,
    transactions
}
const db = require('../db');

module.exports = {
    fetchList: (req, res) => {
        db.List.findAll({})
            .then( data => {
                res.status(200).send(data);
            })
            .catch( err => {
                res.status(500).send(err);
            });
    },
    createList: (req, res) => {
        db.List.findOrCreate({
            where: {
                name: req.body.name
            }
        })
            .spread((newList, created) => {
                if(created){
                    res.status.send(newList);
                } else {
                    res.status(500).send();
                }
            })
            .catch( err => {
                res.status(500).send(err);
            })

    }
}
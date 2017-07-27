const db = require('../db');

module.exports = {
    toggleEntryFinished: (req, res) =>{
        db.Entry.findById(req.body.id)
        .then(row => {
            db.Entry.update({
                    finished: !row.finished
                },{ where:{
                    id: row.id
                }})
            .then( response =>{
                console.log(response[0],response[1]);
                res.status(201).send(response);
            })
        })
    },
    fetchEntry: (req, res) => {
        db.Entry.findAll({})
            .then( data => {
                // console.log(JSON.stringify(data));
                res.status(200).send(data);
            })
            .catch( err => {
                res.status(500).send(err);
            });
    },
    createEntry: (req, res) => {
        db.Entry.findOrCreate({
            where: {
                todo: req.body.todo,
                list_id: req.body.list_id
            }
        })
            .spread((newEntry, created) => {
                if(created){
                    res.status(200).send(newEntry.dataValues);
                } else {
                    console.log(newEntry);
                    res.status(500).send();
                }
            })
            .catch( err => {
                console.log('ERR POSTING: ', err)
                res.status(500).send(err);
            });

    }
}
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    console.log('Getting...');

    const queryText = `
    SELECT * FROM "items"
    ORDER BY "purchased", "name";`

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            res.sendStatus(500);
        })

})

router.post('/', (req, res) => {
    console.log('Posting...', req.body);

    const queryText = `
    INSERT INTO "items" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);
    `

    console.log(req.body);
    

    const values = [req.body.itemName, Number(req.body.itemQuantity), req.body.itemUnit]

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        res.sendStatus(500);
    })
})

module.exports = router;
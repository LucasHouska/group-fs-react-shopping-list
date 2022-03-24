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

router.delete('/', (req, res) => {
    console.log('clear DELETE route')

    const queryText = `TRUNCATE TABLE "items"`

    pool.query(queryText)
    .then( result => {
        res.sendStatus(200);
    })
    .catch( error => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;
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

router.delete('/:id', (req, res) => {
    console.log('delete an item', req.params.id);
    let id =req.params.id;
    const queryText = `
    DELETE FROM "items"
    WHERE "id" = $1;
    `;

    const values =[id];

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(204);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
    
});

router.put('/:id', (req, res) => {
    let id = req.params.id;

    queryText = `
        UPDATE "items"
        SET "purchased" = true
        WHERE "id" = $1;
    `;
    const values = [id];
    console.log('updated database w/ purchased id#:', id);

    pool.query(queryText, values)
        .then( result => {
            res.sendStatus(200);
        })
        .catch( err => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;
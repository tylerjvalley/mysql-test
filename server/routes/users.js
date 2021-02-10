const { Router } = require('express');
const db = require('../../database');

const router = Router();

router.use((req, res, next) => {
    console.log('Request made to /USERS ROUTE');
    next();
});

router.get('/', (req, res) => {
    res.send(200);
})

router.get('/posts', (req, res) => {
    res.json({ route: 'Posta' })
})

router.post('/', (req, res) => {
    const { name, age } = req.body;
    if (name && age ) {
        
    }
})

module.exports = router;
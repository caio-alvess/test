const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello');
})
app.get('/:id', (req, res) => {
    res.send(req.params.id);
})

app.delete('/', (req, res) => {
    res.status(200).json({
        message: 'deleted',
        status: 'perfect'
    })
})

app.listen(3000, () => {
    console.log('running')
});

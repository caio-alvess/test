const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello');
})
//Recurso hiper brabo
app.post('/', (req, res) => {
    res.status(201).json({
        message: 'created'
    })
})

app.delete('/', (req, res) => {
    res.status(200).json({
        message: 'deleted'
    })
})

app.listen(3000, () => {
    console.log('running')
});

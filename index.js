const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', require('./api'));

app.get('/', (req, res) => {
    res.send(process.env.KEY)
})

app.listen(process.env.PORT || 4000, function(){
    console.log('Ready to Go!');
});
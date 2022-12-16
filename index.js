const phonebook = [];
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/phonebook', function (req, res) {
    phonebook.push(req.body);
    phonebook.json(req.body);
});
app.get('/phonebook', function (req, res) {
 res.json(phonebook);
});
app.listen(3014, () =>
  console.log(`App listening at port 3000`)
);
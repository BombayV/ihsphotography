const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = {
  path: '/api/',
  handler: app
};

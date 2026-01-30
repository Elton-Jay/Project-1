const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('LogInPage'))

app.post('api/login', (req, res) => {
    const {username, password} = req.body;

    const users = JSON.parse(fs.ReadFileSync('user.json'))
    const user = users.find(u => u.username === username && u.password === password);

    if(user)
})
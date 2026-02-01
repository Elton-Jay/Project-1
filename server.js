const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('SignIn'));

app.post('/api/login', (req, res) => {
    const {username, password} = req.body;

    const users = JSON.parse(fs.readFileSync('user.json'));
    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        res.json({ success: true, message: "Log in Successful! Welcome"});
    }
    else{
        res.status(401).json({success : false, message: "Invalid username or password"});
    }
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Website is currently running offline at https://localhost:${PORT}`);
});
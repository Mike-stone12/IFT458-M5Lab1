const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello! Middleware Lab is running.');
});

app.get('/test', (req, res) => {
    res.send('Logger middleware is working!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

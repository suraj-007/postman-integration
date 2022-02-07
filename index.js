const express = require('express');
const app = express(), { exec } = require('child_process');
const port = 8080;

app.listen(port, () => {
console.log(`Postman running on http://localhost:${port}`)
})
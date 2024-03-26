const express = require('express');
const app = express();

console.log('\x1b[33m%s\x1b[0m', `[server] Starting server...`);

app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `[server] Server running on port '${PORT}'`);
});
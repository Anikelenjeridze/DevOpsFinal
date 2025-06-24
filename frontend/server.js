const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// The backend URL is provided by an environment variable
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5001';

app.get('/', async (req, res) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/status`);
        const data = await response.json();
        res.send(`
            <h1>Frontend Application</h1>
            <p>Successfully connected to the backend!</p>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `);
    } catch (error) {
        res.status(500).send(`
            <h1>Frontend Application</h1>
            <p>Could not connect to the backend.</p>
            <p>Error: ${error.message}</p>
            <p>Backend URL: ${BACKEND_URL}</p>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Frontend service listening on port ${PORT}`);
});
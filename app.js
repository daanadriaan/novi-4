const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// --- Prometheus Metrics Setup ---
const promClient = require('prom-client');
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
    } catch (ex) {
        res.status(500).end(ex);
    }
});
// --- Einde Metrics Setup ---

/*
// ---- Voor Les 9 kun je dit later weer aanzetten ---

// Maak verbinding met de Redis-database
// 'redis-server' is de naam van de service in docker-compose!
const client = redis.createClient({
    url: 'redis://redis-server:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await client.connect();
    await client.set('bezoekers', 0); // Zet de teller op 0 bij de start
})();

app.get('/', async (req, res) => {
    let bezoekers = await client.get('bezoekers');
    bezoekers = parseInt(bezoekers, 10) + 1;
    await client.set('bezoekers', bezoekers);

    res.send(`Hallo NOVI! Deze pagina is ${bezoekers} keer bezocht.`);
});

--------------------------------------------
 */

app.get('/', (req, res) => {
    res.send('Hallo NOVI! x');
});

app.listen(port, () => {
    console.log(`Demo app luistert op http://localhost:${port}`);
});

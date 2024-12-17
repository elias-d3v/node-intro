import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Hello World! Bienvenue sur mon serveur Express 🚀');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
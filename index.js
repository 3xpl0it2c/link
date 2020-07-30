const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";

app.use(express.static(`${__dirname}/assets/`));

/*
app.use('/assets/*', (req, res) => {
	res.set('Content-Type', 'text/css')
});
*/

app.use(express.static(`${__dirname}/views/`));

app.listen(port, host, () => {
	console.log(`Server is up !`);
	console.log(`Come visit http://${host}:${port}`);
});

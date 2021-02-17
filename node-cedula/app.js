const express = require('express');
const app = express();
const PORT = 8000;
const colors = require('colors');
const path = require('path');

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/form.html'));
});

app.post('/data', (req, res) => {

	let cedula = req.body.cedula;
	let ls_cedula = cedula.trim().split('');
	let last_digit = parseInt(ls_cedula[ls_cedula.length - 1]);

	if (last_digit % 2 != 0) {
		let a = 0;
		let b = 1;

		let ls_fib = [];
		let i = 1;

		while (i <= 10) {
			let temp = a + b;
			a = b;
			b = temp;
			ls_fib.push(a);
			i += 1;
		};
		res.send(`<h2 style="text-align: center;">Números impares serie fibonacci de 10</h2>
			<p style="text-align: center; font-size: 20px;">Número ${last_digit} serie, {${ls_fib}}</p>`);
	} else {
		let a = 0;
		let b = 1;

		let ls_fib = [];
		let i = 1;

		while (i <= 20) {
			let temp = a + b;
			a = b;
			b = temp;
			ls_fib.push(a);
			i += 1;
		};
		res.send(`<h2 style="text-align: center;">Números pares serie fibonacci de 20</h2>
			<p style="text-align: center; font-size: 20px;">Número ${last_digit} serie, {${ls_fib}}</p>`);
	};
});

app.listen(PORT, (req, res) => {
	console.log(`Server on port: ${PORT}`.yellow);
});

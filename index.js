let express = require('express');
let pug = require("pug");
let path = require('path');
let app = express();

app.set(path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', {
	src: {
		"structure.json": require('./views/structure.json'),
	}
}));

app.listen(3000, () => console.log('Ok, running'));

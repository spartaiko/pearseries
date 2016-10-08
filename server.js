var express = require ('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req,res) {
	res.render('index', {title:'pearseries' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'pearseries - signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'pearseries - signin' });
})

app.get('/admision', function (req, res) {
  res.render('index', { title: 'pearseries - admision' });
})

app.listen(3000, function(err) {
	if (err) return console.log('ups! hubo un error'), process.exit(1);

	console.log('pearseries escuchando en el puerto 3000')
})
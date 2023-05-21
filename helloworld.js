var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', function(req, res){
    var randomFortune =
            fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});

app.use((err, req, res, next) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log('Express server started');
});

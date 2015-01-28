var express = require ('express'),
  app = express();
  ejs = require("ejs"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('*', function(req,res){
  res.render('404');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("it starts on level 3k");
});
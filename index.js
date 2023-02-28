import express  from "express";
import {database, addvitae, seevitae} from "./src/db.js";
let all 

const app = express();
const port = '8000'

//Start server
app.listen( port, function(){
    console.log('Server running on port 8000.');
})

// Pug configuration
app.set('views', './vistas')
app.set('view engine', 'pug')

//Static file configuration
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

//Routes
//Principal 
app.get('/', function (req, res) {
    res.render('index', {title:'CV web - Hello!'})
})
//Creation
app.get('/create', function (req, res) {      
    res.render('create', {title:'CV web - Create a Curriculum'})
})
app.get('/add/:firstname/:surname/:profession/:city/:country/:mail/:telephone/:others/:others2/:experience/:technologies/:languages/:training/:courses', function(req, res){
    let firstname = req.params.firstname;
    let surname = req.params.surname;
    let profession = req.params.profession;
    let city = req.params.city;
    let country = req.params.country;
    let mail = req.params.mail;
    let telephone = req.params.telephone;
    let others = req.params.others;
    let others2 = req.params.others2;
    let experience = req.params.experience;
    let technologies = req.params.technologies;
    let languages = req.params.languages;
    let training = req.params.training;
    let courses = req.params.courses;

    addvitae(firstname, surname, profession, city, country, mail, telephone, others, others2, experience, technologies, languages, training, courses)
     
})
//...See Curriculum Vitae
app.get('/cv', function (req, res) {    
    all = seevitae()
    res.render('cv', {title:'CV web - Your Curriculum vitae online', data:all})
})
// Basic CV example with api rest
app.get('/example', function(req, res){
    res.render('example', {title:'Curriculum vitae basic'})
})
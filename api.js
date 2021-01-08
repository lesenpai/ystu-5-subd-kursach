var Db = require('./db_operations');
var Company = require('./Company');
const db_operations = require('./db_operations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.get('/company', (request, response) => {
    db_operations.getCompanyList().then(result => {
        // console.log(result); 
        response.json(result[0]);
    } )
})
 

router.get('/company/:id', (request, response) => {
    console.log(request.params);
    db_operations.getCompany(request.params.id).then(result => {
        response.json(result[0]);
    })
})
 

let port = process.env.PORT || 8090;
app.listen(port);
console.log('API is running at '+port);



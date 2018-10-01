/*
* @Author: alexandru pop
* @Date:   2018-09-28 13:04:01
* @Last Modified by:   alexandru pop
* @Last Modified time: 2018-09-30 17:19:00
*/


const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('./api/config/db')

const app = express();
const port = 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


MongoClient.connect(db.url,  (err, database) => {
	
	if(err)
		return console.log(err);

	require('./api/router')(app, database)
	app.listen(port, () =>{
		console.log('Api server is running on port: '+ port);
	})
})
const express = require('express');	// Add express
const server = express();		// Define express
server.use(express.json());		// Json parser **NEEDED FOR POST REQs**

server.post('/crayons',(req,res) => {

});

server.get('/crayons',(req,res) => {

});

server.get('/crayons/:id',(req,res) => {

});

server.put('/crayons/:id',(req,res) => {

});

server.delete('/crayons/:id',(req,res) => {

});

server.listen(4000, (req,res) => {
	console.log("Listening on port 4000...");
)};


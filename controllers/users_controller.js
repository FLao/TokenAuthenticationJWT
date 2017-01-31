var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var db = require("../models");

// =======================
// routes ================
// =======================
/*
// basic route
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + "/views/index.html"));
});
*/
/*
router.get('/setup', function(request, response) {
  	db.User.create({
    	  name: "Francis",
      	password: "password"
    }).then(function(dbUser) {
      	// We have access to the new user as an argument inside of the callback function
      	response.json(dbUser);
    });
});
*/
router.post('/', function(request, response) {
  	db.User.create({
    	name: request.body.name,
      	password: request.body.password
    }).then(function(dbUser) {
      	// We have access to the new user as an argument inside of the callback function
      	response.json(dbUser);
    });
});
/*
// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(request, response) {
	// find the user
	console.log(request.query.name)
	console.log(request.query.password)
	
  	db.User.findOne({
     	where: {
        	name: request.query.name,
        	password: request.query.password
      	}
    }).then(function(dbUser) {

    	// if err return console log err
    	// if user === null res.json ({message: "user not found or password is incorrect"})
    	// console.log(err);
    	// req.user.id = decoder;

    	console.log(dbUser.dataValues);
    	console.log("Success!");

    	
    	//var decodeThisObject = {
    	//	id: user.dataValues.id
    	//}
    	

      	var token = jwt.sign(dbUser.dataValues, router.get('superSecret'), {
        	expiresIn: 60 * 60  // expires in one hour
        });
      
        // return the information including token as JSON
        response.json({
          	success: true,
          	message: 'Enjoy your token!',
          	token: token
        });
    });
});
    	
// route middleware to verify a token
router.use(function(request, response, next) {
    // check header or url parameters or post parameters for token
    var token = request.body.token || request.query.token || request.headers['x-access-token'];

    // decode token
    if(token) {
        console.log("Token: " + token);
        // verifies secret and checks exp
        jwt.verify(token, router.get('superSecret'), function(error, decoded) {      
            if (error) {
                return response.json({ success: false, message: 'Failed to authenticate token.' });    
            } 

            else {
                // if everything is good, save to request for use in other routes
                request.decoded = decoded;    
                next();
            }
        });
    } 

    else {
        // if there is no token
        // return an error
        return response.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
});

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(request, response) {
  	response.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(request, response) {
  	db.User.findAll({}).then(function(dbUser) {
    	response.json(dbUser);
  	});
});     
*/
module.exports = router;
//module.exports = apiRoutes;
var path = require("path");

// =======================
// routes ================
// =======================

// create user route

module.exports = function(app) {

app.get('/create', function(request, response) {
    response.sendFile(path.join(__dirname + "/../views/create.html"));
});

app.post('/create', function(request, response) {
    db.User.create({
        name: request.body.name,
        password: request.body.password
    }).then(function(dbUser) {
        // We have access to the new user as an argument inside of the callback function
        response.json(dbUser);
    });
});

// login user route
app.get('/login', function(request, response) {
    response.sendFile(path.join(__dirname + "/../views/login.html"));
});

};


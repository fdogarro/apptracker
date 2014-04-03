// set up login route 
var routes;
routes = function(app) {
  app.get('/login', function(req, res) {
    // use __dirname to get full path to the file
    return res.render("" + __dirname + "/views/login", {
      title: 'Login',
      stylesheet: 'login'
    });
  });
};

module.exports = routes;

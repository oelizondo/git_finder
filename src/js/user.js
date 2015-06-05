var User;

User = (function() {
  var BASE_URL;

  BASE_URL = 'http://api.github.com/users/';

  function User(attributes) {
    if (attributes == null) {
      attributes = {};
    }
    this.name = attributes.name;
    this.meail = attributes.email;
    this.location = attributes.location;
    this.username = attributes.login;
    this.reposUrl = attributes.repos_url;
  }

  User.fetchSingleUser = function(username, callback) {
    var user;
    user = null;
    return $.ajax({
      url: "" + BASE_URL + username,
      type: 'GET',
      success: function(data) {
        console.log(data);
        user = new User(data);
        if (callback) {
          return callback(user);
        }
      }
    });
  };

  return User;

})();

var User;

User = (function() {
  var BASE_URL, CURRENTLASTID, Users;

  BASE_URL = 'http://api.github.com/users';

  Users = [];

  CURRENTLASTID = 0;

  function User(attributes) {
    if (attributes == null) {
      attributes = {};
    }
    this.name = attributes.name;
    this.id = attributes.id;
    this.username = attributes.login;
    this.email = attributes.email;
    this.location = attributes.location;
    this.reposUrl = attributes.repos_url;
  }

  User.fetchSingleUser = function(username, callback) {
    var user;
    user = null;
    return $.ajax({
      url: BASE_URL + "/" + username,
      type: 'GET',
      success: function(data) {
        user = new User(data);
        if (callback) {
          return callback(user);
        }
      }
    });
  };

  User.fetchAllUsers = function(callback) {
    return $.ajax({
      type: 'GET',
      url: BASE_URL + "?since=" + CURRENTLASTID,
      success: function(data) {
        var i, len, newUser, user;
        for (i = 0, len = data.length; i < len; i++) {
          user = data[i];
          newUser = new User(user);
          Users.push(newUser);
        }
        CURRENTLASTID = Users.length - 1;
        if (callback) {
          return callback(Users);
        }
      }
    });
  };

  return User;

})();

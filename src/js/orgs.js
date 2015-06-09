var Org;

Org = (function() {
  var BASE_URL, Orgs, USER_ORGS;

  BASE_URL = 'http://api.github.com/orgs/';

  USER_ORGS = "https://api.github.com/users/";

  Orgs = [];

  function Org(attributes) {
    if (attributes == null) {
      attributes = {};
    }
    this.name = attributes.login;
    this.site = attributes.blog;
    this.location = attributes.location;
    this.members = attributes.members;
    this.publicrRepos = attributes.public_repos;
    this.repos = attributes.repos_url;
    this.followers = attributes.followers;
  }

  Org.fetchOrg = function(org, callback) {
    return $.ajax({
      type: 'GET',
      url: "" + BASE_URL + org,
      success: function(data) {
        org = new Org(data);
        if (callback) {
          return callback(org);
        }
      }
    });
  };

  Org.fetchAllOrgs = function(username, callback) {
    return $.ajax({
      type: 'GET',
      url: "" + USER_ORGS + username + "/orgs",
      success: function(data) {
        var i, len, newOrg, org;
        for (i = 0, len = data.length; i < len; i++) {
          org = data[i];
          newOrg = new Org(org);
          Orgs.push(newOrg);
        }
        if (callback) {
          return callback(Orgs);
        }
      }
    });
  };

  return Org;

})();

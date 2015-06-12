var Repo;

Repo = (function() {
  var BASE_URL, CURRENTLASTREPO, PUBLIC_REPOS, Repos;

  BASE_URL = "http://api.github.com/repos";

  PUBLIC_REPOS = "https://api.github.com/repositories";

  Repos = [];

  CURRENTLASTREPO = 0;

  function Repo(attributes) {
    if (attributes == null) {
      attributes = {};
    }
    this.name = attributes.full_name;
    this.url = attributes.url;
    this.forks = attributes.forks_count;
    this.language = attributes.language;
    this.stars = attributes.stargazers_count;
  }

  Repo.fetchRepo = function(username, repoName, callback) {
    return $.ajax({
      type: 'GET',
      url: BASE_URL + "/" + username + "/" + repoName,
      success: function(data) {
        var nRepo;
        nRepo = new Repo(data);
        if (callback) {
          return callback(nRepo);
        }
      }
    });
  };

  Repo.fetchAllRepos = function(callback) {
    return $.ajax({
      type: 'GET',
      url: PUBLIC_REPOS + "?since=" + CURRENTLASTREPO,
      success: function(data) {
        var i, len, newRepo, repo;
        for (i = 0, len = data.length; i < len; i++) {
          repo = data[i];
          newRepo = new Repo(repo);
          Repos.push(newRepo);
        }
        CURRENTLASTREPO = Repos.length - 1;
        if (callback) {
          return callback(Repos);
        }
      }
    });
  };

  return Repo;

})();

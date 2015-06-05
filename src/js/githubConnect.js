var githubConnect;

githubConnect = (function() {
  var base_url;

  base_url = 'http://api.github.com/';

  function githubConnect(path) {
    this.connect = "" + base_url + path;
    $.ajaxSetup({
      url: this.connect,
      dataType: 'json'
    });
  }

  return githubConnect;

})();

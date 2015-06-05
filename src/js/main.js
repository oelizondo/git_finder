$(function() {
  $('#search-user').click(function() {
    var $name;
    $name = $('#name').val();
    return $.ajax({
      type: 'GET',
      url: 'https://api.github.com/users/' + $name,
      success: function(data) {
        console.log('success:', data);
        return $('#info').html('<li> name: ' + data.name + '</li> <br> <li> username: ' + data.login + '</li> <br> <li> email: ' + data.email + '</li> <br> <li> id: ' + data.id + '</li> <br> <li> Location' + data.location + '</li>');
      }
    });
  });
  return $('#search-org').click(function() {
    var $org;
    $org = $('#org').val();
    return $.ajax({
      type: 'GET',
      url: 'https://api.github.com/orgs/' + $org,
      success: function(data) {
        return $('#org-info').html('<li> Name: ' + data.login + '</li> <br> <li> Followers: ' + data.followers + '</li> <br> <li> Repos: ' + data.public_repos + '</li> <br> <li> Url: ' + data.html_url + '</li>');
      }
    });
  });
});

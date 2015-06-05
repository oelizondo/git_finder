$ ->
	$('#search-user').click ->
		$name = $('#name').val()
		$.ajax({
			type: 'GET'
			url: 'https://api.github.com/users/' + $name
			success: (data)->
				console.log 'success:', data
				$('#info').html('<li> name: ' + data.name + '</li> <br> <li> username: ' + data.login + '</li> <br> <li> email: ' + data.email + '</li> <br> <li> id: ' + data.id + '</li> <br> <li> Location' + data.location + '</li>')
		})

	$('#search-org').click ->
		$org = $('#org').val()
		$.ajax({
			type: 'GET'
			url: 'https://api.github.com/orgs/' + $org
			success: (data)->
				$('#org-info').html('<li> Name: ' + data.login + '</li> <br> <li> Followers: '+ data.followers + '</li> <br> <li> Repos: ' + data.public_repos +  '</li> <br> <li> Url: '+ data.html_url + '</li>')

		})

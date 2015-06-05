class User
	BASE_URL = 'http://api.github.com/users/'

	constructor: (attributes={}) ->
		@name = attributes.name
		@meail = attributes.email
		@location = attributes.location
		@username = attributes.login
		@reposUrl = attributes.repos_url

	@fetchSingleUser: (username, callback) ->
		user = null
		$.ajax({
			url: "#{BASE_URL}#{username}"
			type: 'GET'
			success: (data) ->
				console.log data
				user = new User(data)
				callback(user) if callback
		})
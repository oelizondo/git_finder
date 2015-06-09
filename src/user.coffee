class User
	BASE_URL = 'http://api.github.com/users'
	Users = []
	constructor: (attributes={}) ->
		@name = attributes.name
		@username = attributes.login
		@email = attributes.email
		@location = attributes.location
		@reposUrl = attributes.repos_url

	@fetchSingleUser: (username, callback) ->
		user = null
		$.ajax({
			url: "#{BASE_URL}/#{username}"
			type: 'GET'
			success: (data) ->
				user = new User(data)
				callback(user) if callback
		})

	@fetchAllUsers: (callback) ->
		$.ajax({
			type: 'GET'
			url: BASE_URL
			success: (data) ->
				for user in data
					newUser = new User(user)
					Users.push(newUser)
				callback(Users) if callback
		})
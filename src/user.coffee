class User
	BASE_URL = 'http://api.github.com/users'
	Users = []
	CURRENTLASTID = 0
	constructor: (attributes={}) ->
		@name = attributes.name
		@id = attributes.id
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
			url: "#{BASE_URL}?since=#{CURRENTLASTID}"
			success: (data) ->
				for user in data
					newUser = new User(user)
					Users.push(newUser)
				CURRENTLASTID = Users.length-1
				callback(Users) if callback
		})
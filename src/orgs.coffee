class Org
	BASE_URL = 'http://api.github.com/orgs/'
	USER_ORGS = "https://api.github.com/users/"
	Orgs = []
	constructor: (attributes={}) ->
		@name = attributes.login
		@site = attributes.blog
		@location = attributes.location
		@members = attributes.members
		@publicrRepos = attributes.public_repos
		@repos = attributes.repos_url
		@followers = attributes.followers

	@fetchOrg: (org, callback) ->
		$.ajax({
			type: 'GET'
			url: "#{BASE_URL}#{org}"
			success: (data) ->
				org = new Org(data)
				callback(org) if callback
		})

	@fetchAllOrgs: (username, callback) ->
		$.ajax({
			type: 'GET'
			url: "#{USER_ORGS}#{username}/orgs"
			success: (data) ->
				orgArr = []
				for org in data
					newOrg = new Org(org)
					orgArr.push(newOrg)
				Orgs.push(orgArr)
				callback(Orgs) if callback
		})
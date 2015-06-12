API wrapper to gather information about Github Users/Orgs/Repos

What:
	Connect to Github to retrieve information from:
		Users
		Organizations
		Repos

	From each category filter types of information such as:
		User:
			name: string
			user: string
			email: string
			location: string
			repos: url

		Orgnizations:
			name: string
			website: url
			location: string
			members: string array
			public repositories: integer
			repostories: url
			followers: integer

		Repos:
			full name: string
			url:url
			language: string
			stars: integer
How:
	Connecting to Github API.
	Retrieve information (JSON) via AJAX.
Installation:

	Methods for Users:

		Fetching a single user: returns a single user with its data.
		.fetchSingleUser('username', function(data){
			user = data;
		});

		Fetching all users: returns an array of 100 users at a time.
		.fetchAllUsers(function(data){
			users = data;
		});

	Interacting with the User class:
		user.name 
		user.username
		user.email
		user.location
		user.reposUrl

	Methods for Organizations:

		Fetching a single Organization: return a single organization with its data.
		.fetchOrg('orgname', function(data){
			org = data;
		});

		Fetch all Organizations from a single User, since there is no way to make an Organization dump.
		.fetchAllOrgs('username', function(data){
			orgs = data;
		});

	Interacting with the Organization class:
		org.name
		org.site
		org.location
		org.members
		org.publicRepos
		org.repos
		org.followers

	Methods for Repositories:

		Fetching a single Repository, username and repository name should be included, since there is no 'loose' repository hunting.
		.fetchRepo('username','reponame', function(data){
			repo = data;
		});

		Fetching all public repositories: returns a list of public repositories, keep in mind that attributes of the public list and user list are different and some methods do not work parallely.
		.fetchAllRepos(function(data){
			repos = data;
		});

	Interacting with the Repository class:
		repo.name
		repo.url
		repo.forks
		repo.language
		repo.stars























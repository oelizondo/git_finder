class githubConnect
	base_url = 'http://api.github.com/'

	constructor: (path) ->
		@connect = "#{base_url}#{path}"
		$.ajaxSetup(
			url: @connect
			dataType: 'json'
		)
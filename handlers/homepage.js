function handler (req, res) {
	res.json({
		hello: 'world'
	})
}

module.exports = ['/', handler]
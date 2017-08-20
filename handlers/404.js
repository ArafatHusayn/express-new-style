function handler (req, res) {
	res.status(404).send(`I couldn't get anything here for you, buddy.`)
}

module.exports = ['*', handler]
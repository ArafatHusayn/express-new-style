function handler (req, res) {
	
	res.json({
		reversed: functions.reverse( req.query.text ) // functions.reverse() ?? Where did it come from?? ;)
	})

}

module.exports = ['/reverse', handler]
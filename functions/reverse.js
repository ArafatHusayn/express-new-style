module.exports = (text) => {
	return (typeof text !== 'undefined') ? text.split('').reverse().join('') : null
}
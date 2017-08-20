const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express()

function readDirRecursively(dir) {
    return fs.statSync(dir).isDirectory()
        ? Array.prototype.concat(...fs.readdirSync(dir).map(f => readDirRecursively(path.join(dir, f))))
        : dir;
}

module.exports = () => {

	// express app as global
	global.express = express
	global.app = app

	// handlers as globals
	const dirs = require('./dirs.js')
	dirs.map(dir => {
		global[dir] = {}
		readDirRecursively(`./${dir}`).forEach( fullpath => {
			let name = path.basename(fullpath).replace('.js', '')
			global[dir][name] = require(`./${fullpath}`)
		})
	})

}
const port = process.env.PORT || 3535
module.exports = [port, () => console.log(`> listening http://localhost:${port}/`)]
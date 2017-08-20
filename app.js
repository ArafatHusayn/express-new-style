require('./import')()

app.get(...handlers.homepage) // Yeah, here is the new style. ;)

app.post(...handlers.reverser) // Read or create more in 'handlers' directory.

app.all(...handlers['404']) // This makes sense too.

app.listen(...to.Me) <!-- pretty neat, huh?




/* Just make some requests with any HTTP client

$ curl http://localhost:3535/

- response: {"hello":"world"}

$ curl -XPOST http://localhost:3535/reverse?text=hello

- response: {"reversed":"olleh"}

$ curl -XPOST http://localhost:3535/reverse?text=world

- response: {"reversed":"dlrow"}

$ curl http://localhost:3535/i-don't-exist

- response: I couldn't get anything here for you, buddy.

*/
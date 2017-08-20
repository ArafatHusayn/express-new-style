Have a quick peek at `app.js`:

```javascript
require('./import')()

app.get(...handlers.homepage) // Yeah, here is the new style.

app.post(...handlers.reverser) // Read or create more in 'handlers' directory.

app.all(...handlers['404']) // This makes sense too.

app.listen(...to.Me) <!-- pretty neat, huh?
```

Tree of files and directories:
```
│
│   app.js
│   dirs.js
│   import.js
│   package.json
│
├───functions
│       reverse.js
│
├───handlers
│       404.js
│       homepage.js
│       reverser.js
│
└───to
        Me.js
```

Read the source code and have fun!
The code is for experimental use. It's not recommended to use overwritable `global` objects.
So it should be used very carefully.

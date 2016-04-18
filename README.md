# Express-demo

One od the many demo apps showcasing how Express.js can be used to create a basic web server. Features include:

* Basic request/response handling
* Serving static files (+ Bootstrap demo)
* Returning data as JSON
* Downloading a file
* Performing a redirect
* Reading data from a POST request
* Logging requests to stdout

Includes some elementary best practices:

* Uses strict mode
* Specifying configuration via ENV variables
* Moving routes to a separate module

## How to run

```
npm install
PORT=3000 node server.js
```

And then navigate to the browser:

```
http://localhost:3000/
```

Needless to say, you obviously need to have node.js installed...
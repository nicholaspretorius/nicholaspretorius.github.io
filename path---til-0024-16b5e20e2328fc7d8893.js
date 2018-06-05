webpackJsonp([0xed7d19788c84],{445:function(e,n){e.exports={data:{markdownRemark:{html:"<h3>PowerShell, Plain JS Post, Enabling CORS on Express and Express Body Parser</h3>\n<ul>\n<li>Determine the version of PowerShell you are running: $PSVersionTable.PSVersion</li>\n<li>Determine the execution policy on PowerShell (this is necessary to determine whether you can ru PowerShell scripts): Get-ExecutionPolicy</li>\n<li>Useful resource for setting up Invoke-RestMethod calls via PowerShell scripts | <a href=\"https://www.jokecamp.com/blog/invoke-restmethod-powershell-examples/\">Link</a></li>\n<li>\n<p>Enable CORS on an Express server | <a href=\"https://enable-cors.org/server_expressjs.html\">Link</a></p>\n<pre>\napp.use(function(req, res, next) {\nres.header(\"Access-Control-Allow-Origin\", \"*\");\nres.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\nnext();\n});\n</pre>\n</li>\n<li>To use req.body inside of Express you need to load Body Parser | <a href=\"https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application/10007542#10007542\">Link</a></li>\n<li>\n<p>First install it: npm i body-parser</p>\n<pre>\nvar express = require('express);\nvar bodyParser = require('body-parser');\n</li>\n</ul>\n<p>var app = express();</p>\n<p>app.use(bodyParser.json());</p>\n<p>app.post('/', function(req, res) {\nconsole.log(req.body);\n})\napp.listen(8000);</p>\n</pre>\n* In package.json check: \"main\": \"app.js\", then you can just run: nodemon instead of: nodemon app.js\n* npm i pug --save\n* mkdir view && cd_$\n* touch index.pug\n* Then:\n<pre>\n    app.set('view engine', 'pug');\n    ..\n    app.get('/', (req, res) => {\n        res.render('index', {title='Hello world!'});\n    });\n</pre>\n* Pug templating 101 (Assume we have var colors = ['red', 'blue', 'green'])\n<pre>\n    doctype html\n    html(lang=\"en\")\n        head\n            title= title\n        body\n            div.wrapper\n            .content\n            ul\n                each color in colors\n                   li color\n            p#main Hi!\n            #secondary\n            if hint \n                p\n                    i Hint: #{hint}\n            else \n                p (There is no hint)\n</pre>\n* Pug locals\n<pre>\n    app.get('/cards', (req, res) => {\n        res.locals.prompt = \"What is your question?\";\n        res.locals.hint = \"Think about something.\"; // interpolated from #{hint} above\n        res.render('card');\n        // res.render('card', {prompt: 'What is your...', hint: 'Think about...'});\n    });\n</pre>\n* Pug Partials <br/>\nIn the layout.pug file (along with a: mkdir includes)\n<pre>\n...\nheader \n    include includes/header.pug\n...\nblock content\n...\n    include includes/footer.pug\n</pre>\nIn the index.pug file: \n<pre>\nextends layout.pug\n<p>block content\nsection#wrapper\nh1 Hello world!</p>\n</pre>\n<h3>Eloquent JavaScript Chapter 4: Data Structures</h3>\n<ul>\n<li>Almost all JavaScript values have properties except null and undefined.</li>\n<li>value.prop prop must be a valid variable name and directly names the propery.</li>\n<li>value[prop] prop is <strong>evaluated</strong> to get the property name. </li>\n<li>The elements of an array are stored in properties with numbers for their names. </li>\n<li>Properties that contain functions are called methods. Examples are .toUppercase, .toLowerCase for strings. Array have pop(), push(), .join() amongst others. </li>\n<li>You can delete an object property with: delete object.propertyName;</li>\n<li>console.log(\"propertyName\" in object); // false</li>\n<li>array.shift(); will return (and remove) the first item in the array, as opposed to .pop() which will return and remove the last item in the array. </li>\n<li>Similarly .unshift() add an item to the beginning of an array and .push() adds an item to the end of an array. </li>\n<li>indexOf(x) returns the index of the first instance of x in the array whereas lastIndexOf(x) returns the index of the last instance of x in the array. Both take an optional second argument to indicate where to start the search from. </li>\n<li>\n<p>.slice() takes two parameters, start(inclusive), end(exclusive) and returns an array of the items between start and end. If no second parameter is supplied, it takes all the items after the start.</p>\n<pre>\nconsole.log([0, 1, 2, 3, 4].slice(2, 4));\nconsole.log([0, 1, 2, 3, 4].slice(2));\n</pre> \n</li>\n<li>array1.concat(array2); will put two arrays into one and return the resulting array. </li>\n<li>\"   somestring  \\n\".trim(); will remove all the whitespace (spaces, tabs, newlines) from the string</li>\n<li>Strings, numbers and booleans are not objects and are <strong>immutable</strong> which means you cannot add properties to them. </li>\n<li>Whenever a function is called, a special variable names 'arguments' is added to the environment in which the function body runs. arguments has a .length property. </li>\n<li>\n<p>Math.random();</p>\n<pre>\nconsole.log(Math.floor(Math.random()*10));\n</pre>\n</li>\n<li>\n<p>All global variables are stored in the global object, that is window.</p>\n<pre>\nvar myVar = 10;\nconsole.log(\"myVar\" in window);\nconsole.log(window.myVar);\n</pre>\n</li>\n</ul>",frontmatter:{title:"TIL 0024"}}},pathContext:{slug:"/til0024/"}}}});
//# sourceMappingURL=path---til-0024-16b5e20e2328fc7d8893.js.map
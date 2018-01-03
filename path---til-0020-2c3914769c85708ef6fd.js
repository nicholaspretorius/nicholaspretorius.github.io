webpackJsonp([0xfcfcbddb3f34],{425:function(n,i){n.exports={data:{markdownRemark:{html:"<h3>Terminal, Node.js Continued, Triangles, Yarn and TypeScript</h3>\n<ul>\n<li>\n<p>ps aux | To show processes running</p>\n</li>\n<li>\n<p>kill -9 processId | processId being the number of the process you want to kill</p>\n</li>\n<li>\n<p>Node.js fs and querystring | <a href=\"https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback\">Link</a> and <a href=\"https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options\">Link</a></p>\n</li>\n<li>\n<p>Triangle exercise from <a href=\"http://eloquentjavascript.net/02_program_structure.html#h_umoXp9u0e7\">Eloquent JavaScript</a></p>\n<pre>\n/* Triangle Exercise from Eloquent JavaScript 28/12/2017 (http://eloquentjavascript.net/02_program_structure.html#h_umoXp9u0e7) */\nfunction drawTriangle(limit, char) {\n    var string = '';\n    for (var i = 1; i < limit; i++) {\n        for (var j = 0; j < i; j++){ // var j = i; j < limit; j++ for inverted triangle\n            string += char;\n        }\n        string += '\\n'\n        //string += '!';\n    }\n    console.log(string);\n}\n\ndrawTriangle(8, '#');\n</pre>\n</li>\n<li>\n<p>JS Types: String, Boolean, undefined, null, Object, Number, Symbol</p>\n</li>\n<li>\n<p>AST = abstract syntax tree | <a href=\"http://astexplorer.net/\">AST Explorer</a></p>\n</li>\n<li>\n<p>Hold CMD while hovering on a symbol in VS Code and it will display an overlay of the definition. CMD + Click will open the file at the definition. </p>\n</li>\n<li>\n<p>CMD + D to select next occurrence of a word in VS Code. Shift + CMD + F is find and replace. </p>\n</li>\n<li>\n<p>Right click \"Rename symbol\" or FN + F2 shortcut rename symbol</p>\n</li>\n<li>\n<p>yarn global add typescript</p>\n</li>\n<li>\n<p>yarn init -y | -y flag is to answer yes to all init options</p>\n</li>\n<li>\n<p>yarn add -D typescript webpack webpack-dev-server</p>\n</li>\n<li>\n<p>tsc --init | Creates a ts project for you in the folder</p>\n</li>\n<li>\n<p>tsc -w | Runs tsc in watch mode</p>\n</li>\n<li>\n<p>Union types and type alias</p>\n<pre>\n// Specify type alias with union types # or $\ntype ValidSymbols = '#' | '$'\nconst symbol = '#'\n</pre>\n</li>\n</ul>",frontmatter:{title:"TIL 0020"}}},pathContext:{slug:"/til0020/"}}}});
//# sourceMappingURL=path---til-0020-2c3914769c85708ef6fd.js.map
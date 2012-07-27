define(function(require, exports, module) {
    module.exports = {
    "textRaw": "Debugger",
    "name": "Debugger",
    "stability": 3,
    "stabilityText": "Stable",
    "type": "misc",
    "desc": "<p>V8 comes with an extensive debugger which is accessible out-of-process via a\nsimple <a href=\"http://code.google.com/p/v8/wiki/DebuggerProtocol\">TCP protocol</a>.\nNode has a built-in client for this debugger. To use this, start Node with the\n<code>debug</code> argument; a prompt will appear:\n\n</p>\n<pre class='sh_javascript'><code>% node debug myscript.js\n&lt; debugger listening on port 5858\nconnecting... ok\nbreak in /home/indutny/Code/git/indutny/myscript.js:1\n  1 x = 5;\n  2 setTimeout(function () {\n  3   debugger;\ndebug&gt;</code></pre>\n<p>Node&apos;s debugger client doesn&apos;t support the full range of commands, but\nsimple step and inspection is possible. By putting the statement <code>debugger;</code>\ninto the source code of your script, you will enable a breakpoint.\n\n</p>\n<p>For example, suppose <code>myscript.js</code> looked like this:\n\n</p>\n<pre class='sh_javascript'><code>// myscript.js\nx = 5;\nsetTimeout(function () {\n  debugger;\n  console.log(&quot;world&quot;);\n}, 1000);\nconsole.log(&quot;hello&quot;);</code></pre>\n<p>Then once the debugger is run, it will break on line 4.\n\n</p>\n<pre class='sh_javascript'><code>% node debug myscript.js\n&lt; debugger listening on port 5858\nconnecting... ok\nbreak in /home/indutny/Code/git/indutny/myscript.js:1\n  1 x = 5;\n  2 setTimeout(function () {\n  3   debugger;\ndebug&gt; cont\n&lt; hello\nbreak in /home/indutny/Code/git/indutny/myscript.js:3\n  1 x = 5;\n  2 setTimeout(function () {\n  3   debugger;\n  4   console.log(&quot;world&quot;);\n  5 }, 1000);\ndebug&gt; next\nbreak in /home/indutny/Code/git/indutny/myscript.js:4\n  2 setTimeout(function () {\n  3   debugger;\n  4   console.log(&quot;world&quot;);\n  5 }, 1000);\n  6 console.log(&quot;hello&quot;);\ndebug&gt; repl\nPress Ctrl + C to leave debug repl\n&gt; x\n5\n&gt; 2+2\n4\ndebug&gt; next\n&lt; world\nbreak in /home/indutny/Code/git/indutny/myscript.js:5\n  3   debugger;\n  4   console.log(&quot;world&quot;);\n  5 }, 1000);\n  6 console.log(&quot;hello&quot;);\n  7\ndebug&gt; quit\n%</code></pre>\n<p>The <code>repl</code> command allows you to evaluate code remotely. The <code>next</code> command\nsteps over to the next line. There are a few other commands available and more\nto come. Type <code>help</code> to see others.\n\n</p>\n",
    "miscs": [
    {
        "textRaw": "Watchers",
        "name": "watchers",
        "desc": "<p>You can watch expression and variable values while debugging your code.\nOn every breakpoint each expression from the watchers list will be evaluated\nin the current context and displayed just before the breakpoint&apos;s source code\nlisting.\n\n</p>\n<p>To start watching an expression, type <code>watch(&quot;my_expression&quot;)</code>. <code>watchers</code>\nprints the active watchers. To remove a watcher, type\n<code>unwatch(&quot;my_expression&quot;)</code>.\n\n</p>\n",
        "type": "misc",
        "displayName": "Watchers"
    },
    {
        "textRaw": "Commands reference",
        "name": "commands_reference",
        "modules": [
            {
                "textRaw": "Execution control",
                "name": "Execution control",
                "type": "module",
                "displayName": "Various"
            },
            {
                "textRaw": "Various",
                "name": "various",
                "type": "module",
                "displayName": "Various"
            }
        ],
        "type": "misc",
        "displayName": "Commands reference"
    },
    {
        "textRaw": "Advanced Usage",
        "name": "advanced_usage",
        "desc": "<p>The V8 debugger can be enabled and accessed either by starting Node with\nthe <code>--debug</code> command-line flag or by signaling an existing Node process\nwith <code>SIGUSR1</code>.\n\n</p>\n",
        "type": "misc",
        "displayName": "Advanced Usage"
    }
]
}
});
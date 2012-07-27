define(function(require, exports, module) {
    module.exports = {
    "textRaw": "Global Objects",
    "name": "Global Objects",
    "type": "misc",
    "desc": "<p>These objects are available in all modules. Some of these objects aren&apos;t\nactually in the global scope but in the module scope - this will be noted.\n\n</p>\n",
    "globals": [
    {
        "textRaw": "global",
        "name": "global",
        "type": "global",
        "desc": "<p>In browsers, the top-level scope is the global scope. That means that in\nbrowsers if you&apos;re in the global scope <code>var something</code> will define a global\nvariable. In Node this is different. The top-level scope is not the global\nscope; <code>var something</code> inside a Node module will be local to that module.\n\n</p>\n"
    },
    {
        "textRaw": "process",
        "name": "process",
        "type": "global",
        "desc": "<p>The process object. See the [process object][] section.\n\n</p>\n"
    },
    {
        "textRaw": "console",
        "name": "console",
        "type": "global",
        "desc": "<p>Used to print to stdout and stderr. See the [stdio][] section.\n\n</p>\n"
    },
    {
        "textRaw": "Class: Buffer",
        "type": "global",
        "name": "Buffer",
        "desc": "<p>Used to handle binary data. See the [buffer section][]\n\n</p>\n"
    },
    {
        "textRaw": "clearInterval(t)",
        "type": "global",
        "name": "clearInterval",
        "desc": "<p>Stop a timer that was previously created with <code>setInterval()</code>. The callback\nwill not execute.\n\n</p>\n<p>The timer functions are global variables. See the [timers][] section.\n\n</p>\n"
    },
    {
        "textRaw": "console",
        "name": "console",
        "stability": 4,
        "stabilityText": "API Frozen",
        "type": "global",
        "desc": "<p>For printing to stdout and stderr.  Similar to the console object functions\nprovided by most web browsers, here the output is sent to stdout or stderr.\n\n</p>\n",
        "methods": [
            {
                "textRaw": "console.log([data], [...])",
                "type": "method",
                "name": "log",
                "desc": "<p>Prints to stdout with newline. This function can take multiple arguments in a\n<code>printf()</code>-like way. Example:\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;count: %d&apos;, count);</code></pre>\n<p>If formatting elements are not found in the first string then <code>util.inspect</code>\nis used on each argument.  See [util.format()][] for more information.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "data",
                                "optional": true
                            },
                            {
                                "name": "...",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.info([data], [...])",
                "type": "method",
                "name": "info",
                "desc": "<p>Same as <code>console.log</code>.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "data",
                                "optional": true
                            },
                            {
                                "name": "...",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.error([data], [...])",
                "type": "method",
                "name": "error",
                "desc": "<p>Same as <code>console.log</code> but prints to stderr.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "data",
                                "optional": true
                            },
                            {
                                "name": "...",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.warn([data], [...])",
                "type": "method",
                "name": "warn",
                "desc": "<p>Same as <code>console.error</code>.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "data",
                                "optional": true
                            },
                            {
                                "name": "...",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.dir(obj)",
                "type": "method",
                "name": "dir",
                "desc": "<p>Uses <code>util.inspect</code> on <code>obj</code> and prints resulting string to stdout.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "obj"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.time(label)",
                "type": "method",
                "name": "time",
                "desc": "<p>Mark a time.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "label"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.timeEnd(label)",
                "type": "method",
                "name": "timeEnd",
                "desc": "<p>Finish timer, record output. Example:\n\n</p>\n<pre class='sh_javascript'><code>console.time(&apos;100-elements&apos;);\nfor (var i = 0; i &lt; 100; i++) {\n  ;\n}\nconsole.timeEnd(&apos;100-elements&apos;);</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "label"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.trace(label)",
                "type": "method",
                "name": "trace",
                "desc": "<p>Print a stack trace to stderr of the current position.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "label"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "console.assert(expression, [message])",
                "type": "method",
                "name": "assert",
                "desc": "<p>Same as [assert.ok()][] where if the <code>expression</code> evaluates as <code>false</code> throw an\nAssertionError with <code>message</code>.\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "expression"
                            },
                            {
                                "name": "message",
                                "optional": true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "textRaw": "process",
        "name": "process",
        "type": "global",
        "desc": "<p>The <code>process</code> object is a global object and can be accessed from anywhere.\nIt is an instance of [EventEmitter][].\n\n\n</p>\n",
        "events": [
            {
                "textRaw": "Event: 'exit'",
                "type": "event",
                "name": "exit",
                "desc": "<p>Emitted when the process is about to exit.  This is a good hook to perform\nconstant time checks of the module&apos;s state (like for unit tests).  The main\nevent loop will no longer be run after the &apos;exit&apos; callback finishes, so\ntimers may not be scheduled.\n\n</p>\n<p>Example of listening for <code>exit</code>:\n\n</p>\n<pre class='sh_javascript'><code>process.on(&apos;exit&apos;, function () {\n  process.nextTick(function () {\n   console.log(&apos;This will not run&apos;);\n  });\n  console.log(&apos;About to exit.&apos;);\n});</code></pre>\n",
                "params": []
            },
            {
                "textRaw": "Event: 'uncaughtException'",
                "type": "event",
                "name": "uncaughtException",
                "desc": "<p>Emitted when an exception bubbles all the way back to the event loop. If a\nlistener is added for this exception, the default action (which is to print\na stack trace and exit) will not occur.\n\n</p>\n<p>Example of listening for <code>uncaughtException</code>:\n\n</p>\n<pre class='sh_javascript'><code>process.on(&apos;uncaughtException&apos;, function (err) {\n  console.log(&apos;Caught exception: &apos; + err);\n});\n\nsetTimeout(function () {\n  console.log(&apos;This will still run.&apos;);\n}, 500);\n\n// Intentionally cause an exception, but don&apos;t catch it.\nnonexistentFunc();\nconsole.log(&apos;This will not run.&apos;);</code></pre>\n<p>Note that <code>uncaughtException</code> is a very crude mechanism for exception\nhandling and may be removed in the future.\n\n</p>\n<p>Don&apos;t use it, use <a href=\"domain.html\">domains</a> instead. If you do use it, restart\nyour application after every unhandled exception!\n\n</p>\n<p>Do <em>not</em> use it as the node.js equivalent of <code>On Error Resume Next</code>. An\nunhandled exception means your application - and by extension node.js itself -\nis in an undefined state. Blindly resuming means <em>anything</em> could happen.\n\n</p>\n<p>Think of resuming as pulling the power cord when you are upgrading your system.\nNine out of ten times nothing happens - but the 10th time, your system is bust.\n\n</p>\n<p>You have been warned.\n\n</p>\n",
                "params": []
            },
            {
                "textRaw": "Signal Events",
                "name": "SIGINT, SIGUSR1, etc.",
                "type": "event",
                "desc": "<p>Emitted when the processes receives a signal. See sigaction(2) for a list of\nstandard POSIX signal names such as SIGINT, SIGUSR1, etc.\n\n</p>\n<p>Example of listening for <code>SIGINT</code>:\n\n</p>\n<pre class='sh_javascript'><code>// Start reading from stdin so we don&apos;t exit.\nprocess.stdin.resume();\n\nprocess.on(&apos;SIGINT&apos;, function () {\n  console.log(&apos;Got SIGINT.  Press Control-D to exit.&apos;);\n});</code></pre>\n<p>An easy way to send the <code>SIGINT</code> signal is with <code>Control-C</code> in most terminal\nprograms.\n\n\n</p>\n",
                "params": []
            }
        ],
        "properties": [
            {
                "textRaw": "process.stdout",
                "name": "stdout",
                "desc": "<p>A <code>Writable Stream</code> to <code>stdout</code>.\n\n</p>\n<p>Example: the definition of <code>console.log</code>\n\n</p>\n<pre class='sh_javascript'><code>console.log = function (d) {\n  process.stdout.write(d + &apos;\\n&apos;);\n};</code></pre>\n<p><code>process.stderr</code> and <code>process.stdout</code> are unlike other streams in Node in\nthat writes to them are usually blocking.  They are blocking in the case\nthat they refer to regular files or TTY file descriptors. In the case they\nrefer to pipes, they are non-blocking like other streams.\n\n\n</p>\n"
            },
            {
                "textRaw": "process.stderr",
                "name": "stderr",
                "desc": "<p>A writable stream to stderr.\n\n</p>\n<p><code>process.stderr</code> and <code>process.stdout</code> are unlike other streams in Node in\nthat writes to them are usually blocking.  They are blocking in the case\nthat they refer to regular files or TTY file descriptors. In the case they\nrefer to pipes, they are non-blocking like other streams.\n\n\n</p>\n"
            },
            {
                "textRaw": "process.stdin",
                "name": "stdin",
                "desc": "<p>A <code>Readable Stream</code> for stdin. The stdin stream is paused by default, so one\nmust call <code>process.stdin.resume()</code> to read from it.\n\n</p>\n<p>Example of opening standard input and listening for both events:\n\n</p>\n<pre class='sh_javascript'><code>process.stdin.resume();\nprocess.stdin.setEncoding(&apos;utf8&apos;);\n\nprocess.stdin.on(&apos;data&apos;, function (chunk) {\n  process.stdout.write(&apos;data: &apos; + chunk);\n});\n\nprocess.stdin.on(&apos;end&apos;, function () {\n  process.stdout.write(&apos;end&apos;);\n});</code></pre>\n"
            },
            {
                "textRaw": "process.argv",
                "name": "argv",
                "desc": "<p>An array containing the command line arguments.  The first element will be\n&apos;node&apos;, the second element will be the name of the JavaScript file.  The\nnext elements will be any additional command line arguments.\n\n</p>\n<pre class='sh_javascript'><code>// print process.argv\nprocess.argv.forEach(function (val, index, array) {\n  console.log(index + &apos;: &apos; + val);\n});</code></pre>\n<p>This will generate:\n\n</p>\n<pre class='sh_javascript'><code>$ node process-2.js one two=three four\n0: node\n1: /Users/mjr/work/node/process-2.js\n2: one\n3: two=three\n4: four</code></pre>\n"
            },
            {
                "textRaw": "process.execPath",
                "name": "execPath",
                "desc": "<p>This is the absolute pathname of the executable that started the process.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>/usr/local/bin/node</code></pre>\n"
            },
            {
                "textRaw": "process.env",
                "name": "env",
                "desc": "<p>An object containing the user environment. See environ(7).\n\n\n</p>\n"
            },
            {
                "textRaw": "process.version",
                "name": "version",
                "desc": "<p>A compiled-in property that exposes <code>NODE_VERSION</code>.\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;Version: &apos; + process.version);</code></pre>\n"
            },
            {
                "textRaw": "process.versions",
                "name": "versions",
                "desc": "<p>A property exposing version strings of node and its dependencies.\n\n</p>\n<pre class='sh_javascript'><code>console.log(process.versions);</code></pre>\n<p>Will output:\n\n</p>\n<pre class='sh_javascript'><code>{ node: &apos;0.4.12&apos;,\n  v8: &apos;3.1.8.26&apos;,\n  ares: &apos;1.7.4&apos;,\n  ev: &apos;4.4&apos;,\n  openssl: &apos;1.0.0e-fips&apos; }</code></pre>\n"
            },
            {
                "textRaw": "process.config",
                "name": "config",
                "desc": "<p>An Object containing the JavaScript representation of the configure options\nthat were used to compile the current node executable. This is the same as\nthe &quot;config.gypi&quot; file that was produced when running the <code>./configure</code> script.\n\n</p>\n<p>An example of the possible output looks like:\n\n</p>\n<pre class='sh_javascript'><code>{ target_defaults:\n   { cflags: [],\n     default_configuration: &apos;Release&apos;,\n     defines: [],\n     include_dirs: [],\n     libraries: [] },\n  variables:\n   { host_arch: &apos;x64&apos;,\n     node_install_npm: &apos;true&apos;,\n     node_install_waf: &apos;true&apos;,\n     node_prefix: &apos;&apos;,\n     node_shared_v8: &apos;false&apos;,\n     node_shared_zlib: &apos;false&apos;,\n     node_use_dtrace: &apos;false&apos;,\n     node_use_openssl: &apos;true&apos;,\n     node_shared_openssl: &apos;false&apos;,\n     strict_aliasing: &apos;true&apos;,\n     target_arch: &apos;x64&apos;,\n     v8_use_snapshot: &apos;true&apos; } }</code></pre>\n"
            },
            {
                "textRaw": "process.pid",
                "name": "pid",
                "desc": "<p>The PID of the process.\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;This process is pid &apos; + process.pid);</code></pre>\n"
            },
            {
                "textRaw": "process.title",
                "name": "title",
                "desc": "<p>Getter/setter to set what is displayed in &apos;ps&apos;.\n\n\n</p>\n"
            },
            {
                "textRaw": "process.arch",
                "name": "arch",
                "desc": "<p>What processor architecture you&apos;re running on: <code>&apos;arm&apos;</code>, <code>&apos;ia32&apos;</code>, or <code>&apos;x64&apos;</code>.\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;This processor architecture is &apos; + process.arch);</code></pre>\n"
            },
            {
                "textRaw": "process.platform",
                "name": "platform",
                "desc": "<p>What platform you&apos;re running on:\n<code>&apos;darwin&apos;</code>, <code>&apos;freebsd&apos;</code>, <code>&apos;linux&apos;</code>, <code>&apos;solaris&apos;</code> or <code>&apos;win32&apos;</code>\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;This platform is &apos; + process.platform);</code></pre>\n"
            }
        ],
        "methods": [
            {
                "textRaw": "process.abort()",
                "type": "method",
                "name": "abort",
                "desc": "<p>This causes node to emit an abort. This will cause node to exit and\ngenerate a core file.\n\n</p>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            },
            {
                "textRaw": "process.chdir(directory)",
                "type": "method",
                "name": "chdir",
                "desc": "<p>Changes the current working directory of the process or throws an exception if that fails.\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;Starting directory: &apos; + process.cwd());\ntry {\n  process.chdir(&apos;/tmp&apos;);\n  console.log(&apos;New directory: &apos; + process.cwd());\n}\ncatch (err) {\n  console.log(&apos;chdir: &apos; + err);\n}</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "directory"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.cwd()",
                "type": "method",
                "name": "cwd",
                "desc": "<p>Returns the current working directory of the process.\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;Current directory: &apos; + process.cwd());</code></pre>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            },
            {
                "textRaw": "process.exit([code])",
                "type": "method",
                "name": "exit",
                "desc": "<p>Ends the process with the specified <code>code</code>.  If omitted, exit uses the\n&apos;success&apos; code <code>0</code>.\n\n</p>\n<p>To exit with a &apos;failure&apos; code:\n\n</p>\n<pre class='sh_javascript'><code>process.exit(1);</code></pre>\n<p>The shell that executed node should see the exit code as 1.\n\n\n</p>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "code",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.getgid()",
                "type": "method",
                "name": "getgid",
                "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Gets the group identity of the process. (See getgid(2).)\nThis is the numerical group id, not the group name.\n\n</p>\n<pre class='sh_javascript'><code>if (process.getgid) {\n  console.log(&apos;Current gid: &apos; + process.getgid());\n}</code></pre>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            },
            {
                "textRaw": "process.setgid(id)",
                "type": "method",
                "name": "setgid",
                "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the group identity of the process. (See setgid(2).)  This accepts either\na numerical ID or a groupname string. If a groupname is specified, this method\nblocks while resolving it to a numerical ID.\n\n</p>\n<pre class='sh_javascript'><code>if (process.getgid &amp;&amp; process.setgid) {\n  console.log(&apos;Current gid: &apos; + process.getgid());\n  try {\n    process.setgid(501);\n    console.log(&apos;New gid: &apos; + process.getgid());\n  }\n  catch (err) {\n    console.log(&apos;Failed to set gid: &apos; + err);\n  }\n}</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "id"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.getuid()",
                "type": "method",
                "name": "getuid",
                "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Gets the user identity of the process. (See getuid(2).)\nThis is the numerical userid, not the username.\n\n</p>\n<pre class='sh_javascript'><code>if (process.getuid) {\n  console.log(&apos;Current uid: &apos; + process.getuid());\n}</code></pre>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            },
            {
                "textRaw": "process.setuid(id)",
                "type": "method",
                "name": "setuid",
                "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the user identity of the process. (See setuid(2).)  This accepts either\na numerical ID or a username string.  If a username is specified, this method\nblocks while resolving it to a numerical ID.\n\n</p>\n<pre class='sh_javascript'><code>if (process.getuid &amp;&amp; process.setuid) {\n  console.log(&apos;Current uid: &apos; + process.getuid());\n  try {\n    process.setuid(501);\n    console.log(&apos;New uid: &apos; + process.getuid());\n  }\n  catch (err) {\n    console.log(&apos;Failed to set uid: &apos; + err);\n  }\n}</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "id"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.kill(pid, [signal])",
                "type": "method",
                "name": "kill",
                "desc": "<p>Send a signal to a process. <code>pid</code> is the process id and <code>signal</code> is the\nstring describing the signal to send.  Signal names are strings like\n&apos;SIGINT&apos; or &apos;SIGUSR1&apos;.  If omitted, the signal will be &apos;SIGTERM&apos;.\nSee kill(2) for more information.\n\n</p>\n<p>Note that just because the name of this function is <code>process.kill</code>, it is\nreally just a signal sender, like the <code>kill</code> system call.  The signal sent\nmay do something other than kill the target process.\n\n</p>\n<p>Example of sending a signal to yourself:\n\n</p>\n<pre class='sh_javascript'><code>process.on(&apos;SIGHUP&apos;, function () {\n  console.log(&apos;Got SIGHUP signal.&apos;);\n});\n\nsetTimeout(function () {\n  console.log(&apos;Exiting.&apos;);\n  process.exit(0);\n}, 100);\n\nprocess.kill(process.pid, &apos;SIGHUP&apos;);</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "pid"
                            },
                            {
                                "name": "signal",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.memoryUsage()",
                "type": "method",
                "name": "memoryUsage",
                "desc": "<p>Returns an object describing the memory usage of the Node process\nmeasured in bytes.\n\n</p>\n<pre class='sh_javascript'><code>var util = require(&apos;util&apos;);\n\nconsole.log(util.inspect(process.memoryUsage()));</code></pre>\n<p>This will generate:\n\n</p>\n<pre class='sh_javascript'><code>{ rss: 4935680,\n  heapTotal: 1826816,\n  heapUsed: 650472 }</code></pre>\n<p><code>heapTotal</code> and <code>heapUsed</code> refer to V8&apos;s memory usage.\n\n\n</p>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            },
            {
                "textRaw": "process.nextTick(callback)",
                "type": "method",
                "name": "nextTick",
                "desc": "<p>On the next loop around the event loop call this callback.\nThis is <em>not</em> a simple alias to <code>setTimeout(fn, 0)</code>, it&apos;s much more\nefficient.\n\n</p>\n<pre class='sh_javascript'><code>process.nextTick(function () {\n  console.log(&apos;nextTick callback&apos;);\n});</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "callback"
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.umask([mask])",
                "type": "method",
                "name": "umask",
                "desc": "<p>Sets or reads the process&apos;s file mode creation mask. Child processes inherit\nthe mask from the parent process. Returns the old mask if <code>mask</code> argument is\ngiven, otherwise returns the current mask.\n\n</p>\n<pre class='sh_javascript'><code>var oldmask, newmask = 0644;\n\noldmask = process.umask(newmask);\nconsole.log(&apos;Changed umask from: &apos; + oldmask.toString(8) +\n            &apos; to &apos; + newmask.toString(8));</code></pre>\n",
                "signatures": [
                    {
                        "params": [
                            {
                                "name": "mask",
                                "optional": true
                            }
                        ]
                    }
                ]
            },
            {
                "textRaw": "process.uptime()",
                "type": "method",
                "name": "uptime",
                "desc": "<p>Number of seconds Node has been running.\n\n\n</p>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            },
            {
                "textRaw": "process.hrtime()",
                "type": "method",
                "name": "hrtime",
                "desc": "<p>Returns the current high-resolution real time in a <code>[seconds, nanoseconds]</code>\ntuple Array. It is relative to an arbitrary time in the past. It is not\nrelated to the time of day and therefore not subject to clock drift. The\nprimary use is for measuring performance between intervals.\n\n</p>\n<p>You may pass in the result of a previous call to <code>process.hrtime()</code> to get\na diff reading, useful for benchmarks and measuring intervals:\n\n</p>\n<pre class='sh_javascript'><code>var t = process.hrtime();\n// [ 1800216, 927643717 ]\n\nsetTimeout(function () {\n  t = process.hrtime(t);\n  // [ 1, 6962306 ]\n\n  console.log(&apos;benchmark took %d seconds and %d nanoseconds&apos;, t[0], t[1]);\n  // benchmark took 1 seconds and 6962306 nanoseconds\n}, 1000);</code></pre>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            }
        ]
    }
],
    "vars": [
    {
        "textRaw": "require()",
        "type": "var",
        "name": "require",
        "desc": "<p>To require modules. See the [Modules][] section.  <code>require</code> isn&apos;t actually a\nglobal but rather local to each module.\n\n</p>\n",
        "methods": [
            {
                "textRaw": "require.resolve()",
                "type": "method",
                "name": "resolve",
                "desc": "<p>Use the internal <code>require()</code> machinery to look up the location of a module,\nbut rather than loading the module, just return the resolved filename.\n\n</p>\n",
                "signatures": [
                    {
                        "params": []
                    }
                ]
            }
        ],
        "properties": [
            {
                "textRaw": "`cache` {Object} ",
                "name": "cache",
                "desc": "<p>Modules are cached in this object when they are required. By deleting a key\nvalue from this object, the next <code>require</code> will reload the module.\n\n</p>\n"
            },
            {
                "textRaw": "`extensions` {Array} ",
                "name": "extensions",
                "desc": "<p>Instruct <code>require</code> on how to handle certain file extensions.\n\n</p>\n<p>Process files with the extension <code>.sjs</code> as <code>.js</code>:\n\n</p>\n<pre class='sh_javascript'><code>require.extensions[&apos;.sjs&apos;] = require.extensions[&apos;.js&apos;];</code></pre>\n<p>Write your own extension handler:\n\n</p>\n<pre class='sh_javascript'><code>require.extensions[&apos;.sjs&apos;] = function(module, filename) {\n  var content = fs.readFileSync(filename, &apos;utf8&apos;);\n  // Parse the file content and give to module.exports\n  module.exports = content;\n};</code></pre>\n"
            }
        ]
    },
    {
        "textRaw": "__filename",
        "name": "__filename",
        "type": "var",
        "desc": "<p>The filename of the code being executed.  This is the resolved absolute path\nof this code file.  For a main program this is not necessarily the same\nfilename used in the command line.  The value inside a module is the path\nto that module file.\n\n</p>\n<p>Example: running <code>node example.js</code> from <code>/Users/mjr</code>\n\n</p>\n<pre class='sh_javascript'><code>console.log(__filename);\n// /Users/mjr/example.js</code></pre>\n<p><code>__filename</code> isn&apos;t actually a global but rather local to each module.\n\n</p>\n"
    },
    {
        "textRaw": "__dirname",
        "name": "__dirname",
        "type": "var",
        "desc": "<p>The name of the directory that the currently executing script resides in.\n\n</p>\n<p>Example: running <code>node example.js</code> from <code>/Users/mjr</code>\n\n</p>\n<pre class='sh_javascript'><code>console.log(__dirname);\n// /Users/mjr</code></pre>\n<p><code>__dirname</code> isn&apos;t actually a global but rather local to each module.\n\n\n</p>\n"
    },
    {
        "textRaw": "module",
        "name": "module",
        "type": "var",
        "desc": "<p>A reference to the current module. In particular\n<code>module.exports</code> is the same as the <code>exports</code> object.\n<code>module</code> isn&apos;t actually a global but rather local to each module.\n\n</p>\n<p>See the [module system documentation][] for more information.\n\n</p>\n"
    },
    {
        "textRaw": "exports",
        "name": "exports",
        "type": "var",
        "desc": "<p>An object which is shared between all instances of the current module and\nmade accessible through <code>require()</code>.\n<code>exports</code> is the same as the <code>module.exports</code> object.\n<code>exports</code> isn&apos;t actually a global but rather local to each module.\n\n</p>\n<p>See the [module system documentation][] for more information.\n\n</p>\n<p>See the [module section][] for more information.\n\n</p>\n"
    }
],
    "methods": [
    {
        "textRaw": "setTimeout(cb, ms)",
        "type": "method",
        "name": "setTimeout",
        "desc": "<p>Run callback <code>cb</code> after <em>at least</em> <code>ms</code> milliseconds. The actual delay depends\non external factors like OS timer granularity and system load.\n\n</p>\n<p>The timeout must be in the range of 1-2,147,483,647 inclusive. If the value is\noutside that range, it&apos;s changed to 1 millisecond. Broadly speaking, a timer\ncannot span more than 24.8 days.\n\n</p>\n<p>Returns an opaque value that represents the timer.\n\n</p>\n",
        "signatures": [
            {
                "params": [
                    {
                        "name": "cb"
                    },
                    {
                        "name": "ms"
                    }
                ]
            }
        ]
    },
    {
        "textRaw": "clearTimeout(t)",
        "type": "method",
        "name": "clearTimeout",
        "desc": "<p>Stop a timer that was previously created with <code>setTimeout()</code>. The callback will\nnot execute.\n\n</p>\n",
        "signatures": [
            {
                "params": [
                    {
                        "name": "t"
                    }
                ]
            }
        ]
    },
    {
        "textRaw": "setInterval(cb, ms)",
        "type": "method",
        "name": "setInterval",
        "desc": "<p>Run callback <code>cb</code> repeatedly every <code>ms</code> milliseconds. Note that the actual\ninterval may vary, depending on external factors like OS timer granularity and\nsystem load. It&apos;s never less than <code>ms</code> but it may be longer.\n\n</p>\n<p>The interval must be in the range of 1-2,147,483,647 inclusive. If the value is\noutside that range, it&apos;s changed to 1 millisecond. Broadly speaking, a timer\ncannot span more than 24.8 days.\n\n</p>\n<p>Returns an opaque value that represents the timer.\n\n</p>\n",
        "signatures": [
            {
                "params": [
                    {
                        "name": "cb"
                    },
                    {
                        "name": "ms"
                    }
                ]
            }
        ]
    }
]
}
});
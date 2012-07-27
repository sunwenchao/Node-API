define(function(require, exports, module) {
    module.exports = {
    "textRaw": "Child Process",
    "name": "child_process",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>Node provides a tri-directional <code>popen(3)</code> facility through the\n<code>child_process</code> module.\n\n</p>\n<p>It is possible to stream data through a child&apos;s <code>stdin</code>, <code>stdout</code>, and\n<code>stderr</code> in a fully non-blocking way.\n\n</p>\n<p>To create a child process use <code>require(&apos;child_process&apos;).spawn()</code> or\n<code>require(&apos;child_process&apos;).fork()</code>.  The semantics of each are slightly\ndifferent, and explained below.\n\n</p>\n",
    "classes": [
        {
            "textRaw": "Class: ChildProcess",
            "type": "class",
            "name": "ChildProcess",
            "desc": "<p><code>ChildProcess</code> is an [EventEmitter][].\n\n</p>\n<p>Child processes always have three streams associated with them. <code>child.stdin</code>,\n<code>child.stdout</code>, and <code>child.stderr</code>.  These may be shared with the stdio\nstreams of the parent process, or they may be separate stream objects\nwhich can be piped to and from.\n\n</p>\n<p>The ChildProcess class is not intended to be used directly.  Use the\n<code>spawn()</code> or <code>fork()</code> methods to create a Child Process instance.\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event:  'exit'",
                    "type": "event",
                    "name": "exit",
                    "params": [],
                    "desc": "<p>This event is emitted after the child process ends. If the process terminated\nnormally, <code>code</code> is the final exit code of the process, otherwise <code>null</code>. If\nthe process terminated due to receipt of a signal, <code>signal</code> is the string name\nof the signal, otherwise <code>null</code>.\n\n</p>\n<p>Note that the child process stdio streams might still be open.\n\n</p>\n<p>See <code>waitpid(2)</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "Event: 'close'",
                    "type": "event",
                    "name": "close",
                    "desc": "<p>This event is emitted when the stdio streams of a child process have all\nterminated.  This is distinct from &apos;exit&apos;, since multiple processes\nmight share the same stdio streams.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'disconnect'",
                    "type": "event",
                    "name": "disconnect",
                    "desc": "<p>This event is emitted after using the <code>.disconnect()</code> method in the parent or\nin the child. After disconnecting it is no longer possible to send messages.\nAn alternative way to check if you can send messages is to see if the\n<code>child.connected</code> property is <code>true</code>.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'message'",
                    "type": "event",
                    "name": "message",
                    "params": [],
                    "desc": "<p>Messages send by <code>.send(message, [sendHandle])</code> are obtained using the\n<code>message</code> event.\n\n</p>\n"
                }
            ],
            "properties": [
                {
                    "textRaw": "`stdin` {Stream object} ",
                    "name": "stdin",
                    "desc": "<p>A <code>Writable Stream</code> that represents the child process&apos;s <code>stdin</code>.\nClosing this stream via <code>end()</code> often causes the child process to terminate.\n\n</p>\n<p>If the child stdio streams are shared with the parent, then this will\nnot be set.\n\n</p>\n"
                },
                {
                    "textRaw": "`stdout` {Stream object} ",
                    "name": "stdout",
                    "desc": "<p>A <code>Readable Stream</code> that represents the child process&apos;s <code>stdout</code>.\n\n</p>\n<p>If the child stdio streams are shared with the parent, then this will\nnot be set.\n\n</p>\n"
                },
                {
                    "textRaw": "`stderr` {Stream object} ",
                    "name": "stderr",
                    "desc": "<p>A <code>Readable Stream</code> that represents the child process&apos;s <code>stderr</code>.\n\n</p>\n<p>If the child stdio streams are shared with the parent, then this will\nnot be set.\n\n</p>\n"
                },
                {
                    "textRaw": "`pid` {Integer} ",
                    "name": "pid",
                    "desc": "<p>The PID of the child process.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var spawn = require(&apos;child_process&apos;).spawn,\n    grep  = spawn(&apos;grep&apos;, [&apos;ssh&apos;]);\n\nconsole.log(&apos;Spawned child pid: &apos; + grep.pid);\ngrep.stdin.end();</code></pre>\n"
                }
            ],
            "methods": [
                {
                    "textRaw": "child.kill([signal])",
                    "type": "method",
                    "name": "kill",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`signal` {String} ",
                                    "name": "signal",
                                    "type": "String",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "signal",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Send a signal to the child process. If no argument is given, the process will\nbe sent <code>&apos;SIGTERM&apos;</code>. See <code>signal(7)</code> for a list of available signals.\n\n</p>\n<pre class='sh_javascript'><code>var spawn = require(&apos;child_process&apos;).spawn,\n    grep  = spawn(&apos;grep&apos;, [&apos;ssh&apos;]);\n\ngrep.on(&apos;exit&apos;, function (code, signal) {\n  console.log(&apos;child process terminated due to receipt of signal &apos;+signal);\n});\n\n// send SIGHUP to process\ngrep.kill(&apos;SIGHUP&apos;);</code></pre>\n<p>Note that while the function is called <code>kill</code>, the signal delivered to the child\nprocess may not actually kill it.  <code>kill</code> really just sends a signal to a process.\n\n</p>\n<p>See <code>kill(2)</code>\n\n</p>\n"
                },
                {
                    "textRaw": "child.send(message, [sendHandle])",
                    "type": "method",
                    "name": "send",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`message` {Object} ",
                                    "name": "message",
                                    "type": "Object"
                                },
                                {
                                    "textRaw": "`sendHandle` {Handle object} ",
                                    "name": "sendHandle",
                                    "type": "Handle object",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "message"
                                },
                                {
                                    "name": "sendHandle",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>When using <code>child_process.fork()</code> you can write to the child using\n<code>child.send(message, [sendHandle])</code> and messages are received by\na <code>&apos;message&apos;</code> event on the child.\n\n</p>\n<p>For example:\n\n</p>\n<pre class='sh_javascript'><code>var cp = require(&apos;child_process&apos;);\n\nvar n = cp.fork(__dirname + &apos;/sub.js&apos;);\n\nn.on(&apos;message&apos;, function(m) {\n  console.log(&apos;PARENT got message:&apos;, m);\n});\n\nn.send({ hello: &apos;world&apos; });</code></pre>\n<p>And then the child script, <code>&apos;sub.js&apos;</code> might look like this:\n\n</p>\n<pre class='sh_javascript'><code>process.on(&apos;message&apos;, function(m) {\n  console.log(&apos;CHILD got message:&apos;, m);\n});\n\nprocess.send({ foo: &apos;bar&apos; });</code></pre>\n<p>In the child the <code>process</code> object will have a <code>send()</code> method, and <code>process</code>\nwill emit objects each time it receives a message on its channel.\n\n</p>\n<p>There is a special case when sending a <code>{cmd: &apos;NODE_foo&apos;}</code> message. All messages\ncontaining a <code>NODE_</code> prefix in its <code>cmd</code> property will not be emitted in\nthe <code>message</code> event, since they are internal messages used by node core.\nMessages containing the prefix are emitted in the <code>internalMessage</code> event, you\nshould by all means avoid using this feature, it is subject to change without notice.\n\n</p>\n<p>The <code>sendHandle</code> option to <code>child.send()</code> is for sending a TCP server or\nsocket object to another process. The child will receive the object as its\nsecond argument to the <code>message</code> event.\n\n</p>\n<p><strong>send server object</strong>\n\n</p>\n<p>Here is an example of sending a server:\n\n</p>\n<pre class='sh_javascript'><code>var child = require(&apos;child_process&apos;).fork(&apos;child.js&apos;);\n\n// Open up the server object and send the handle.\nvar server = require(&apos;net&apos;).createServer();\nserver.on(&apos;connection&apos;, function (socket) {\n  socket.end(&apos;handled by parent&apos;);\n});\nserver.listen(1337, function() {\n  child.send(&apos;server&apos;, server);\n});</code></pre>\n<p>And the child would the recive the server object as:\n\n</p>\n<pre class='sh_javascript'><code>process.on(&apos;message&apos;, function(m, server) {\n  if (m === &apos;server&apos;) {\n    server.on(&apos;connection&apos;, function (socket) {\n      socket.end(&apos;handled by child&apos;);\n    });\n  }\n});</code></pre>\n<p>Note that the server is now shared between the parent and child, this means\nthat some connections will be handled by the parent and some by the child.\n\n</p>\n<p><strong>send socket object</strong>\n\n</p>\n<p>Here is an example of sending a socket. It will spawn two childs and handle\nconnections with the remote address <code>74.125.127.100</code> as VIP by sending the\nsocket to a &quot;special&quot; child process. Other sockets will go to a &quot;normal&quot; process.\n\n</p>\n<pre class='sh_javascript'><code>var normal = require(&apos;child_process&apos;).fork(&apos;child.js&apos;, [&apos;normal&apos;]);\nvar special = require(&apos;child_process&apos;).fork(&apos;child.js&apos;, [&apos;special&apos;]);\n\n// Open up the server and send sockets to child\nvar server = require(&apos;net&apos;).createServer();\nserver.on(&apos;connection&apos;, function (socket) {\n\n  // if this is a VIP\n  if (socket.remoteAddress === &apos;74.125.127.100&apos;) {\n    special.send(&apos;socket&apos;, socket);\n    return;\n  }\n  // just the usual dudes\n  normal.send(&apos;socket&apos;, socket);\n});\nserver.listen(1337);</code></pre>\n<p>The <code>child.js</code> could look like this:\n\n</p>\n<pre class='sh_javascript'><code>process.on(&apos;message&apos;, function(m, socket) {\n  if (m === &apos;socket&apos;) {\n    socket.end(&apos;You where handled as a &apos; + process.argv[2] + &apos; person&apos;);\n  }\n});</code></pre>\n<p>Note that once a single socket has been sent to a child the parent can no\nlonger keep track of when the socket is destroyed. To indicate this condition\nthe <code>.connections</code> property becomes <code>null</code>.\nIt is also recomended not to use <code>.maxConnections</code> in this condition.\n\n</p>\n"
                },
                {
                    "textRaw": "child.disconnect()",
                    "type": "method",
                    "name": "disconnect",
                    "desc": "<p>To close the IPC connection between parent and child use the\n<code>child.disconnect()</code> method. This allows the child to exit gracefully since\nthere is no IPC channel keeping it alive. When calling this method the\n<code>disconnect</code> event will be emitted in both parent and child, and the\n<code>connected</code> flag will be set to <code>false</code>. Please note that you can also call\n<code>process.disconnect()</code> in the child process.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                }
            ]
        }
    ],
    "methods": [
        {
            "textRaw": "child_process.spawn(command, [args], [options])",
            "type": "method",
            "name": "spawn",
            "signatures": [
                {
                    "return": {
                        "textRaw": "return: {ChildProcess object} ",
                        "name": "return",
                        "type": "ChildProcess object"
                    },
                    "params": [
                        {
                            "textRaw": "`command` {String} The command to run ",
                            "name": "command",
                            "type": "String",
                            "desc": "The command to run"
                        },
                        {
                            "textRaw": "`args` {Array} List of string arguments ",
                            "name": "args",
                            "type": "Array",
                            "desc": "List of string arguments",
                            "optional": true
                        },
                        {
                            "textRaw": "`options` {Object} ",
                            "options": [
                                {
                                    "textRaw": "`cwd` {String} Current working directory of the child process ",
                                    "name": "cwd",
                                    "type": "String",
                                    "desc": "Current working directory of the child process"
                                },
                                {
                                    "textRaw": "`stdio` {Array|String} Child's stdio configuration. (See below) ",
                                    "name": "stdio",
                                    "type": "Array|String",
                                    "desc": "Child's stdio configuration. (See below)"
                                },
                                {
                                    "textRaw": "`customFds` {Array} **Deprecated** File descriptors for the child to use for stdio.  (See below) ",
                                    "name": "customFds",
                                    "type": "Array",
                                    "desc": "**Deprecated** File descriptors for the child to use for stdio.  (See below)"
                                },
                                {
                                    "textRaw": "`env` {Object} Environment key-value pairs ",
                                    "name": "env",
                                    "type": "Object",
                                    "desc": "Environment key-value pairs"
                                },
                                {
                                    "textRaw": "`detached` {Boolean} The child will be a process group leader.  (See below) ",
                                    "name": "detached",
                                    "type": "Boolean",
                                    "desc": "The child will be a process group leader.  (See below)"
                                }
                            ],
                            "name": "options",
                            "type": "Object",
                            "optional": true
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "command"
                        },
                        {
                            "name": "args",
                            "optional": true
                        },
                        {
                            "name": "options",
                            "optional": true
                        }
                    ]
                }
            ],
            "desc": "<p>Launches a new process with the given <code>command</code>, with  command line arguments in <code>args</code>.\nIf omitted, <code>args</code> defaults to an empty Array.\n\n</p>\n<p>The third argument is used to specify additional options, which defaults to:\n\n</p>\n<pre class='sh_javascript'><code>{ cwd: undefined,\n  env: process.env\n}</code></pre>\n<p><code>cwd</code> allows you to specify the working directory from which the process is spawned.\nUse <code>env</code> to specify environment variables that will be visible to the new process.\n\n</p>\n<p>Example of running <code>ls -lh /usr</code>, capturing <code>stdout</code>, <code>stderr</code>, and the exit code:\n\n</p>\n<pre class='sh_javascript'><code>var util  = require(&apos;util&apos;),\n    spawn = require(&apos;child_process&apos;).spawn,\n    ls    = spawn(&apos;ls&apos;, [&apos;-lh&apos;, &apos;/usr&apos;]);\n\nls.stdout.on(&apos;data&apos;, function (data) {\n  console.log(&apos;stdout: &apos; + data);\n});\n\nls.stderr.on(&apos;data&apos;, function (data) {\n  console.log(&apos;stderr: &apos; + data);\n});\n\nls.on(&apos;exit&apos;, function (code) {\n  console.log(&apos;child process exited with code &apos; + code);\n});</code></pre>\n<p>Example: A very elaborate way to run &apos;ps ax | grep ssh&apos;\n\n</p>\n<pre class='sh_javascript'><code>var util  = require(&apos;util&apos;),\n    spawn = require(&apos;child_process&apos;).spawn,\n    ps    = spawn(&apos;ps&apos;, [&apos;ax&apos;]),\n    grep  = spawn(&apos;grep&apos;, [&apos;ssh&apos;]);\n\nps.stdout.on(&apos;data&apos;, function (data) {\n  grep.stdin.write(data);\n});\n\nps.stderr.on(&apos;data&apos;, function (data) {\n  console.log(&apos;ps stderr: &apos; + data);\n});\n\nps.on(&apos;exit&apos;, function (code) {\n  if (code !== 0) {\n    console.log(&apos;ps process exited with code &apos; + code);\n  }\n  grep.stdin.end();\n});\n\ngrep.stdout.on(&apos;data&apos;, function (data) {\n  console.log(&apos;&apos; + data);\n});\n\ngrep.stderr.on(&apos;data&apos;, function (data) {\n  console.log(&apos;grep stderr: &apos; + data);\n});\n\ngrep.on(&apos;exit&apos;, function (code) {\n  if (code !== 0) {\n    console.log(&apos;grep process exited with code &apos; + code);\n  }\n});</code></pre>\n<p>Example of checking for failed exec:\n\n</p>\n<pre class='sh_javascript'><code>var spawn = require(&apos;child_process&apos;).spawn,\n    child = spawn(&apos;bad_command&apos;);\n\nchild.stderr.setEncoding(&apos;utf8&apos;);\nchild.stderr.on(&apos;data&apos;, function (data) {\n  if (/^execvp\\(\\)/.test(data)) {\n    console.log(&apos;Failed to start child process.&apos;);\n  }\n});</code></pre>\n<p>Note that if spawn receives an empty options object, it will result in\nspawning the process with an empty environment rather than using\n<code>process.env</code>. This due to backwards compatibility issues with a deprecated\nAPI.\n\n</p>\n<p>The &apos;stdio&apos; option to <code>child_process.spawn()</code> is an array where each\nindex corresponds to a fd in the child.  The value is one of the following:\n\n</p>\n<ol>\n<li><code>&apos;pipe&apos;</code> - Create a pipe between the child process and the parent process.\nThe parent end of the pipe is exposed to the parent as a property on the\n<code>child_process</code> object as <code>ChildProcess.stdio[fd]</code>. Pipes created for\nfds 0 - 2 are also available as ChildProcess.stdin, ChildProcess.stdout\nand ChildProcess.stderr, respectively.</li>\n<li><code>&apos;ipc&apos;</code> - Create an IPC channel for passing messages/file descriptors\nbetween parent and child. A ChildProcess may have at most <em>one</em> IPC stdio\nfile descriptor. Setting this option enables the ChildProcess.send() method.\nIf the child writes JSON messages to this file descriptor, then this will\ntrigger ChildProcess.on(&apos;message&apos;).  If the child is a Node.js program, then\nthe presence of an IPC channel will enable process.send() and\nprocess.on(&apos;message&apos;).</li>\n<li><code>&apos;ignore&apos;</code> - Do not set this file descriptor in the child. Note that Node\nwill always open fd 0 - 2 for the processes it spawns. When any of these is\nignored node will open <code>/dev/null</code> and attach it to the child&apos;s fd.</li>\n<li><code>Stream</code> object - Share a readable or writable stream that refers to a tty,\nfile, socket, or a pipe with the child process. The stream&apos;s underlying\nfile descriptor is duplicated in the child process to the fd that \ncorresponds to the index in the <code>stdio</code> array.</li>\n<li>Positive integer - The integer value is interpreted as a file descriptor \nthat is is currently open in the parent process. It is shared with the child\nprocess, similar to how <code>Stream</code> objects can be shared.</li>\n<li><code>null</code>, <code>undefined</code> - Use default value. For stdio fds 0, 1 and 2 (in other\nwords, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, the\ndefault is <code>&apos;ignore&apos;</code>.</li>\n</ol>\n<p>As a shorthand, the <code>stdio</code> argument may also be one of the following\nstrings, rather than an array:\n\n</p>\n<ul>\n<li><code>ignore</code> - <code>[&apos;ignore&apos;, &apos;ignore&apos;, &apos;ignore&apos;]</code></li>\n<li><code>pipe</code> - <code>[&apos;pipe&apos;, &apos;pipe&apos;, &apos;pipe&apos;]</code></li>\n<li><code>inherit</code> - <code>[process.stdin, process.stdout, process.stderr]</code> or <code>[0,1,2]</code></li>\n</ul>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var spawn = require(&apos;child_process&apos;).spawn;\n\n// Child will use parent&apos;s stdios\nspawn(&apos;prg&apos;, [], { stdio: &apos;inherit&apos; });\n\n// Spawn child sharing only stderr\nspawn(&apos;prg&apos;, [], { stdio: [&apos;pipe&apos;, &apos;pipe&apos;, process.stderr] });\n\n// Open an extra fd=4, to interact with programs present a\n// startd-style interface.\nspawn(&apos;prg&apos;, [], { stdio: [&apos;pipe&apos;, null, null, null, &apos;pipe&apos;] });</code></pre>\n<p>If the <code>detached</code> option is set, the child process will be made the leader of a\nnew process group.  This makes it possible for the child to continue running \nafter the parent exits.\n\n</p>\n<p>By default, the parent will wait for the detached child to exit.  To prevent\nthe parent from waiting for a given <code>child</code>, use the <code>child.unref()</code> method,\nand the parent&apos;s event loop will not include the child in its reference count.\n\n</p>\n<p>Example of detaching a long-running process and redirecting its output to a\nfile:\n\n</p>\n<pre class='sh_javascript'><code> var fs = require(&apos;fs&apos;),\n     spawn = require(&apos;child_process&apos;).spawn,\n     out = fs.openSync(&apos;./out.log&apos;, &apos;a&apos;),\n     err = fs.openSync(&apos;./out.log&apos;, &apos;a&apos;);\n\n var child = spawn(&apos;prg&apos;, [], {\n   detached: true,\n   stdio: [ &apos;ignore&apos;, out, err ]\n });\n\n child.unref();</code></pre>\n<p>When using the <code>detached</code> option to start a long-running process, the process\nwill not stay running in the background unless it is provided with a <code>stdio</code>\nconfiguration that is not connected to the parent.  If the parent&apos;s <code>stdio</code> is\ninherited, the child will remain attached to the controlling terminal.\n\n</p>\n<p>There is a deprecated option called <code>customFds</code> which allows one to specify\nspecific file descriptors for the stdio of the child process. This API was\nnot portable to all platforms and therefore removed.\nWith <code>customFds</code> it was possible to hook up the new process&apos; <code>[stdin, stdout,\nstderr]</code> to existing streams; <code>-1</code> meant that a new stream should be created.\nUse at your own risk.\n\n</p>\n<p>There are several internal options. In particular <code>stdinStream</code>,\n<code>stdoutStream</code>, <code>stderrStream</code>. They are for INTERNAL USE ONLY. As with all\nundocumented APIs in Node, they should not be used.\n\n</p>\n<p>See also: <code>child_process.exec()</code> and <code>child_process.fork()</code>\n\n</p>\n"
        },
        {
            "textRaw": "child_process.exec(command, [options], callback)",
            "type": "method",
            "name": "exec",
            "signatures": [
                {
                    "return": {
                        "textRaw": "Return: ChildProcess object ",
                        "name": "return",
                        "desc": "ChildProcess object"
                    },
                    "params": [
                        {
                            "textRaw": "`command` {String} The command to run, with space-separated arguments ",
                            "name": "command",
                            "type": "String",
                            "desc": "The command to run, with space-separated arguments"
                        },
                        {
                            "textRaw": "`options` {Object} ",
                            "options": [
                                {
                                    "textRaw": "`cwd` {String} Current working directory of the child process ",
                                    "name": "cwd",
                                    "type": "String",
                                    "desc": "Current working directory of the child process"
                                },
                                {
                                    "textRaw": "`stdio` {Array|String} Child's stdio configuration. (See above) ",
                                    "name": "stdio",
                                    "type": "Array|String",
                                    "desc": "Child's stdio configuration. (See above)"
                                },
                                {
                                    "textRaw": "`customFds` {Array} **Deprecated** File descriptors for the child to use for stdio.  (See above) ",
                                    "name": "customFds",
                                    "type": "Array",
                                    "desc": "**Deprecated** File descriptors for the child to use for stdio.  (See above)"
                                },
                                {
                                    "textRaw": "`env` {Object} Environment key-value pairs ",
                                    "name": "env",
                                    "type": "Object",
                                    "desc": "Environment key-value pairs"
                                },
                                {
                                    "textRaw": "`encoding` {String} (Default: 'utf8') ",
                                    "name": "encoding",
                                    "default": "utf8",
                                    "type": "String"
                                },
                                {
                                    "textRaw": "`timeout` {Number} (Default: 0) ",
                                    "name": "timeout",
                                    "default": "0",
                                    "type": "Number"
                                },
                                {
                                    "textRaw": "`maxBuffer` {Number} (Default: 200*1024) ",
                                    "name": "maxBuffer",
                                    "default": "200*1024",
                                    "type": "Number"
                                },
                                {
                                    "textRaw": "`killSignal` {String} (Default: 'SIGTERM') ",
                                    "name": "killSignal",
                                    "default": "SIGTERM",
                                    "type": "String"
                                }
                            ],
                            "name": "options",
                            "type": "Object",
                            "optional": true
                        },
                        {
                            "textRaw": "`callback` {Function} called with the output when process terminates ",
                            "options": [
                                {
                                    "textRaw": "`error` {Error} ",
                                    "name": "error",
                                    "type": "Error"
                                },
                                {
                                    "textRaw": "`stdout` {Buffer} ",
                                    "name": "stdout",
                                    "type": "Buffer"
                                },
                                {
                                    "textRaw": "`stderr` {Buffer} ",
                                    "name": "stderr",
                                    "type": "Buffer"
                                }
                            ],
                            "name": "callback",
                            "type": "Function",
                            "desc": "called with the output when process terminates"
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "command"
                        },
                        {
                            "name": "options",
                            "optional": true
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ],
            "desc": "<p>Runs a command in a shell and buffers the output.\n\n</p>\n<pre class='sh_javascript'><code>var util = require(&apos;util&apos;),\n    exec = require(&apos;child_process&apos;).exec,\n    child;\n\nchild = exec(&apos;cat *.js bad_file | wc -l&apos;,\n  function (error, stdout, stderr) {\n    console.log(&apos;stdout: &apos; + stdout);\n    console.log(&apos;stderr: &apos; + stderr);\n    if (error !== null) {\n      console.log(&apos;exec error: &apos; + error);\n    }\n});</code></pre>\n<p>The callback gets the arguments <code>(error, stdout, stderr)</code>. On success, <code>error</code>\nwill be <code>null</code>.  On error, <code>error</code> will be an instance of <code>Error</code> and <code>err.code</code>\nwill be the exit code of the child process, and <code>err.signal</code> will be set to the\nsignal that terminated the process.\n\n</p>\n<p>There is a second optional argument to specify several options. The\ndefault options are\n\n</p>\n<pre class='sh_javascript'><code>{ encoding: &apos;utf8&apos;,\n  timeout: 0,\n  maxBuffer: 200*1024,\n  killSignal: &apos;SIGTERM&apos;,\n  cwd: null,\n  env: null }</code></pre>\n<p>If <code>timeout</code> is greater than 0, then it will kill the child process\nif it runs longer than <code>timeout</code> milliseconds. The child process is killed with\n<code>killSignal</code> (default: <code>&apos;SIGTERM&apos;</code>). <code>maxBuffer</code> specifies the largest\namount of data allowed on stdout or stderr - if this value is exceeded then\nthe child process is killed.\n\n\n</p>\n"
        },
        {
            "textRaw": "child_process.execFile(file, args, options, callback)",
            "type": "method",
            "name": "execFile",
            "signatures": [
                {
                    "return": {
                        "textRaw": "Return: ChildProcess object ",
                        "name": "return",
                        "desc": "ChildProcess object"
                    },
                    "params": [
                        {
                            "textRaw": "`file` {String} The filename of the program to run ",
                            "name": "file",
                            "type": "String",
                            "desc": "The filename of the program to run"
                        },
                        {
                            "textRaw": "`args` {Array} List of string arguments ",
                            "name": "args",
                            "type": "Array",
                            "desc": "List of string arguments"
                        },
                        {
                            "textRaw": "`options` {Object} ",
                            "options": [
                                {
                                    "textRaw": "`cwd` {String} Current working directory of the child process ",
                                    "name": "cwd",
                                    "type": "String",
                                    "desc": "Current working directory of the child process"
                                },
                                {
                                    "textRaw": "`stdio` {Array|String} Child's stdio configuration. (See above) ",
                                    "name": "stdio",
                                    "type": "Array|String",
                                    "desc": "Child's stdio configuration. (See above)"
                                },
                                {
                                    "textRaw": "`customFds` {Array} **Deprecated** File descriptors for the child to use for stdio.  (See above) ",
                                    "name": "customFds",
                                    "type": "Array",
                                    "desc": "**Deprecated** File descriptors for the child to use for stdio.  (See above)"
                                },
                                {
                                    "textRaw": "`env` {Object} Environment key-value pairs ",
                                    "name": "env",
                                    "type": "Object",
                                    "desc": "Environment key-value pairs"
                                },
                                {
                                    "textRaw": "`encoding` {String} (Default: 'utf8') ",
                                    "name": "encoding",
                                    "default": "utf8",
                                    "type": "String"
                                },
                                {
                                    "textRaw": "`timeout` {Number} (Default: 0) ",
                                    "name": "timeout",
                                    "default": "0",
                                    "type": "Number"
                                },
                                {
                                    "textRaw": "`maxBuffer` {Number} (Default: 200\\*1024) ",
                                    "name": "maxBuffer",
                                    "default": "200\\*1024",
                                    "type": "Number"
                                },
                                {
                                    "textRaw": "`killSignal` {String} (Default: 'SIGTERM') ",
                                    "name": "killSignal",
                                    "default": "SIGTERM",
                                    "type": "String"
                                }
                            ],
                            "name": "options",
                            "type": "Object"
                        },
                        {
                            "textRaw": "`callback` {Function} called with the output when process terminates ",
                            "options": [
                                {
                                    "textRaw": "`error` {Error} ",
                                    "name": "error",
                                    "type": "Error"
                                },
                                {
                                    "textRaw": "`stdout` {Buffer} ",
                                    "name": "stdout",
                                    "type": "Buffer"
                                },
                                {
                                    "textRaw": "`stderr` {Buffer} ",
                                    "name": "stderr",
                                    "type": "Buffer"
                                }
                            ],
                            "name": "callback",
                            "type": "Function",
                            "desc": "called with the output when process terminates"
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "file"
                        },
                        {
                            "name": "args"
                        },
                        {
                            "name": "options"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ],
            "desc": "<p>This is similar to <code>child_process.exec()</code> except it does not execute a\nsubshell but rather the specified file directly. This makes it slightly\nleaner than <code>child_process.exec</code>. It has the same options.\n\n\n</p>\n"
        },
        {
            "textRaw": "child\\_process.fork(modulePath, [args], [options])",
            "type": "method",
            "name": "fork",
            "signatures": [
                {
                    "return": {
                        "textRaw": "Return: ChildProcess object ",
                        "name": "return",
                        "desc": "ChildProcess object"
                    },
                    "params": [
                        {
                            "textRaw": "`modulePath` {String} The module to run in the child ",
                            "name": "modulePath",
                            "type": "String",
                            "desc": "The module to run in the child"
                        },
                        {
                            "textRaw": "`args` {Array} List of string arguments ",
                            "name": "args",
                            "type": "Array",
                            "desc": "List of string arguments",
                            "optional": true
                        },
                        {
                            "textRaw": "`options` {Object} ",
                            "options": [
                                {
                                    "textRaw": "`cwd` {String} Current working directory of the child process ",
                                    "name": "cwd",
                                    "type": "String",
                                    "desc": "Current working directory of the child process"
                                },
                                {
                                    "textRaw": "`env` {Object} Environment key-value pairs ",
                                    "name": "env",
                                    "type": "Object",
                                    "desc": "Environment key-value pairs"
                                },
                                {
                                    "textRaw": "`encoding` {String} (Default: 'utf8') ",
                                    "name": "encoding",
                                    "default": "utf8",
                                    "type": "String"
                                },
                                {
                                    "textRaw": "`timeout` {Number} (Default: 0) ",
                                    "name": "timeout",
                                    "default": "0",
                                    "type": "Number"
                                }
                            ],
                            "name": "options",
                            "type": "Object",
                            "optional": true
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "modulePath"
                        },
                        {
                            "name": "args",
                            "optional": true
                        },
                        {
                            "name": "options",
                            "optional": true
                        }
                    ]
                }
            ],
            "desc": "<p>This is a special case of the <code>spawn()</code> functionality for spawning Node\nprocesses. In addition to having all the methods in a normal ChildProcess\ninstance, the returned object has a communication channel built-in. See\n<code>child.send(message, [sendHandle])</code> for details.\n\n</p>\n<p>By default the spawned Node process will have the stdout, stderr associated\nwith the parent&apos;s. To change this behavior set the <code>silent</code> property in the\n<code>options</code> object to <code>true</code>.\n\n</p>\n<p>These child Nodes are still whole new instances of V8. Assume at least 30ms\nstartup and 10mb memory for each new Node. That is, you cannot create many\nthousands of them.\n\n</p>\n"
        }
    ],
    "type": "module",
    "displayName": "Child Process"
}
});
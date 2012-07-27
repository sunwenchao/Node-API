define(function(require, exports, module) {
    module.exports = {
    "textRaw": "HTTP",
    "name": "http",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>To use the HTTP server and client one must <code>require(&apos;http&apos;)</code>.\n\n</p>\n<p>The HTTP interfaces in Node are designed to support many features\nof the protocol which have been traditionally difficult to use.\nIn particular, large, possibly chunk-encoded, messages. The interface is\ncareful to never buffer entire requests or responses--the\nuser is able to stream data.\n\n</p>\n<p>HTTP message headers are represented by an object like this:\n\n</p>\n<pre class='sh_javascript'><code>{ &apos;content-length&apos;: &apos;123&apos;,\n  &apos;content-type&apos;: &apos;text/plain&apos;,\n  &apos;connection&apos;: &apos;keep-alive&apos;,\n  &apos;accept&apos;: &apos;*/*&apos; }</code></pre>\n<p>Keys are lowercased. Values are not modified.\n\n</p>\n<p>In order to support the full spectrum of possible HTTP applications, Node&apos;s\nHTTP API is very low-level. It deals with stream handling and message\nparsing only. It parses a message into headers and body but it does not\nparse the actual headers or the body.\n\n\n</p>\n",
    "properties": [
        {
            "textRaw": "`STATUS_CODES` {Object} ",
            "name": "STATUS_CODES",
            "desc": "<p>A collection of all the standard HTTP response status codes, and the\nshort description of each.  For example, <code>http.STATUS_CODES[404] === &apos;Not\nFound&apos;</code>.\n\n</p>\n"
        },
        {
            "textRaw": "http.globalAgent",
            "name": "globalAgent",
            "desc": "<p>Global instance of Agent which is used as the default for all http client\nrequests.\n\n\n</p>\n"
        },
        {
            "textRaw": "http.ClientResponse",
            "name": "ClientResponse",
            "desc": "<p>This object is created when making a request with <code>http.request()</code>. It is\npassed to the <code>&apos;response&apos;</code> event of the request object.\n\n</p>\n<p>The response implements the [Readable Stream][] interface. This is an\n[EventEmitter][] with the following events:\n\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'data'",
                    "type": "event",
                    "name": "data",
                    "desc": "<p><code>function (chunk) { }</code>\n\n</p>\n<p>Emitted when a piece of the message body is received.\n\n</p>\n<p>Note that the <strong>data will be lost</strong> if there is no listener when a\n<code>ClientResponse</code> emits a <code>&apos;data&apos;</code> event.\n\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'end'",
                    "type": "event",
                    "name": "end",
                    "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Emitted exactly once for each message. No arguments. After\nemitted no other events will be emitted on the response.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'close'",
                    "type": "event",
                    "name": "close",
                    "desc": "<p><code>function (err) { }</code>\n\n</p>\n<p>Indicates that the underlaying connection was terminated before\n<code>end</code> event was emitted.\nSee [http.ServerRequest][]&apos;s <code>&apos;close&apos;</code> event for more information.\n\n</p>\n",
                    "params": []
                }
            ],
            "properties": [
                {
                    "textRaw": "response.statusCode",
                    "name": "statusCode",
                    "desc": "<p>The 3-digit HTTP response status code. E.G. <code>404</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "response.httpVersion",
                    "name": "httpVersion",
                    "desc": "<p>The HTTP version of the connected-to server. Probably either\n<code>&apos;1.1&apos;</code> or <code>&apos;1.0&apos;</code>.\nAlso <code>response.httpVersionMajor</code> is the first integer and\n<code>response.httpVersionMinor</code> is the second.\n\n</p>\n"
                },
                {
                    "textRaw": "response.headers",
                    "name": "headers",
                    "desc": "<p>The response headers object.\n\n</p>\n"
                },
                {
                    "textRaw": "response.trailers",
                    "name": "trailers",
                    "desc": "<p>The response trailers object. Only populated after the &apos;end&apos; event.\n\n</p>\n"
                }
            ],
            "methods": [
                {
                    "textRaw": "response.setEncoding([encoding])",
                    "type": "method",
                    "name": "setEncoding",
                    "desc": "<p>Set the encoding for the response body. See [stream.setEncoding()][] for more\ninformation.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.pause()",
                    "type": "method",
                    "name": "pause",
                    "desc": "<p>Pauses response from emitting events.  Useful to throttle back a download.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "response.resume()",
                    "type": "method",
                    "name": "resume",
                    "desc": "<p>Resumes a paused response.\n\n</p>\n",
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
            "textRaw": "http.createServer([requestListener])",
            "type": "method",
            "name": "createServer",
            "desc": "<p>Returns a new web server object.\n\n</p>\n<p>The <code>requestListener</code> is a function which is automatically\nadded to the <code>&apos;request&apos;</code> event.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "requestListener",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "http.createClient([port], [host])",
            "type": "method",
            "name": "createClient",
            "desc": "<p>This function is <strong>deprecated</strong>; please use [http.request()][] instead.\nConstructs a new HTTP client. <code>port</code> and <code>host</code> refer to the server to be\nconnected to.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "port",
                            "optional": true
                        },
                        {
                            "name": "host",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "http.request(options, callback)",
            "type": "method",
            "name": "request",
            "desc": "<p>Node maintains several connections per server to make HTTP requests.\nThis function allows one to transparently issue requests.\n\n</p>\n<p><code>options</code> can be an object or a string. If <code>options</code> is a string, it is\nautomatically parsed with [url.parse()][].\n\n</p>\n<p>Options:\n\n</p>\n<ul>\n<li><code>host</code>: A domain name or IP address of the server to issue the request to.\nDefaults to <code>&apos;localhost&apos;</code>.</li>\n<li><code>hostname</code>: To support <code>url.parse()</code> <code>hostname</code> is preferred over <code>host</code></li>\n<li><code>port</code>: Port of remote server. Defaults to 80.</li>\n<li><code>localAddress</code>: Local interface to bind for network connections.</li>\n<li><code>socketPath</code>: Unix Domain Socket (use one of host:port or socketPath)</li>\n<li><code>method</code>: A string specifying the HTTP request method. Defaults to <code>&apos;GET&apos;</code>.</li>\n<li><code>path</code>: Request path. Defaults to <code>&apos;/&apos;</code>. Should include query string if any.\nE.G. <code>&apos;/index.html?page=12&apos;</code></li>\n<li><code>headers</code>: An object containing request headers.</li>\n<li><code>auth</code>: Basic authentication i.e. <code>&apos;user:password&apos;</code> to compute an\nAuthorization header.</li>\n<li><code>agent</code>: Controls [Agent][] behavior. When an Agent is used request will\ndefault to <code>Connection: keep-alive</code>. Possible values:<ul>\n<li><code>undefined</code> (default): use [global Agent][] for this host and port.</li>\n<li><code>Agent</code> object: explicitly use the passed in <code>Agent</code>.</li>\n<li><code>false</code>: opts out of connection pooling with an Agent, defaults request to\n<code>Connection: close</code>.</li>\n</ul>\n</li>\n</ul>\n<p><code>http.request()</code> returns an instance of the <code>http.ClientRequest</code>\nclass. The <code>ClientRequest</code> instance is a writable stream. If one needs to\nupload a file with a POST request, then write to the <code>ClientRequest</code> object.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var options = {\n  host: &apos;www.google.com&apos;,\n  port: 80,\n  path: &apos;/upload&apos;,\n  method: &apos;POST&apos;\n};\n\nvar req = http.request(options, function(res) {\n  console.log(&apos;STATUS: &apos; + res.statusCode);\n  console.log(&apos;HEADERS: &apos; + JSON.stringify(res.headers));\n  res.setEncoding(&apos;utf8&apos;);\n  res.on(&apos;data&apos;, function (chunk) {\n    console.log(&apos;BODY: &apos; + chunk);\n  });\n});\n\nreq.on(&apos;error&apos;, function(e) {\n  console.log(&apos;problem with request: &apos; + e.message);\n});\n\n// write data to request body\nreq.write(&apos;data\\n&apos;);\nreq.write(&apos;data\\n&apos;);\nreq.end();</code></pre>\n<p>Note that in the example <code>req.end()</code> was called. With <code>http.request()</code> one\nmust always call <code>req.end()</code> to signify that you&apos;re done with the request -\neven if there is no data being written to the request body.\n\n</p>\n<p>If any error is encountered during the request (be that with DNS resolution,\nTCP level errors, or actual HTTP parse errors) an <code>&apos;error&apos;</code> event is emitted\non the returned request object.\n\n</p>\n<p>There are a few special headers that should be noted.\n\n</p>\n<ul>\n<li><p>Sending a &apos;Connection: keep-alive&apos; will notify Node that the connection to\nthe server should be persisted until the next request.</p>\n</li>\n<li><p>Sending a &apos;Content-length&apos; header will disable the default chunked encoding.</p>\n</li>\n<li><p>Sending an &apos;Expect&apos; header will immediately send the request headers.\nUsually, when sending &apos;Expect: 100-continue&apos;, you should both set a timeout\nand listen for the <code>continue</code> event. See RFC2616 Section 8.2.3 for more\ninformation.</p>\n</li>\n<li><p>Sending an Authorization header will override using the <code>auth</code> option\nto compute basic authentication.</p>\n</li>\n</ul>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "options"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "http.get(options, callback)",
            "type": "method",
            "name": "get",
            "desc": "<p>Since most requests are GET requests without bodies, Node provides this\nconvenience method. The only difference between this method and <code>http.request()</code>\nis that it sets the method to GET and calls <code>req.end()</code> automatically.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>http.get(&quot;http://www.google.com/index.html&quot;, function(res) {\n  console.log(&quot;Got response: &quot; + res.statusCode);\n}).on(&apos;error&apos;, function(e) {\n  console.log(&quot;Got error: &quot; + e.message);\n});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "options"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        }
    ],
    "classes": [
        {
            "textRaw": "Class: http.Server",
            "type": "class",
            "name": "http.Server",
            "desc": "<p>This is an [EventEmitter][] with the following events:\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'request'",
                    "type": "event",
                    "name": "request",
                    "desc": "<p><code>function (request, response) { }</code>\n\n</p>\n<p>Emitted each time there is a request. Note that there may be multiple requests\nper connection (in the case of keep-alive connections).\n <code>request</code> is an instance of <code>http.ServerRequest</code> and <code>response</code> is\n an instance of <code>http.ServerResponse</code>\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'connection'",
                    "type": "event",
                    "name": "connection",
                    "desc": "<p><code>function (socket) { }</code>\n\n</p>\n<p> When a new TCP stream is established. <code>socket</code> is an object of type\n <code>net.Socket</code>. Usually users will not want to access this event. The\n <code>socket</code> can also be accessed at <code>request.connection</code>.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'close'",
                    "type": "event",
                    "name": "close",
                    "desc": "<p><code>function () { }</code>\n\n</p>\n<p> Emitted when the server closes.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'checkContinue'",
                    "type": "event",
                    "name": "checkContinue",
                    "desc": "<p><code>function (request, response) { }</code>\n\n</p>\n<p>Emitted each time a request with an http Expect: 100-continue is received.\nIf this event isn&apos;t listened for, the server will automatically respond\nwith a 100 Continue as appropriate.\n\n</p>\n<p>Handling this event involves calling <code>response.writeContinue</code> if the client\nshould continue to send the request body, or generating an appropriate HTTP\nresponse (e.g., 400 Bad Request) if the client should not continue to send the\nrequest body.\n\n</p>\n<p>Note that when this event is emitted and handled, the <code>request</code> event will\nnot be emitted.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'connect'",
                    "type": "event",
                    "name": "connect",
                    "desc": "<p><code>function (request, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a client requests a http CONNECT method. If this event isn&apos;t\nlistened for, then clients requesting a CONNECT method will have their\nconnections closed.\n\n</p>\n<ul>\n<li><code>request</code> is the arguments for the http request, as it is in the request\nevent.</li>\n<li><code>socket</code> is the network socket between the server and client.</li>\n<li><code>head</code> is an instance of Buffer, the first packet of the tunneling stream,\nthis may be empty.</li>\n</ul>\n<p>After this event is emitted, the request&apos;s socket will not have a <code>data</code>\nevent listener, meaning you will need to bind to it in order to handle data\nsent to the server on that socket.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'upgrade'",
                    "type": "event",
                    "name": "upgrade",
                    "desc": "<p><code>function (request, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a client requests a http upgrade. If this event isn&apos;t\nlistened for, then clients requesting an upgrade will have their connections\nclosed.\n\n</p>\n<ul>\n<li><code>request</code> is the arguments for the http request, as it is in the request\nevent.</li>\n<li><code>socket</code> is the network socket between the server and client.</li>\n<li><code>head</code> is an instance of Buffer, the first packet of the upgraded stream,\nthis may be empty.</li>\n</ul>\n<p>After this event is emitted, the request&apos;s socket will not have a <code>data</code>\nevent listener, meaning you will need to bind to it in order to handle data\nsent to the server on that socket.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'clientError'",
                    "type": "event",
                    "name": "clientError",
                    "desc": "<p><code>function (exception) { }</code>\n\n</p>\n<p>If a client connection emits an &apos;error&apos; event - it will forwarded here.\n\n</p>\n",
                    "params": []
                }
            ],
            "methods": [
                {
                    "textRaw": "server.listen(port, [hostname], [backlog], [callback])",
                    "type": "method",
                    "name": "listen",
                    "desc": "<p>Begin accepting connections on the specified port and hostname.  If the\nhostname is omitted, the server will accept connections directed to any\nIPv4 address (<code>INADDR_ANY</code>).\n\n</p>\n<p>To listen to a unix socket, supply a filename instead of port and hostname.\n\n</p>\n<p>Backlog is the maximum length of the queue of pending connections.\nThe actual length will be determined by your OS through sysctl settings such as\n<code>tcp_max_syn_backlog</code> and <code>somaxconn</code> on linux. The default value of this\nparameter is 511 (not 512).\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be added as\na listener for the [&apos;listening&apos;][] event.  See also [net.Server.listen(port)][].\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "port"
                                },
                                {
                                    "name": "hostname",
                                    "optional": true
                                },
                                {
                                    "name": "backlog",
                                    "optional": true
                                },
                                {
                                    "name": "callback",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "server.listen(path, [callback])",
                    "type": "method",
                    "name": "listen",
                    "desc": "<p>Start a UNIX socket server listening for connections on the given <code>path</code>.\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be added as\na listener for the [&apos;listening&apos;][] event.  See also [net.Server.listen(path)][].\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "path"
                                },
                                {
                                    "name": "callback",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "server.listen(handle, [listeningListener])",
                    "type": "method",
                    "name": "listen",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`handle` {Object} ",
                                    "name": "handle",
                                    "type": "Object"
                                },
                                {
                                    "textRaw": "`listeningListener` {Function} ",
                                    "name": "listeningListener",
                                    "type": "Function",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "handle"
                                },
                                {
                                    "name": "listeningListener",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>The <code>handle</code> object can be set to either a server or socket (anything\nwith an underlying <code>_handle</code> member), or a <code>{fd: &lt;n&gt;}</code> object.\n\n</p>\n<p>This will cause the server to accept connections on the specified\nhandle, but it is presumed that the file descriptor or handle has\nalready been bound to a port or domain socket.\n\n</p>\n<p>Listening on a file descriptor is not supported on Windows.\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be added as\na listener for the <a href=\"net.html#event_listening_\">&apos;listening&apos;</a> event.\nSee also <a href=\"net.html#server.listen\">net.Server.listen()</a>.\n\n</p>\n"
                },
                {
                    "textRaw": "server.close([cb])",
                    "type": "method",
                    "name": "close",
                    "desc": "<p>Stops the server from accepting new connections.  See [net.Server.close()][].\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "cb",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                }
            ],
            "properties": [
                {
                    "textRaw": "server.maxHeadersCount",
                    "name": "maxHeadersCount",
                    "desc": "<p>Limits maximum incoming headers count, equal to 1000 by default. If set to 0 -\nno limit will be applied.\n\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "Class: http.ServerRequest",
            "type": "class",
            "name": "http.ServerRequest",
            "desc": "<p>This object is created internally by a HTTP server -- not by\nthe user -- and passed as the first argument to a <code>&apos;request&apos;</code> listener.\n\n</p>\n<p>The request implements the [Readable Stream][] interface. This is an\n[EventEmitter][] with the following events:\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'data'",
                    "type": "event",
                    "name": "data",
                    "desc": "<p><code>function (chunk) { }</code>\n\n</p>\n<p>Emitted when a piece of the message body is received. The chunk is a string if\nan encoding has been set with <code>request.setEncoding()</code>, otherwise it&apos;s a\n[Buffer][].\n\n</p>\n<p>Note that the <strong>data will be lost</strong> if there is no listener when a\n<code>ServerRequest</code> emits a <code>&apos;data&apos;</code> event.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'end'",
                    "type": "event",
                    "name": "end",
                    "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Emitted exactly once for each request. After that, no more <code>&apos;data&apos;</code> events\nwill be emitted on the request.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'close'",
                    "type": "event",
                    "name": "close",
                    "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Indicates that the underlaying connection was terminated before\n<code>response.end()</code> was called or able to flush.\n\n</p>\n<p>Just like <code>&apos;end&apos;</code>, this event occurs only once per request, and no more <code>&apos;data&apos;</code>\nevents will fire afterwards.\n\n</p>\n<p>Note: <code>&apos;close&apos;</code> can fire after <code>&apos;end&apos;</code>, but not vice versa.\n\n</p>\n",
                    "params": []
                }
            ],
            "properties": [
                {
                    "textRaw": "request.method",
                    "name": "method",
                    "desc": "<p>The request method as a string. Read only. Example:\n<code>&apos;GET&apos;</code>, <code>&apos;DELETE&apos;</code>.\n\n\n</p>\n"
                },
                {
                    "textRaw": "request.url",
                    "name": "url",
                    "desc": "<p>Request URL string. This contains only the URL that is\npresent in the actual HTTP request. If the request is:\n\n</p>\n<pre class='sh_javascript'><code>GET /status?name=ryan HTTP/1.1\\r\\n\nAccept: text/plain\\r\\n\n\\r\\n</code></pre>\n<p>Then <code>request.url</code> will be:\n\n</p>\n<pre class='sh_javascript'><code>&apos;/status?name=ryan&apos;</code></pre>\n<p>If you would like to parse the URL into its parts, you can use\n<code>require(&apos;url&apos;).parse(request.url)</code>.  Example:\n\n</p>\n<pre class='sh_javascript'><code>node&gt; require(&apos;url&apos;).parse(&apos;/status?name=ryan&apos;)\n{ href: &apos;/status?name=ryan&apos;,\n  search: &apos;?name=ryan&apos;,\n  query: &apos;name=ryan&apos;,\n  pathname: &apos;/status&apos; }</code></pre>\n<p>If you would like to extract the params from the query string,\nyou can use the <code>require(&apos;querystring&apos;).parse</code> function, or pass\n<code>true</code> as the second argument to <code>require(&apos;url&apos;).parse</code>.  Example:\n\n</p>\n<pre class='sh_javascript'><code>node&gt; require(&apos;url&apos;).parse(&apos;/status?name=ryan&apos;, true)\n{ href: &apos;/status?name=ryan&apos;,\n  search: &apos;?name=ryan&apos;,\n  query: { name: &apos;ryan&apos; },\n  pathname: &apos;/status&apos; }</code></pre>\n"
                },
                {
                    "textRaw": "request.headers",
                    "name": "headers",
                    "desc": "<p>Read only.\n\n</p>\n"
                },
                {
                    "textRaw": "request.trailers",
                    "name": "trailers",
                    "desc": "<p>Read only; HTTP trailers (if present). Only populated after the &apos;end&apos; event.\n\n</p>\n"
                },
                {
                    "textRaw": "request.httpVersion",
                    "name": "httpVersion",
                    "desc": "<p>The HTTP protocol version as a string. Read only. Examples:\n<code>&apos;1.1&apos;</code>, <code>&apos;1.0&apos;</code>.\nAlso <code>request.httpVersionMajor</code> is the first integer and\n<code>request.httpVersionMinor</code> is the second.\n\n\n</p>\n"
                },
                {
                    "textRaw": "request.connection",
                    "name": "connection",
                    "desc": "<p>The <code>net.Socket</code> object associated with the connection.\n\n\n</p>\n<p>With HTTPS support, use request.connection.verifyPeer() and\nrequest.connection.getPeerCertificate() to obtain the client&apos;s\nauthentication details.\n\n\n\n</p>\n"
                }
            ],
            "methods": [
                {
                    "textRaw": "request.setEncoding([encoding])",
                    "type": "method",
                    "name": "setEncoding",
                    "desc": "<p>Set the encoding for the request body. See [stream.setEncoding()][] for more\ninformation.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "request.pause()",
                    "type": "method",
                    "name": "pause",
                    "desc": "<p>Pauses request from emitting events.  Useful to throttle back an upload.\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "request.resume()",
                    "type": "method",
                    "name": "resume",
                    "desc": "<p>Resumes a paused request.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "Class: http.ServerResponse",
            "type": "class",
            "name": "http.ServerResponse",
            "desc": "<p>This object is created internally by a HTTP server--not by the user. It is\npassed as the second parameter to the <code>&apos;request&apos;</code> event.\n\n</p>\n<p>The response implements the [Writable Stream][] interface. This is an\n[EventEmitter][] with the following events:\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'close'",
                    "type": "event",
                    "name": "close",
                    "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Indicates that the underlaying connection was terminated before\n<code>response.end()</code> was called or able to flush.\n\n</p>\n",
                    "params": []
                }
            ],
            "methods": [
                {
                    "textRaw": "response.writeContinue()",
                    "type": "method",
                    "name": "writeContinue",
                    "desc": "<p>Sends a HTTP/1.1 100 Continue message to the client, indicating that\nthe request body should be sent. See the [&apos;checkContinue&apos;][] event on <code>Server</code>.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "response.writeHead(statusCode, [reasonPhrase], [headers])",
                    "type": "method",
                    "name": "writeHead",
                    "desc": "<p>Sends a response header to the request. The status code is a 3-digit HTTP\nstatus code, like <code>404</code>. The last argument, <code>headers</code>, are the response headers.\nOptionally one can give a human-readable <code>reasonPhrase</code> as the second\nargument.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var body = &apos;hello world&apos;;\nresponse.writeHead(200, {\n  &apos;Content-Length&apos;: body.length,\n  &apos;Content-Type&apos;: &apos;text/plain&apos; });</code></pre>\n<p>This method must only be called once on a message and it must\nbe called before <code>response.end()</code> is called.\n\n</p>\n<p>If you call <code>response.write()</code> or <code>response.end()</code> before calling this, the\nimplicit/mutable headers will be calculated and call this function for you.\n\n</p>\n<p>Note: that Content-Length is given in bytes not characters. The above example\nworks because the string <code>&apos;hello world&apos;</code> contains only single byte characters.\nIf the body contains higher coded characters then <code>Buffer.byteLength()</code>\nshould be used to determine the number of bytes in a given encoding.\nAnd Node does not check whether Content-Length and the length of the body\nwhich has been transmitted are equal or not.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "statusCode"
                                },
                                {
                                    "name": "reasonPhrase",
                                    "optional": true
                                },
                                {
                                    "name": "headers",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.setHeader(name, value)",
                    "type": "method",
                    "name": "setHeader",
                    "desc": "<p>Sets a single header value for implicit headers.  If this header already exists\nin the to-be-sent headers, its value will be replaced.  Use an array of strings\nhere if you need to send multiple headers with the same name.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>response.setHeader(&quot;Content-Type&quot;, &quot;text/html&quot;);</code></pre>\n<p>or\n\n</p>\n<pre class='sh_javascript'><code>response.setHeader(&quot;Set-Cookie&quot;, [&quot;type=ninja&quot;, &quot;language=javascript&quot;]);</code></pre>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "name"
                                },
                                {
                                    "name": "value"
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.getHeader(name)",
                    "type": "method",
                    "name": "getHeader",
                    "desc": "<p>Reads out a header that&apos;s already been queued but not sent to the client.  Note\nthat the name is case insensitive.  This can only be called before headers get\nimplicitly flushed.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var contentType = response.getHeader(&apos;content-type&apos;);</code></pre>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "name"
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.removeHeader(name)",
                    "type": "method",
                    "name": "removeHeader",
                    "desc": "<p>Removes a header that&apos;s queued for implicit sending.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>response.removeHeader(&quot;Content-Encoding&quot;);</code></pre>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "name"
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.write(chunk, [encoding])",
                    "type": "method",
                    "name": "write",
                    "desc": "<p>If this method is called and <code>response.writeHead()</code> has not been called, it will\nswitch to implicit header mode and flush the implicit headers.\n\n</p>\n<p>This sends a chunk of the response body. This method may\nbe called multiple times to provide successive parts of the body.\n\n</p>\n<p><code>chunk</code> can be a string or a buffer. If <code>chunk</code> is a string,\nthe second parameter specifies how to encode it into a byte stream.\nBy default the <code>encoding</code> is <code>&apos;utf8&apos;</code>.\n\n</p>\n<p><strong>Note</strong>: This is the raw HTTP body and has nothing to do with\nhigher-level multi-part body encodings that may be used.\n\n</p>\n<p>The first time <code>response.write()</code> is called, it will send the buffered\nheader information and the first body to the client. The second time\n<code>response.write()</code> is called, Node assumes you&apos;re going to be streaming\ndata, and sends that separately. That is, the response is buffered up to the\nfirst chunk of body.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "chunk"
                                },
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.addTrailers(headers)",
                    "type": "method",
                    "name": "addTrailers",
                    "desc": "<p>This method adds HTTP trailing headers (a header but at the end of the\nmessage) to the response.\n\n</p>\n<p>Trailers will <strong>only</strong> be emitted if chunked encoding is used for the\nresponse; if it is not (e.g., if the request was HTTP/1.0), they will\nbe silently discarded.\n\n</p>\n<p>Note that HTTP requires the <code>Trailer</code> header to be sent if you intend to\nemit trailers, with a list of the header fields in its value. E.g.,\n\n</p>\n<pre class='sh_javascript'><code>response.writeHead(200, { &apos;Content-Type&apos;: &apos;text/plain&apos;,\n                          &apos;Trailer&apos;: &apos;Content-MD5&apos; });\nresponse.write(fileData);\nresponse.addTrailers({&apos;Content-MD5&apos;: &quot;7895bf4b8828b55ceaf47747b4bca667&quot;});\nresponse.end();</code></pre>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "headers"
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "response.end([data], [encoding])",
                    "type": "method",
                    "name": "end",
                    "desc": "<p>This method signals to the server that all of the response headers and body\nhas been sent; that server should consider this message complete.\nThe method, <code>response.end()</code>, MUST be called on each\nresponse.\n\n</p>\n<p>If <code>data</code> is specified, it is equivalent to calling <code>response.write(data, encoding)</code>\nfollowed by <code>response.end()</code>.\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "data",
                                    "optional": true
                                },
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                }
            ],
            "properties": [
                {
                    "textRaw": "response.statusCode",
                    "name": "statusCode",
                    "desc": "<p>When using implicit headers (not calling <code>response.writeHead()</code> explicitly), this property\ncontrols the status code that will be send to the client when the headers get\nflushed.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>response.statusCode = 404;</code></pre>\n<p>After response header was sent to the client, this property indicates the\nstatus code which was sent out.\n\n</p>\n"
                },
                {
                    "textRaw": "response.sendDate",
                    "name": "sendDate",
                    "desc": "<p>When true, the Date header will be automatically generated and sent in \nthe response if it is not already present in the headers. Defaults to true.\n\n</p>\n<p>This should only be disabled for testing; HTTP requires the Date header\nin responses.\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "Class: http.Agent",
            "type": "class",
            "name": "http.Agent",
            "desc": "<p>In node 0.5.3+ there is a new implementation of the HTTP Agent which is used\nfor pooling sockets used in HTTP client requests.\n\n</p>\n<p>Previously, a single agent instance helped pool for a single host+port. The\ncurrent implementation now holds sockets for any number of hosts.\n\n</p>\n<p>The current HTTP Agent also defaults client requests to using\nConnection:keep-alive. If no pending HTTP requests are waiting on a socket\nto become free the socket is closed. This means that node&apos;s pool has the\nbenefit of keep-alive when under load but still does not require developers\nto manually close the HTTP clients using keep-alive.\n\n</p>\n<p>Sockets are removed from the agent&apos;s pool when the socket emits either a\n&quot;close&quot; event or a special &quot;agentRemove&quot; event. This means that if you intend\nto keep one HTTP request open for a long time and don&apos;t want it to stay in the\npool you can do something along the lines of:\n\n</p>\n<pre class='sh_javascript'><code>http.get(options, function(res) {\n  // Do stuff\n}).on(&quot;socket&quot;, function (socket) {\n  socket.emit(&quot;agentRemove&quot;);\n});</code></pre>\n<p>Alternatively, you could just opt out of pooling entirely using <code>agent:false</code>:\n\n</p>\n<pre class='sh_javascript'><code>http.get({host:&apos;localhost&apos;, port:80, path:&apos;/&apos;, agent:false}, function (res) {\n  // Do stuff\n})</code></pre>\n",
            "properties": [
                {
                    "textRaw": "agent.maxSockets",
                    "name": "maxSockets",
                    "desc": "<p>By default set to 5. Determines how many concurrent sockets the agent can have \nopen per host.\n\n</p>\n"
                },
                {
                    "textRaw": "agent.sockets",
                    "name": "sockets",
                    "desc": "<p>An object which contains arrays of sockets currently in use by the Agent. Do not \nmodify.\n\n</p>\n"
                },
                {
                    "textRaw": "agent.requests",
                    "name": "requests",
                    "desc": "<p>An object which contains queues of requests that have not yet been assigned to \nsockets. Do not modify.\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "Class: http.ClientRequest",
            "type": "class",
            "name": "http.ClientRequest",
            "desc": "<p>This object is created internally and returned from <code>http.request()</code>.  It\nrepresents an <em>in-progress</em> request whose header has already been queued.  The\nheader is still mutable using the <code>setHeader(name, value)</code>, <code>getHeader(name)</code>,\n<code>removeHeader(name)</code> API.  The actual header will be sent along with the first\ndata chunk or when closing the connection.\n\n</p>\n<p>To get the response, add a listener for <code>&apos;response&apos;</code> to the request object.\n<code>&apos;response&apos;</code> will be emitted from the request object when the response\nheaders have been received.  The <code>&apos;response&apos;</code> event is executed with one\nargument which is an instance of <code>http.ClientResponse</code>.\n\n</p>\n<p>During the <code>&apos;response&apos;</code> event, one can add listeners to the\nresponse object; particularly to listen for the <code>&apos;data&apos;</code> event. Note that\nthe <code>&apos;response&apos;</code> event is called before any part of the response body is received,\nso there is no need to worry about racing to catch the first part of the\nbody. As long as a listener for <code>&apos;data&apos;</code> is added during the <code>&apos;response&apos;</code>\nevent, the entire body will be caught.\n\n\n</p>\n<pre class='sh_javascript'><code>// Good\nrequest.on(&apos;response&apos;, function (response) {\n  response.on(&apos;data&apos;, function (chunk) {\n    console.log(&apos;BODY: &apos; + chunk);\n  });\n});\n\n// Bad - misses all or part of the body\nrequest.on(&apos;response&apos;, function (response) {\n  setTimeout(function () {\n    response.on(&apos;data&apos;, function (chunk) {\n      console.log(&apos;BODY: &apos; + chunk);\n    });\n  }, 10);\n});</code></pre>\n<p>Note: Node does not check whether Content-Length and the length of the body\nwhich has been transmitted are equal or not.\n\n</p>\n<p>The request implements the [Writable Stream][] interface. This is an\n[EventEmitter][] with the following events:\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event 'response'",
                    "type": "event",
                    "name": "response",
                    "desc": "<p><code>function (response) { }</code>\n\n</p>\n<p>Emitted when a response is received to this request. This event is emitted only\nonce. The <code>response</code> argument will be an instance of <code>http.ClientResponse</code>.\n\n</p>\n<p>Options:\n\n</p>\n<ul>\n<li><code>host</code>: A domain name or IP address of the server to issue the request to.</li>\n<li><code>port</code>: Port of remote server.</li>\n<li><code>socketPath</code>: Unix Domain Socket (use one of host:port or socketPath)</li>\n</ul>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'socket'",
                    "type": "event",
                    "name": "socket",
                    "desc": "<p><code>function (socket) { }</code>\n\n</p>\n<p>Emitted after a socket is assigned to this request.\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'connect'",
                    "type": "event",
                    "name": "connect",
                    "desc": "<p><code>function (response, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a server responds to a request with a CONNECT method. If this\nevent isn&apos;t being listened for, clients receiving a CONNECT method will have\ntheir connections closed.\n\n</p>\n<p>A client server pair that show you how to listen for the <code>connect</code> event.\n\n</p>\n<pre class='sh_javascript'><code>var http = require(&apos;http&apos;);\nvar net = require(&apos;net&apos;);\nvar url = require(&apos;url&apos;);\n\n// Create an HTTP tunneling proxy\nvar proxy = http.createServer(function (req, res) {\n  res.writeHead(200, {&apos;Content-Type&apos;: &apos;text/plain&apos;});\n  res.end(&apos;okay&apos;);\n});\nproxy.on(&apos;connect&apos;, function(req, cltSocket, head) {\n  // connect to an origin server\n  var srvUrl = url.parse(&apos;http://&apos; + req.url);\n  var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, function() {\n    cltSocket.write(&apos;HTTP/1.1 200 Connection Established\\r\\n&apos; +\n                    &apos;Proxy-agent: Node-Proxy\\r\\n&apos; +\n                    &apos;\\r\\n&apos;);\n    srvSocket.write(head);\n    srvSocket.pipe(cltSocket);\n    cltSocket.pipe(srvSocket);\n  });\n});\n\n// now that proxy is running\nproxy.listen(1337, &apos;127.0.0.1&apos;, function() {\n\n  // make a request to a tunneling proxy\n  var options = {\n    port: 1337,\n    host: &apos;127.0.0.1&apos;,\n    method: &apos;CONNECT&apos;,\n    path: &apos;www.google.com:80&apos;\n  };\n\n  var req = http.request(options);\n  req.end();\n\n  req.on(&apos;connect&apos;, function(res, socket, head) {\n    console.log(&apos;got connected!&apos;);\n\n    // make a request over an HTTP tunnel\n    socket.write(&apos;GET / HTTP/1.1\\r\\n&apos; +\n                 &apos;Host: www.google.com:80\\r\\n&apos; +\n                 &apos;Connection: close\\r\\n&apos; +\n                 &apos;\\r\\n&apos;);\n    socket.on(&apos;data&apos;, function(chunk) {\n      console.log(chunk.toString());\n    });\n    socket.on(&apos;end&apos;, function() {\n      proxy.close();\n    });\n  });\n});</code></pre>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'upgrade'",
                    "type": "event",
                    "name": "upgrade",
                    "desc": "<p><code>function (response, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a server responds to a request with an upgrade. If this\nevent isn&apos;t being listened for, clients receiving an upgrade header will have\ntheir connections closed.\n\n</p>\n<p>A client server pair that show you how to listen for the <code>upgrade</code> event.\n\n</p>\n<pre class='sh_javascript'><code>var http = require(&apos;http&apos;);\n\n// Create an HTTP server\nvar srv = http.createServer(function (req, res) {\n  res.writeHead(200, {&apos;Content-Type&apos;: &apos;text/plain&apos;});\n  res.end(&apos;okay&apos;);\n});\nsrv.on(&apos;upgrade&apos;, function(req, socket, head) {\n  socket.write(&apos;HTTP/1.1 101 Web Socket Protocol Handshake\\r\\n&apos; +\n               &apos;Upgrade: WebSocket\\r\\n&apos; +\n               &apos;Connection: Upgrade\\r\\n&apos; +\n               &apos;\\r\\n&apos;);\n\n  socket.pipe(socket); // echo back\n});\n\n// now that server is running\nsrv.listen(1337, &apos;127.0.0.1&apos;, function() {\n\n  // make a request\n  var options = {\n    port: 1337,\n    host: &apos;127.0.0.1&apos;,\n    headers: {\n      &apos;Connection&apos;: &apos;Upgrade&apos;,\n      &apos;Upgrade&apos;: &apos;websocket&apos;\n    }\n  };\n\n  var req = http.request(options);\n  req.end();\n\n  req.on(&apos;upgrade&apos;, function(res, socket, upgradeHead) {\n    console.log(&apos;got upgraded!&apos;);\n    socket.end();\n    process.exit(0);\n  });\n});</code></pre>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'continue'",
                    "type": "event",
                    "name": "continue",
                    "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Emitted when the server sends a &apos;100 Continue&apos; HTTP response, usually because\nthe request contained &apos;Expect: 100-continue&apos;. This is an instruction that\nthe client should send the request body.\n\n</p>\n",
                    "params": []
                }
            ],
            "methods": [
                {
                    "textRaw": "request.write(chunk, [encoding])",
                    "type": "method",
                    "name": "write",
                    "desc": "<p>Sends a chunk of the body.  By calling this method\nmany times, the user can stream a request body to a\nserver--in that case it is suggested to use the\n<code>[&apos;Transfer-Encoding&apos;, &apos;chunked&apos;]</code> header line when\ncreating the request.\n\n</p>\n<p>The <code>chunk</code> argument should be a [Buffer][] or a string.\n\n</p>\n<p>The <code>encoding</code> argument is optional and only applies when <code>chunk</code> is a string.\nDefaults to <code>&apos;utf8&apos;</code>.\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "chunk"
                                },
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "request.end([data], [encoding])",
                    "type": "method",
                    "name": "end",
                    "desc": "<p>Finishes sending the request. If any parts of the body are\nunsent, it will flush them to the stream. If the request is\nchunked, this will send the terminating <code>&apos;0\\r\\n\\r\\n&apos;</code>.\n\n</p>\n<p>If <code>data</code> is specified, it is equivalent to calling\n<code>request.write(data, encoding)</code> followed by <code>request.end()</code>.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "data",
                                    "optional": true
                                },
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "request.abort()",
                    "type": "method",
                    "name": "abort",
                    "desc": "<p>Aborts a request.  (New since v0.3.8.)\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "request.setTimeout(timeout, [callback])",
                    "type": "method",
                    "name": "setTimeout",
                    "desc": "<p>Once a socket is assigned to this request and is connected\n[socket.setTimeout()][] will be called.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "timeout"
                                },
                                {
                                    "name": "callback",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "request.setNoDelay([noDelay])",
                    "type": "method",
                    "name": "setNoDelay",
                    "desc": "<p>Once a socket is assigned to this request and is connected\n[socket.setNoDelay()][] will be called.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "noDelay",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "textRaw": "request.setSocketKeepAlive([enable], [initialDelay])",
                    "type": "method",
                    "name": "setSocketKeepAlive",
                    "desc": "<p>Once a socket is assigned to this request and is connected\n[socket.setKeepAlive()][] will be called.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "enable",
                                    "optional": true
                                },
                                {
                                    "name": "initialDelay",
                                    "optional": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "type": "module",
    "displayName": "HTTP"
}
});
define(function(require, exports, module) {
    module.exports = {
    "textRaw": "TLS (SSL)",
    "name": "tls_(ssl)",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>Use <code>require(&apos;tls&apos;)</code> to access this module.\n\n</p>\n<p>The <code>tls</code> module uses OpenSSL to provide Transport Layer Security and/or\nSecure Socket Layer: encrypted stream communication.\n\n</p>\n<p>TLS/SSL is a public/private key infrastructure. Each client and each\nserver must have a private key. A private key is created like this\n\n</p>\n<pre class='sh_javascript'><code>openssl genrsa -out ryans-key.pem 1024</code></pre>\n<p>All severs and some clients need to have a certificate. Certificates are public\nkeys signed by a Certificate Authority or self-signed. The first step to\ngetting a certificate is to create a &quot;Certificate Signing Request&quot; (CSR)\nfile. This is done with:\n\n</p>\n<pre class='sh_javascript'><code>openssl req -new -key ryans-key.pem -out ryans-csr.pem</code></pre>\n<p>To create a self-signed certificate with the CSR, do this:\n\n</p>\n<pre class='sh_javascript'><code>openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem</code></pre>\n<p>Alternatively you can send the CSR to a Certificate Authority for signing.\n\n</p>\n<p>(TODO: docs on creating a CA, for now interested users should just look at\n<code>test/fixtures/keys/Makefile</code> in the Node source code)\n\n</p>\n<p>To create .pfx or .p12, do this:\n\n</p>\n<pre class='sh_javascript'><code>openssl pkcs12 -export -in agent5-cert.pem -inkey agent5-key.pem \\\n    -certfile ca-cert.pem -out agent5.pfx</code></pre>\n<ul>\n<li><code>in</code>:  certificate</li>\n<li><code>inkey</code>: private key</li>\n<li><code>certfile</code>: all CA certs concatenated in one file like\n<code>cat ca1-cert.pem ca2-cert.pem &gt; ca-cert.pem</code></li>\n</ul>\n",
    "miscs": [
        {
            "textRaw": "Client-initiated renegotiation attack mitigation",
            "name": "Client-initiated renegotiation attack mitigation",
            "type": "misc",
            "desc": "<p>The TLS protocol lets the client renegotiate certain aspects of the TLS session.\nUnfortunately, session renegotiation requires a disproportional amount of\nserver-side resources, which makes it a potential vector for denial-of-service\nattacks.\n\n</p>\n<p>To mitigate this, renegotiations are limited to three times every 10 minutes. An\nerror is emitted on the [CleartextStream][] instance when the threshold is\nexceeded. The limits are configurable:\n\n</p>\n<ul>\n<li><p><code>tls.CLIENT_RENEG_LIMIT</code>: renegotiation limit, default is 3.</p>\n</li>\n<li><p><code>tls.CLIENT_RENEG_WINDOW</code>: renegotiation window in seconds, default is</p>\n<pre class='sh_javascript'><code>                       10 minutes.</code></pre>\n</li>\n</ul>\n<p>Don&apos;t change the defaults unless you know what you are doing.\n\n</p>\n<p>To test your server, connect to it with <code>openssl s_client -connect address:port</code>\nand tap <code>R&lt;CR&gt;</code> (that&apos;s the letter <code>R</code> followed by a carriage return) a few\ntimes.\n\n\n</p>\n"
        },
        {
            "textRaw": "NPN and SNI",
            "name": "NPN and SNI",
            "type": "misc",
            "desc": "<p>NPN (Next Protocol Negotiation) and SNI (Server Name Indication) are TLS\nhandshake extensions allowing you:\n\n</p>\n<ul>\n<li>NPN - to use one TLS server for multiple protocols (HTTP, SPDY)</li>\n<li>SNI - to use one TLS server for multiple hostnames with different SSL\ncertificates.</li>\n</ul>\n"
        }
    ],
    "methods": [
        {
            "textRaw": "tls.createServer(options, [secureConnectionListener])",
            "type": "method",
            "name": "createServer",
            "desc": "<p>Creates a new [tls.Server][].  The <code>connectionListener</code> argument is\nautomatically set as a listener for the [secureConnection][] event.  The\n<code>options</code> object has these possibilities:\n\n</p>\n<ul>\n<li><p><code>pfx</code>: A string or <code>Buffer</code> containing the private key, certificate and\nCA certs of the server in PFX or PKCS12 format. (Mutually exclusive with\nthe <code>key</code>, <code>cert</code> and <code>ca</code> options.)</p>\n</li>\n<li><p><code>key</code>: A string or <code>Buffer</code> containing the private key of the server in\nPEM format. (Required)</p>\n</li>\n<li><p><code>passphrase</code>: A string of passphrase for the private key or pfx.</p>\n</li>\n<li><p><code>cert</code>: A string or <code>Buffer</code> containing the certificate key of the server in\nPEM format. (Required)</p>\n</li>\n<li><p><code>ca</code>: An array of strings or <code>Buffer</code>s of trusted certificates. If this is\nomitted several well known &quot;root&quot; CAs will be used, like VeriSign.\nThese are used to authorize connections.</p>\n</li>\n<li><p><code>crl</code> : Either a string or list of strings of PEM encoded CRLs (Certificate\nRevocation List)</p>\n</li>\n<li><p><code>ciphers</code>: A string describing the ciphers to use or exclude. Consult\n<a href=\"http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT\">http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT</a> for\ndetails on the format.\nTo mitigate [BEAST attacks]\n(<a href=\"http://blog.ivanristic.com/2011/10/mitigating-the-beast-attack-on-tls.html\">http://blog.ivanristic.com/2011/10/mitigating-the-beast-attack-on-tls.html</a>),\nit is recommended that you use this option in conjunction with the\n<code>honorCipherOrder</code> option described below to prioritize the RC4 algorithm,\nsince it is a non-CBC cipher. A recommended cipher list follows:\n<code>ECDHE-RSA-AES256-SHA:AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM</code></p>\n</li>\n<li><p><code>honorCipherOrder</code> :\nWhen choosing a cipher, use the server&apos;s preferences instead of the client\npreferences.\nNote that if SSLv2 is used, the server will send its list of preferences\nto the client, and the client chooses the cipher.\nAlthough, this option is disabled by default, it is <em>recommended</em> that you\nuse this option in conjunction with the <code>ciphers</code> option to mitigate\nBEAST attacks.</p>\n</li>\n<li><p><code>requestCert</code>: If <code>true</code> the server will request a certificate from\nclients that connect and attempt to verify that certificate. Default:\n<code>false</code>.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: If <code>true</code> the server will reject any connection\nwhich is not authorized with the list of supplied CAs. This option only\nhas an effect if <code>requestCert</code> is <code>true</code>. Default: <code>false</code>.</p>\n</li>\n<li><p><code>NPNProtocols</code>: An array or <code>Buffer</code> of possible NPN protocols. (Protocols\nshould be ordered by their priority).</p>\n</li>\n<li><p><code>SNICallback</code>: A function that will be called if client supports SNI TLS\nextension. Only one argument will be passed to it: <code>servername</code>. And\n<code>SNICallback</code> should return SecureContext instance.\n(You can use <code>crypto.createCredentials(...).context</code> to get proper\nSecureContext). If <code>SNICallback</code> wasn&apos;t provided - default callback with\nhigh-level API will be used (see below).</p>\n</li>\n<li><p><code>sessionIdContext</code>: A string containing a opaque identifier for session\nresumption. If <code>requestCert</code> is <code>true</code>, the default is MD5 hash value\ngenerated from command-line. Otherwise, the default is not provided.</p>\n</li>\n</ul>\n<p>Here is a simple example echo server:\n\n</p>\n<pre class='sh_javascript'><code>var tls = require(&apos;tls&apos;);\nvar fs = require(&apos;fs&apos;);\n\nvar options = {\n  key: fs.readFileSync(&apos;server-key.pem&apos;),\n  cert: fs.readFileSync(&apos;server-cert.pem&apos;),\n\n  // This is necessary only if using the client certificate authentication.\n  requestCert: true,\n\n  // This is necessary only if the client uses the self-signed certificate.\n  ca: [ fs.readFileSync(&apos;client-cert.pem&apos;) ]\n};\n\nvar server = tls.createServer(options, function(cleartextStream) {\n  console.log(&apos;server connected&apos;,\n              cleartextStream.authorized ? &apos;authorized&apos; : &apos;unauthorized&apos;);\n  cleartextStream.write(&quot;welcome!\\n&quot;);\n  cleartextStream.setEncoding(&apos;utf8&apos;);\n  cleartextStream.pipe(cleartextStream);\n});\nserver.listen(8000, function() {\n  console.log(&apos;server bound&apos;);\n});</code></pre>\n<p>Or\n\n</p>\n<pre class='sh_javascript'><code>var tls = require(&apos;tls&apos;);\nvar fs = require(&apos;fs&apos;);\n\nvar options = {\n  pfx: fs.readFileSync(&apos;server.pfx&apos;),\n\n  // This is necessary only if using the client certificate authentication.\n  requestCert: true,\n\n};\n\nvar server = tls.createServer(options, function(cleartextStream) {\n  console.log(&apos;server connected&apos;,\n              cleartextStream.authorized ? &apos;authorized&apos; : &apos;unauthorized&apos;);\n  cleartextStream.write(&quot;welcome!\\n&quot;);\n  cleartextStream.setEncoding(&apos;utf8&apos;);\n  cleartextStream.pipe(cleartextStream);\n});\nserver.listen(8000, function() {\n  console.log(&apos;server bound&apos;);\n});</code></pre>\n<p>You can test this server by connecting to it with <code>openssl s_client</code>:\n\n\n</p>\n<pre class='sh_javascript'><code>openssl s_client -connect 127.0.0.1:8000</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "options"
                        },
                        {
                            "name": "secureConnectionListener",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "tls.connect(options, [secureConnectListener])",
            "type": "method",
            "name": "connect",
            "desc": "<p>Creates a new client connection to the given <code>port</code> and <code>host</code> (old API) or\n<code>options.port</code> and <code>options.host</code>. (If <code>host</code> is omitted, it defaults to\n<code>localhost</code>.) <code>options</code> should be an object which specifies:\n\n</p>\n<ul>\n<li><p><code>host</code>: Host the client should connect to</p>\n</li>\n<li><p><code>port</code>: Port the client should connect to</p>\n</li>\n<li><p><code>socket</code>: Establish secure connection on a given socket rather than\ncreating a new socket. If this option is specified, <code>host</code> and <code>port</code>\nare ignored.</p>\n</li>\n<li><p><code>pfx</code>: A string or <code>Buffer</code> containing the private key, certificate and\nCA certs of the server in PFX or PKCS12 format.</p>\n</li>\n<li><p><code>key</code>: A string or <code>Buffer</code> containing the private key of the client in\nPEM format.</p>\n</li>\n<li><p><code>passphrase</code>: A string of passphrase for the private key or pfx.</p>\n</li>\n<li><p><code>cert</code>: A string or <code>Buffer</code> containing the certificate key of the client in\nPEM format.</p>\n</li>\n<li><p><code>ca</code>: An array of strings or <code>Buffer</code>s of trusted certificates. If this is\nomitted several well known &quot;root&quot; CAs will be used, like VeriSign.\nThese are used to authorize connections.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: If <code>true</code>, the server certificate is verified against\nthe list of supplied CAs. An <code>&apos;error&apos;</code> event is emitted if verification\nfails. Default: <code>false</code>.</p>\n</li>\n<li><p><code>NPNProtocols</code>: An array of string or <code>Buffer</code> containing supported NPN\nprotocols. <code>Buffer</code> should have following format: <code>0x05hello0x05world</code>,\nwhere first byte is next protocol name&apos;s length. (Passing array should\nusually be much simpler: <code>[&apos;hello&apos;, &apos;world&apos;]</code>.)</p>\n</li>\n<li><p><code>servername</code>: Servername for SNI (Server Name Indication) TLS extension.</p>\n</li>\n</ul>\n<p>The <code>secureConnectListener</code> parameter will be added as a listener for the\n[&apos;secureConnect&apos;][] event.\n\n</p>\n<p><code>tls.connect()</code> returns a [CleartextStream][] object.\n\n</p>\n<p>Here is an example of a client of echo server as described previously:\n\n</p>\n<pre class='sh_javascript'><code>var tls = require(&apos;tls&apos;);\nvar fs = require(&apos;fs&apos;);\n\nvar options = {\n  // These are necessary only if using the client certificate authentication\n  key: fs.readFileSync(&apos;client-key.pem&apos;),\n  cert: fs.readFileSync(&apos;client-cert.pem&apos;),\n\n  // This is necessary only if the server uses the self-signed certificate\n  ca: [ fs.readFileSync(&apos;server-cert.pem&apos;) ]\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&apos;client connected&apos;,\n              cleartextStream.authorized ? &apos;authorized&apos; : &apos;unauthorized&apos;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&apos;utf8&apos;);\ncleartextStream.on(&apos;data&apos;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&apos;end&apos;, function() {\n  server.close();\n});</code></pre>\n<p>Or\n\n</p>\n<pre class='sh_javascript'><code>var tls = require(&apos;tls&apos;);\nvar fs = require(&apos;fs&apos;);\n\nvar options = {\n  pfx: fs.readFileSync(&apos;client.pfx&apos;)\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&apos;client connected&apos;,\n              cleartextStream.authorized ? &apos;authorized&apos; : &apos;unauthorized&apos;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&apos;utf8&apos;);\ncleartextStream.on(&apos;data&apos;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&apos;end&apos;, function() {\n  server.close();\n});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "port"
                        },
                        {
                            "name": "host",
                            "optional": true
                        },
                        {
                            "name": "options",
                            "optional": true
                        },
                        {
                            "name": "secureConnectListener",
                            "optional": true
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "options"
                        },
                        {
                            "name": "secureConnectListener",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "tls.connect(port, [host], [options], [secureConnectListener])",
            "type": "method",
            "name": "connect",
            "desc": "<p>Creates a new client connection to the given <code>port</code> and <code>host</code> (old API) or\n<code>options.port</code> and <code>options.host</code>. (If <code>host</code> is omitted, it defaults to\n<code>localhost</code>.) <code>options</code> should be an object which specifies:\n\n</p>\n<ul>\n<li><p><code>host</code>: Host the client should connect to</p>\n</li>\n<li><p><code>port</code>: Port the client should connect to</p>\n</li>\n<li><p><code>socket</code>: Establish secure connection on a given socket rather than\ncreating a new socket. If this option is specified, <code>host</code> and <code>port</code>\nare ignored.</p>\n</li>\n<li><p><code>pfx</code>: A string or <code>Buffer</code> containing the private key, certificate and\nCA certs of the server in PFX or PKCS12 format.</p>\n</li>\n<li><p><code>key</code>: A string or <code>Buffer</code> containing the private key of the client in\nPEM format.</p>\n</li>\n<li><p><code>passphrase</code>: A string of passphrase for the private key or pfx.</p>\n</li>\n<li><p><code>cert</code>: A string or <code>Buffer</code> containing the certificate key of the client in\nPEM format.</p>\n</li>\n<li><p><code>ca</code>: An array of strings or <code>Buffer</code>s of trusted certificates. If this is\nomitted several well known &quot;root&quot; CAs will be used, like VeriSign.\nThese are used to authorize connections.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: If <code>true</code>, the server certificate is verified against\nthe list of supplied CAs. An <code>&apos;error&apos;</code> event is emitted if verification\nfails. Default: <code>false</code>.</p>\n</li>\n<li><p><code>NPNProtocols</code>: An array of string or <code>Buffer</code> containing supported NPN\nprotocols. <code>Buffer</code> should have following format: <code>0x05hello0x05world</code>,\nwhere first byte is next protocol name&apos;s length. (Passing array should\nusually be much simpler: <code>[&apos;hello&apos;, &apos;world&apos;]</code>.)</p>\n</li>\n<li><p><code>servername</code>: Servername for SNI (Server Name Indication) TLS extension.</p>\n</li>\n</ul>\n<p>The <code>secureConnectListener</code> parameter will be added as a listener for the\n[&apos;secureConnect&apos;][] event.\n\n</p>\n<p><code>tls.connect()</code> returns a [CleartextStream][] object.\n\n</p>\n<p>Here is an example of a client of echo server as described previously:\n\n</p>\n<pre class='sh_javascript'><code>var tls = require(&apos;tls&apos;);\nvar fs = require(&apos;fs&apos;);\n\nvar options = {\n  // These are necessary only if using the client certificate authentication\n  key: fs.readFileSync(&apos;client-key.pem&apos;),\n  cert: fs.readFileSync(&apos;client-cert.pem&apos;),\n\n  // This is necessary only if the server uses the self-signed certificate\n  ca: [ fs.readFileSync(&apos;server-cert.pem&apos;) ]\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&apos;client connected&apos;,\n              cleartextStream.authorized ? &apos;authorized&apos; : &apos;unauthorized&apos;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&apos;utf8&apos;);\ncleartextStream.on(&apos;data&apos;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&apos;end&apos;, function() {\n  server.close();\n});</code></pre>\n<p>Or\n\n</p>\n<pre class='sh_javascript'><code>var tls = require(&apos;tls&apos;);\nvar fs = require(&apos;fs&apos;);\n\nvar options = {\n  pfx: fs.readFileSync(&apos;client.pfx&apos;)\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&apos;client connected&apos;,\n              cleartextStream.authorized ? &apos;authorized&apos; : &apos;unauthorized&apos;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&apos;utf8&apos;);\ncleartextStream.on(&apos;data&apos;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&apos;end&apos;, function() {\n  server.close();\n});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "port"
                        },
                        {
                            "name": "host",
                            "optional": true
                        },
                        {
                            "name": "options",
                            "optional": true
                        },
                        {
                            "name": "secureConnectListener",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "tls.createSecurePair([credentials], [isServer], [requestCert], [rejectUnauthorized])",
            "type": "method",
            "name": "createSecurePair",
            "desc": "<p>Creates a new secure pair object with two streams, one of which reads/writes\nencrypted data, and one reads/writes cleartext data.\nGenerally the encrypted one is piped to/from an incoming encrypted data stream,\nand the cleartext one is used as a replacement for the initial encrypted stream.\n\n</p>\n<ul>\n<li><p><code>credentials</code>: A credentials object from crypto.createCredentials( ... )</p>\n</li>\n<li><p><code>isServer</code>: A boolean indicating whether this tls connection should be\nopened as a server or a client.</p>\n</li>\n<li><p><code>requestCert</code>: A boolean indicating whether a server should request a\ncertificate from a connecting client. Only applies to server connections.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: A boolean indicating whether a server should\nautomatically reject clients with invalid certificates. Only applies to\nservers with <code>requestCert</code> enabled.</p>\n</li>\n</ul>\n<p><code>tls.createSecurePair()</code> returns a SecurePair object with [cleartext][] and\n<code>encrypted</code> stream properties.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "credentials",
                            "optional": true
                        },
                        {
                            "name": "isServer",
                            "optional": true
                        },
                        {
                            "name": "requestCert",
                            "optional": true
                        },
                        {
                            "name": "rejectUnauthorized",
                            "optional": true
                        }
                    ]
                }
            ]
        }
    ],
    "classes": [
        {
            "textRaw": "Class: SecurePair",
            "type": "class",
            "name": "SecurePair",
            "desc": "<p>Returned by tls.createSecurePair.\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'secure'",
                    "type": "event",
                    "name": "secure",
                    "desc": "<p>The event is emitted from the SecurePair once the pair has successfully\nestablished a secure connection.\n\n</p>\n<p>Similarly to the checking for the server &apos;secureConnection&apos; event,\npair.cleartext.authorized should be checked to confirm whether the certificate\nused properly authorized.\n\n</p>\n",
                    "params": []
                }
            ]
        },
        {
            "textRaw": "Class: tls.Server",
            "type": "class",
            "name": "tls.Server",
            "desc": "<p>This class is a subclass of <code>net.Server</code> and has the same methods on it.\nInstead of accepting just raw TCP connections, this accepts encrypted\nconnections using TLS or SSL.\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'secureConnection'",
                    "type": "event",
                    "name": "secureConnection",
                    "desc": "<p><code>function (cleartextStream) {}</code>\n\n</p>\n<p>This event is emitted after a new connection has been successfully\nhandshaked. The argument is a instance of [CleartextStream][]. It has all the\ncommon stream methods and events.\n\n</p>\n<p><code>cleartextStream.authorized</code> is a boolean value which indicates if the\nclient has verified by one of the supplied certificate authorities for the\nserver. If <code>cleartextStream.authorized</code> is false, then\n<code>cleartextStream.authorizationError</code> is set to describe how authorization\nfailed. Implied but worth mentioning: depending on the settings of the TLS\nserver, you unauthorized connections may be accepted.\n<code>cleartextStream.npnProtocol</code> is a string containing selected NPN protocol.\n<code>cleartextStream.servername</code> is a string containing servername requested with\nSNI.\n\n\n</p>\n",
                    "params": []
                },
                {
                    "textRaw": "Event: 'clientError'",
                    "type": "event",
                    "name": "clientError",
                    "desc": "<p><code>function (exception) { }</code>\n\n</p>\n<p>When a client connection emits an &apos;error&apos; event before secure connection is\nestablished - it will be forwarded here.\n\n\n</p>\n",
                    "params": []
                }
            ],
            "methods": [
                {
                    "textRaw": "server.listen(port, [host], [callback])",
                    "type": "method",
                    "name": "listen",
                    "desc": "<p>Begin accepting connections on the specified <code>port</code> and <code>host</code>.  If the\n<code>host</code> is omitted, the server will accept connections directed to any\nIPv4 address (<code>INADDR_ANY</code>).\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be called\nwhen the server has been bound.\n\n</p>\n<p>See <code>net.Server</code> for more information.\n\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "port"
                                },
                                {
                                    "name": "host",
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
                    "textRaw": "server.close()",
                    "type": "method",
                    "name": "close",
                    "desc": "<p>Stops the server from accepting new connections. This function is\nasynchronous, the server is finally closed when the server emits a <code>&apos;close&apos;</code>\nevent.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "server.address()",
                    "type": "method",
                    "name": "address",
                    "desc": "<p>Returns the bound address, the address family name and port of the\nserver as reported by the operating system.  See [net.Server.address()][] for\nmore information.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "server.addContext(hostname, credentials)",
                    "type": "method",
                    "name": "addContext",
                    "desc": "<p>Add secure context that will be used if client request&apos;s SNI hostname is\nmatching passed <code>hostname</code> (wildcards can be used). <code>credentials</code> can contain\n<code>key</code>, <code>cert</code> and <code>ca</code>.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "hostname"
                                },
                                {
                                    "name": "credentials"
                                }
                            ]
                        }
                    ]
                }
            ],
            "properties": [
                {
                    "textRaw": "server.maxConnections",
                    "name": "maxConnections",
                    "desc": "<p>Set this property to reject connections when the server&apos;s connection count\ngets high.\n\n</p>\n"
                },
                {
                    "textRaw": "server.connections",
                    "name": "connections",
                    "desc": "<p>The number of concurrent connections on the server.\n\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "Class: tls.CleartextStream",
            "type": "class",
            "name": "tls.CleartextStream",
            "desc": "<p>This is a stream on top of the <em>Encrypted</em> stream that makes it possible to\nread/write an encrypted data as a cleartext data.\n\n</p>\n<p>This instance implements a duplex [Stream][] interfaces.  It has all the\ncommon stream methods and events.\n\n</p>\n<p>A ClearTextStream is the <code>clear</code> member of a SecurePair object.\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'secureConnect'",
                    "type": "event",
                    "name": "secureConnect",
                    "desc": "<p>This event is emitted after a new connection has been successfully handshaked. \nThe listener will be called no matter if the server&apos;s certificate was\nauthorized or not. It is up to the user to test <code>cleartextStream.authorized</code>\nto see if the server certificate was signed by one of the specified CAs.\nIf <code>cleartextStream.authorized === false</code> then the error can be found in\n<code>cleartextStream.authorizationError</code>. Also if NPN was used - you can check\n<code>cleartextStream.npnProtocol</code> for negotiated protocol.\n\n</p>\n",
                    "params": []
                }
            ],
            "properties": [
                {
                    "textRaw": "cleartextStream.authorized",
                    "name": "authorized",
                    "desc": "<p>A boolean that is <code>true</code> if the peer certificate was signed by one of the\nspecified CAs, otherwise <code>false</code>\n\n</p>\n"
                },
                {
                    "textRaw": "cleartextStream.authorizationError",
                    "name": "authorizationError",
                    "desc": "<p>The reason why the peer&apos;s certificate has not been verified. This property\nbecomes available only when <code>cleartextStream.authorized === false</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "cleartextStream.remoteAddress",
                    "name": "remoteAddress",
                    "desc": "<p>The string representation of the remote IP address. For example,\n<code>&apos;74.125.127.100&apos;</code> or <code>&apos;2001:4860:a005::68&apos;</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "cleartextStream.remotePort",
                    "name": "remotePort",
                    "desc": "<p>The numeric representation of the remote port. For example, <code>443</code>.\n\n</p>\n"
                }
            ],
            "methods": [
                {
                    "textRaw": "cleartextStream.getPeerCertificate()",
                    "type": "method",
                    "name": "getPeerCertificate",
                    "desc": "<p>Returns an object representing the peer&apos;s certificate. The returned object has\nsome properties corresponding to the field of the certificate.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>{ subject: \n   { C: &apos;UK&apos;,\n     ST: &apos;Acknack Ltd&apos;,\n     L: &apos;Rhys Jones&apos;,\n     O: &apos;node.js&apos;,\n     OU: &apos;Test TLS Certificate&apos;,\n     CN: &apos;localhost&apos; },\n  issuer: \n   { C: &apos;UK&apos;,\n     ST: &apos;Acknack Ltd&apos;,\n     L: &apos;Rhys Jones&apos;,\n     O: &apos;node.js&apos;,\n     OU: &apos;Test TLS Certificate&apos;,\n     CN: &apos;localhost&apos; },\n  valid_from: &apos;Nov 11 09:52:22 2009 GMT&apos;,\n  valid_to: &apos;Nov  6 09:52:22 2029 GMT&apos;,\n  fingerprint: &apos;2A:7A:C2:DD:E5:F9:CC:53:72:35:99:7A:02:5A:71:38:52:EC:8A:DF&apos; }</code></pre>\n<p>If the peer does not provide a certificate, it returns <code>null</code> or an empty\nobject.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "cleartextStream.getCipher()",
                    "type": "method",
                    "name": "getCipher",
                    "desc": "<p>Returns an object representing the cipher name and the SSL/TLS\nprotocol version of the current connection.\n\n</p>\n<p>Example:\n{ name: &apos;AES256-SHA&apos;, version: &apos;TLSv1/SSLv3&apos; }\n\n</p>\n<p>See SSL_CIPHER_get_name() and SSL_CIPHER_get_version() in\n<a href=\"http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS\">http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS</a> for more\ninformation.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                },
                {
                    "textRaw": "cleartextStream.address()",
                    "type": "method",
                    "name": "address",
                    "desc": "<p>Returns the bound address, the address family name and port of the\nunderlying socket as reported by the operating system. Returns an\nobject with three properties, e.g.\n<code>{ port: 12346, family: &apos;IPv4&apos;, address: &apos;127.0.0.1&apos; }</code>\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                }
            ]
        }
    ],
    "type": "module",
    "displayName": "TLS (SSL)"
}
});
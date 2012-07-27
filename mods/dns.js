define(function(require, exports, module) {
    module.exports = {
    "textRaw": "DNS",
    "name": "dns",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>Use <code>require(&apos;dns&apos;)</code> to access this module. All methods in the dns module\nuse C-Ares except for <code>dns.lookup</code> which uses <code>getaddrinfo(3)</code> in a thread\npool. C-Ares is much faster than <code>getaddrinfo</code> but the system resolver is\nmore constant with how other programs operate. When a user does\n<code>net.connect(80, &apos;google.com&apos;)</code> or <code>http.get({ host: &apos;google.com&apos; })</code> the\n<code>dns.lookup</code> method is used. Users who need to do a large number of look ups\nquickly should use the methods that go through C-Ares.\n\n</p>\n<p>Here is an example which resolves <code>&apos;www.google.com&apos;</code> then reverse\nresolves the IP addresses which are returned.\n\n</p>\n<pre class='sh_javascript'><code>var dns = require(&apos;dns&apos;);\n\ndns.resolve4(&apos;www.google.com&apos;, function (err, addresses) {\n  if (err) throw err;\n\n  console.log(&apos;addresses: &apos; + JSON.stringify(addresses));\n\n  addresses.forEach(function (a) {\n    dns.reverse(a, function (err, domains) {\n      if (err) {\n        throw err;\n      }\n\n      console.log(&apos;reverse for &apos; + a + &apos;: &apos; + JSON.stringify(domains));\n    });\n  });\n});</code></pre>\n",
    "methods": [
        {
            "textRaw": "dns.lookup(domain, [family], callback)",
            "type": "method",
            "name": "lookup",
            "desc": "<p>Resolves a domain (e.g. <code>&apos;google.com&apos;</code>) into the first found A (IPv4) or\nAAAA (IPv6) record.\nThe <code>family</code> can be the integer <code>4</code> or <code>6</code>. Defaults to <code>null</code> that indicates\nboth Ip v4 and v6 address family.\n\n</p>\n<p>The callback has arguments <code>(err, address, family)</code>.  The <code>address</code> argument\nis a string representation of a IP v4 or v6 address. The <code>family</code> argument\nis either the integer 4 or 6 and denotes the family of <code>address</code> (not\nnecessarily the value initially passed to <code>lookup</code>).\n\n</p>\n<p>On error, <code>err</code> is an <code>Error</code> object, where <code>err.code</code> is the error code.\nKeep in mind that <code>err.code</code> will be set to <code>&apos;ENOENT&apos;</code> not only when\nthe domain does not exist but also when the lookup fails in other ways\nsuch as no available file descriptors.\n\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "family",
                            "optional": true
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolve(domain, [rrtype], callback)",
            "type": "method",
            "name": "resolve",
            "desc": "<p>Resolves a domain (e.g. <code>&apos;google.com&apos;</code>) into an array of the record types\nspecified by rrtype. Valid rrtypes are <code>&apos;A&apos;</code> (IPV4 addresses, default),\n<code>&apos;AAAA&apos;</code> (IPV6 addresses), <code>&apos;MX&apos;</code> (mail exchange records), <code>&apos;TXT&apos;</code> (text\nrecords), <code>&apos;SRV&apos;</code> (SRV records), <code>&apos;PTR&apos;</code> (used for reverse IP lookups),\n<code>&apos;NS&apos;</code> (name server records) and <code>&apos;CNAME&apos;</code> (canonical name records).\n\n</p>\n<p>The callback has arguments <code>(err, addresses)</code>.  The type of each item\nin <code>addresses</code> is determined by the record type, and described in the\ndocumentation for the corresponding lookup methods below.\n\n</p>\n<p>On error, <code>err</code> is an <code>Error</code> object, where <code>err.code</code> is\none of the error codes listed below.\n\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "rrtype",
                            "optional": true
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolve4(domain, callback)",
            "type": "method",
            "name": "resolve4",
            "desc": "<p>The same as <code>dns.resolve()</code>, but only for IPv4 queries (<code>A</code> records).\n<code>addresses</code> is an array of IPv4 addresses (e.g.\n<code>[&apos;74.125.79.104&apos;, &apos;74.125.79.105&apos;, &apos;74.125.79.106&apos;]</code>).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolve6(domain, callback)",
            "type": "method",
            "name": "resolve6",
            "desc": "<p>The same as <code>dns.resolve4()</code> except for IPv6 queries (an <code>AAAA</code> query).\n\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolveMx(domain, callback)",
            "type": "method",
            "name": "resolveMx",
            "desc": "<p>The same as <code>dns.resolve()</code>, but only for mail exchange queries (<code>MX</code> records).\n\n</p>\n<p><code>addresses</code> is an array of MX records, each with a priority and an exchange\nattribute (e.g. <code>[{&apos;priority&apos;: 10, &apos;exchange&apos;: &apos;mx.example.com&apos;},...]</code>).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolveTxt(domain, callback)",
            "type": "method",
            "name": "resolveTxt",
            "desc": "<p>The same as <code>dns.resolve()</code>, but only for text queries (<code>TXT</code> records).\n<code>addresses</code> is an array of the text records available for <code>domain</code> (e.g.,\n<code>[&apos;v=spf1 ip4:0.0.0.0 ~all&apos;]</code>).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolveSrv(domain, callback)",
            "type": "method",
            "name": "resolveSrv",
            "desc": "<p>The same as <code>dns.resolve()</code>, but only for service records (<code>SRV</code> records).\n<code>addresses</code> is an array of the SRV records available for <code>domain</code>. Properties\nof SRV records are priority, weight, port, and name (e.g.,\n<code>[{&apos;priority&apos;: 10, {&apos;weight&apos;: 5, &apos;port&apos;: 21223, &apos;name&apos;: &apos;service.example.com&apos;}, ...]</code>).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolveNs(domain, callback)",
            "type": "method",
            "name": "resolveNs",
            "desc": "<p>The same as <code>dns.resolve()</code>, but only for name server records (<code>NS</code> records).\n<code>addresses</code> is an array of the name server records available for <code>domain</code>\n(e.g., <code>[&apos;ns1.example.com&apos;, &apos;ns2.example.com&apos;]</code>).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.resolveCname(domain, callback)",
            "type": "method",
            "name": "resolveCname",
            "desc": "<p>The same as <code>dns.resolve()</code>, but only for canonical name records (<code>CNAME</code>\nrecords). <code>addresses</code> is an array of the canonical name records available for\n<code>domain</code> (e.g., <code>[&apos;bar.example.com&apos;]</code>).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "domain"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "dns.reverse(ip, callback)",
            "type": "method",
            "name": "reverse",
            "desc": "<p>Reverse resolves an ip address to an array of domain names.\n\n</p>\n<p>The callback has arguments <code>(err, domains)</code>.\n\n</p>\n<p>On error, <code>err</code> is an <code>Error</code> object, where <code>err.code</code> is\none of the error codes listed below.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "ip"
                        },
                        {
                            "name": "callback"
                        }
                    ]
                }
            ]
        }
    ],
    "modules": [
        {
            "textRaw": "Error codes",
            "name": "error_codes",
            "desc": "<p>Each DNS query can return one of the following error codes:\n\n</p>\n<ul>\n<li><code>dns.NODATA</code>: DNS server returned answer with no data.</li>\n<li><code>dns.FORMERR</code>: DNS server claims query was misformatted.</li>\n<li><code>dns.SERVFAIL</code>: DNS server returned general failure.</li>\n<li><code>dns.NOTFOUND</code>: Domain name not found.</li>\n<li><code>dns.NOTIMP</code>: DNS server does not implement requested operation.</li>\n<li><code>dns.REFUSED</code>: DNS server refused query.</li>\n<li><code>dns.BADQUERY</code>: Misformatted DNS query.</li>\n<li><code>dns.BADNAME</code>: Misformatted domain name.</li>\n<li><code>dns.BADFAMILY</code>: Unsupported address family.</li>\n<li><code>dns.BADRESP</code>: Misformatted DNS reply.</li>\n<li><code>dns.CONNREFUSED</code>: Could not contact DNS servers.</li>\n<li><code>dns.TIMEOUT</code>: Timeout while contacting DNS servers.</li>\n<li><code>dns.EOF</code>: End of file.</li>\n<li><code>dns.FILE</code>: Error reading file.</li>\n<li><code>dns.NOMEM</code>: Out of memory.</li>\n<li><code>dns.DESTRUCTION</code>: Channel is being destroyed.</li>\n<li><code>dns.BADSTR</code>: Misformatted string.</li>\n<li><code>dns.BADFLAGS</code>: Illegal flags specified.</li>\n<li><code>dns.NONAME</code>: Given hostname is not numeric.</li>\n<li><code>dns.BADHINTS</code>: Illegal hints flags specified.</li>\n<li><code>dns.NOTINITIALIZED</code>: c-ares library initialization not yet performed.</li>\n<li><code>dns.LOADIPHLPAPI</code>: Error loading iphlpapi.dll.</li>\n<li><code>dns.ADDRGETNETWORKPARAMS</code>: Could not find GetNetworkParams function.</li>\n<li><code>dns.CANCELLED</code>: DNS query cancelled.</li>\n</ul>\n",
            "type": "module",
            "displayName": "Error codes"
        }
    ],
    "type": "module",
    "displayName": "DNS"
}
});
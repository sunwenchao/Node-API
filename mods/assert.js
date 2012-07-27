define(function(require, exports, module) {
    module.exports = {
    "textRaw": "Assert",
    "name": "assert",
    "stability": 5,
    "stabilityText": "Locked",
    "desc": "<p>This module is used for writing unit tests for your applications, you can\naccess it with <code>require(&apos;assert&apos;)</code>.\n\n</p>\n",
    "methods": [
        {
            "textRaw": "assert.fail(actual, expected, message, operator)",
            "type": "method",
            "name": "fail",
            "desc": "<p>Throws an exception that displays the values for <code>actual</code> and <code>expected</code> separated by the provided operator.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message"
                        },
                        {
                            "name": "operator"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert(value, message), assert.ok(value, [message])",
            "type": "method",
            "name": "ok",
            "desc": "<p>Tests if value is truthy, it is equivalent to <code>assert.equal(true, !!value, message);</code>\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "value"
                        },
                        {
                            "name": "message)"
                        },
                        {
                            "name": "assert.ok(value"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.equal(actual, expected, [message])",
            "type": "method",
            "name": "equal",
            "desc": "<p>Tests shallow, coercive equality with the equal comparison operator ( <code>==</code> ).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.notEqual(actual, expected, [message])",
            "type": "method",
            "name": "notEqual",
            "desc": "<p>Tests shallow, coercive non-equality with the not equal comparison operator ( <code>!=</code> ).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.deepEqual(actual, expected, [message])",
            "type": "method",
            "name": "deepEqual",
            "desc": "<p>Tests for deep equality.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.notDeepEqual(actual, expected, [message])",
            "type": "method",
            "name": "notDeepEqual",
            "desc": "<p>Tests for any deep inequality.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.strictEqual(actual, expected, [message])",
            "type": "method",
            "name": "strictEqual",
            "desc": "<p>Tests strict equality, as determined by the strict equality operator ( <code>===</code> )\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.notStrictEqual(actual, expected, [message])",
            "type": "method",
            "name": "notStrictEqual",
            "desc": "<p>Tests strict non-equality, as determined by the strict not equal operator ( <code>!==</code> )\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "actual"
                        },
                        {
                            "name": "expected"
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.throws(block, [error], [message])",
            "type": "method",
            "name": "throws",
            "desc": "<p>Expects <code>block</code> to throw an error. <code>error</code> can be constructor, regexp or \nvalidation function.\n\n</p>\n<p>Validate instanceof using constructor:\n\n</p>\n<pre class='sh_javascript'><code>assert.throws(\n  function() {\n    throw new Error(&quot;Wrong value&quot;);\n  },\n  Error\n);</code></pre>\n<p>Validate error message using RegExp:\n\n</p>\n<pre class='sh_javascript'><code>assert.throws(\n  function() {\n    throw new Error(&quot;Wrong value&quot;);\n  },\n  /value/\n);</code></pre>\n<p>Custom error validation:\n\n</p>\n<pre class='sh_javascript'><code>assert.throws(\n  function() {\n    throw new Error(&quot;Wrong value&quot;);\n  },\n  function(err) {\n    if ( (err instanceof Error) &amp;&amp; /value/.test(err) ) {\n      return true;\n    }\n  },\n  &quot;unexpected error&quot;\n);</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "block"
                        },
                        {
                            "name": "error",
                            "optional": true
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.doesNotThrow(block, [error], [message])",
            "type": "method",
            "name": "doesNotThrow",
            "desc": "<p>Expects <code>block</code> not to throw an error, see assert.throws for details.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "block"
                        },
                        {
                            "name": "error",
                            "optional": true
                        },
                        {
                            "name": "message",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "assert.ifError(value)",
            "type": "method",
            "name": "ifError",
            "desc": "<p>Tests if value is not a false value, throws if it is a true value. Useful when\ntesting the first argument, <code>error</code> in callbacks.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "value"
                        }
                    ]
                }
            ]
        }
    ],
    "type": "module",
    "displayName": "Assert"
}
});
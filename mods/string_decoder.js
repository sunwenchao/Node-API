define(function(require, exports, module) {
    module.exports = {
    "textRaw": "StringDecoder",
    "name": "stringdecoder",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>To use this module, do <code>require(&apos;string_decoder&apos;)</code>. StringDecoder decodes a\nbuffer to a string. It is a simple interface to <code>buffer.toString()</code> but provides\nadditional support for utf8.\n\n</p>\n<pre class='sh_javascript'><code>var StringDecoder = require(&apos;string_decoder&apos;).StringDecoder;\nvar decoder = new StringDecoder(&apos;utf8&apos;);\n\nvar cent = new Buffer([0xC2, 0xA2]);\nconsole.log(decoder.write(cent));\n\nvar euro = new Buffer([0xE2, 0x82, 0xAC]);\nconsole.log(decoder.write(euro));</code></pre>\n",
    "classes": [
        {
            "textRaw": "Class: StringDecoder",
            "type": "class",
            "name": "StringDecoder",
            "desc": "<p>Accepts a single argument, <code>encoding</code> which defaults to <code>utf8</code>.\n\n</p>\n",
            "methods": [
                {
                    "textRaw": "StringDecoder.write(buffer)",
                    "type": "method",
                    "name": "write",
                    "desc": "<p>Returns a decoded string.\n</p>\n",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "name": "buffer"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "type": "module",
    "displayName": "StringDecoder"
}
});
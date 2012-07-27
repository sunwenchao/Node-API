define(function(require, exports, module) {
    module.exports = {
    "textRaw": "Buffer",
    "name": "buffer",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>Pure JavaScript is Unicode friendly but not nice to binary data.  When\ndealing with TCP streams or the file system, it&apos;s necessary to handle octet\nstreams. Node has several strategies for manipulating, creating, and\nconsuming octet streams.\n\n</p>\n<p>Raw data is stored in instances of the <code>Buffer</code> class. A <code>Buffer</code> is similar\nto an array of integers but corresponds to a raw memory allocation outside\nthe V8 heap. A <code>Buffer</code> cannot be resized.\n\n</p>\n<p>The <code>Buffer</code> class is a global, making it very rare that one would need\nto ever <code>require(&apos;buffer&apos;)</code>.\n\n</p>\n<p>Converting between Buffers and JavaScript string objects requires an explicit\nencoding method.  Here are the different string encodings.\n\n</p>\n<ul>\n<li><p><code>&apos;ascii&apos;</code> - for 7 bit ASCII data only.  This encoding method is very fast, and\nwill strip the high bit if set.\nNote that this encoding converts a null character (<code>&apos;\\0&apos;</code> or <code>&apos;\\u0000&apos;</code>) into\n<code>0x20</code> (character code of a space). If you want to convert a null character\ninto <code>0x00</code>, you should use <code>&apos;utf8&apos;</code>.</p>\n</li>\n<li><p><code>&apos;utf8&apos;</code> - Multibyte encoded Unicode characters. Many web pages and other\ndocument formats use UTF-8.</p>\n</li>\n<li><p><code>&apos;utf16le&apos;</code> - 2 or 4 bytes, little endian encoded Unicode characters.\nSurrogate pairs (U+10000 to U+10FFFF) are supported.</p>\n</li>\n<li><p><code>&apos;ucs2&apos;</code> - Alias of <code>&apos;utf16le&apos;</code>.</p>\n</li>\n<li><p><code>&apos;base64&apos;</code> - Base64 string encoding.</p>\n</li>\n<li><p><code>&apos;binary&apos;</code> - A way of encoding raw binary data into strings by using only\nthe first 8 bits of each character. This encoding method is deprecated and\nshould be avoided in favor of <code>Buffer</code> objects where possible. This encoding\nwill be removed in future versions of Node.</p>\n</li>\n<li><p><code>&apos;hex&apos;</code> - Encode each byte as two hexadecimal characters.</p>\n</li>\n</ul>\n",
    "classes": [
        {
            "textRaw": "Class: Buffer",
            "type": "class",
            "name": "Buffer",
            "desc": "<p>The Buffer class is a global type for dealing with binary data directly.\nIt can be constructed in a variety of ways.\n\n</p>\n",
            "methods": [
                {
                    "textRaw": "buf.write(string, [offset], [length], [encoding])",
                    "type": "method",
                    "name": "write",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`string` String - data to be written to buffer ",
                                    "name": "string",
                                    "desc": "String - data to be written to buffer"
                                },
                                {
                                    "textRaw": "`offset` Number, Optional, Default: 0 ",
                                    "name": "offset",
                                    "desc": "Number, Optional, Default: 0",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`length` Number, Optional, Default: `buffer.length - offset` ",
                                    "name": "length",
                                    "desc": "Number, Optional, Default: `buffer.length - offset`",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`encoding` String, Optional, Default: 'utf8' ",
                                    "name": "encoding",
                                    "desc": "String, Optional, Default: 'utf8'",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "string"
                                },
                                {
                                    "name": "offset",
                                    "optional": true
                                },
                                {
                                    "name": "length",
                                    "optional": true
                                },
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>string</code> to the buffer at <code>offset</code> using the given encoding.\n<code>offset</code> defaults to <code>0</code>, <code>encoding</code> defaults to <code>&apos;utf8&apos;</code>. <code>length</code> is\nthe number of bytes to write. Returns number of octets written. If <code>buffer</code> did\nnot contain enough space to fit the entire string, it will write a partial\namount of the string. <code>length</code> defaults to <code>buffer.length - offset</code>.\nThe method will not write partial characters.\n\n</p>\n<pre class='sh_javascript'><code>buf = new Buffer(256);\nlen = buf.write(&apos;\\u00bd + \\u00bc = \\u00be&apos;, 0);\nconsole.log(len + &quot; bytes: &quot; + buf.toString(&apos;utf8&apos;, 0, len));</code></pre>\n<p>The number of characters written (which may be different than the number of\nbytes written) is set in <code>Buffer._charsWritten</code> and will be overwritten the\nnext time <code>buf.write()</code> is called.\n\n\n</p>\n"
                },
                {
                    "textRaw": "buf.toString([encoding], [start], [end])",
                    "type": "method",
                    "name": "toString",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`encoding` String, Optional, Default: 'utf8' ",
                                    "name": "encoding",
                                    "desc": "String, Optional, Default: 'utf8'",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`start` Number, Optional, Default: 0 ",
                                    "name": "start",
                                    "desc": "Number, Optional, Default: 0",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`end` Number, Optional, Default: `buffer.length` ",
                                    "name": "end",
                                    "desc": "Number, Optional, Default: `buffer.length`",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "encoding",
                                    "optional": true
                                },
                                {
                                    "name": "start",
                                    "optional": true
                                },
                                {
                                    "name": "end",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Decodes and returns a string from buffer data encoded with <code>encoding</code>\n(defaults to <code>&apos;utf8&apos;</code>) beginning at <code>start</code> (defaults to <code>0</code>) and ending at\n<code>end</code> (defaults to <code>buffer.length</code>).\n\n</p>\n<p>See <code>buffer.write()</code> example, above.\n\n\n</p>\n"
                },
                {
                    "textRaw": "buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])",
                    "type": "method",
                    "name": "copy",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`targetBuffer` Buffer object - Buffer to copy into ",
                                    "name": "targetBuffer",
                                    "desc": "Buffer object - Buffer to copy into"
                                },
                                {
                                    "textRaw": "`targetStart` Number, Optional, Default: 0 ",
                                    "name": "targetStart",
                                    "desc": "Number, Optional, Default: 0",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`sourceStart` Number, Optional, Default: 0 ",
                                    "name": "sourceStart",
                                    "desc": "Number, Optional, Default: 0",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`sourceEnd` Number, Optional, Default: `buffer.length` ",
                                    "name": "sourceEnd",
                                    "desc": "Number, Optional, Default: `buffer.length`",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "targetBuffer"
                                },
                                {
                                    "name": "targetStart",
                                    "optional": true
                                },
                                {
                                    "name": "sourceStart",
                                    "optional": true
                                },
                                {
                                    "name": "sourceEnd",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Does copy between buffers. The source and target regions can be overlapped.\n<code>targetStart</code> and <code>sourceStart</code> default to <code>0</code>.\n<code>sourceEnd</code> defaults to <code>buffer.length</code>.\n\n</p>\n<p>Example: build two Buffers, then copy <code>buf1</code> from byte 16 through byte 19\ninto <code>buf2</code>, starting at the 8th byte in <code>buf2</code>.\n\n</p>\n<pre class='sh_javascript'><code>buf1 = new Buffer(26);\nbuf2 = new Buffer(26);\n\nfor (var i = 0 ; i &lt; 26 ; i++) {\n  buf1[i] = i + 97; // 97 is ASCII a\n  buf2[i] = 33; // ASCII !\n}\n\nbuf1.copy(buf2, 8, 16, 20);\nconsole.log(buf2.toString(&apos;ascii&apos;, 0, 25));\n\n// !!!!!!!!qrst!!!!!!!!!!!!!</code></pre>\n"
                },
                {
                    "textRaw": "buf.slice([start], [end])",
                    "type": "method",
                    "name": "slice",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`start` Number, Optional, Default: 0 ",
                                    "name": "start",
                                    "desc": "Number, Optional, Default: 0",
                                    "optional": true
                                },
                                {
                                    "textRaw": "`end` Number, Optional, Default: `buffer.length` ",
                                    "name": "end",
                                    "desc": "Number, Optional, Default: `buffer.length`",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "start",
                                    "optional": true
                                },
                                {
                                    "name": "end",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Returns a new buffer which references the same memory as the old, but offset\nand cropped by the <code>start</code> (defaults to <code>0</code>) and <code>end</code> (defaults to\n<code>buffer.length</code>) indexes.\n\n</p>\n<p><strong>Modifying the new buffer slice will modify memory in the original buffer!</strong>\n\n</p>\n<p>Example: build a Buffer with the ASCII alphabet, take a slice, then modify one\nbyte from the original Buffer.\n\n</p>\n<pre class='sh_javascript'><code>var buf1 = new Buffer(26);\n\nfor (var i = 0 ; i &lt; 26 ; i++) {\n  buf1[i] = i + 97; // 97 is ASCII a\n}\n\nvar buf2 = buf1.slice(0, 3);\nconsole.log(buf2.toString(&apos;ascii&apos;, 0, buf2.length));\nbuf1[0] = 33;\nconsole.log(buf2.toString(&apos;ascii&apos;, 0, buf2.length));\n\n// abc\n// !bc</code></pre>\n"
                },
                {
                    "textRaw": "buf.readUInt8(offset, [noAssert])",
                    "type": "method",
                    "name": "readUInt8",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads an unsigned 8 bit integer from the buffer at the specified offset.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nfor (ii = 0; ii &lt; buf.length; ii++) {\n  console.log(buf.readUInt8(ii));\n}\n\n// 0x3\n// 0x4\n// 0x23\n// 0x42</code></pre>\n"
                },
                {
                    "textRaw": "buf.readUInt16LE(offset, [noAssert])",
                    "type": "method",
                    "name": "readUInt16LE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads an unsigned 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt16BE(0));\nconsole.log(buf.readUInt16LE(0));\nconsole.log(buf.readUInt16BE(1));\nconsole.log(buf.readUInt16LE(1));\nconsole.log(buf.readUInt16BE(2));\nconsole.log(buf.readUInt16LE(2));\n\n// 0x0304\n// 0x0403\n// 0x0423\n// 0x2304\n// 0x2342\n// 0x4223</code></pre>\n"
                },
                {
                    "textRaw": "buf.readUInt16BE(offset, [noAssert])",
                    "type": "method",
                    "name": "readUInt16BE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads an unsigned 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt16BE(0));\nconsole.log(buf.readUInt16LE(0));\nconsole.log(buf.readUInt16BE(1));\nconsole.log(buf.readUInt16LE(1));\nconsole.log(buf.readUInt16BE(2));\nconsole.log(buf.readUInt16LE(2));\n\n// 0x0304\n// 0x0403\n// 0x0423\n// 0x2304\n// 0x2342\n// 0x4223</code></pre>\n"
                },
                {
                    "textRaw": "buf.readUInt32LE(offset, [noAssert])",
                    "type": "method",
                    "name": "readUInt32LE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads an unsigned 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt32BE(0));\nconsole.log(buf.readUInt32LE(0));\n\n// 0x03042342\n// 0x42230403</code></pre>\n"
                },
                {
                    "textRaw": "buf.readUInt32BE(offset, [noAssert])",
                    "type": "method",
                    "name": "readUInt32BE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads an unsigned 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt32BE(0));\nconsole.log(buf.readUInt32LE(0));\n\n// 0x03042342\n// 0x42230403</code></pre>\n"
                },
                {
                    "textRaw": "buf.readInt8(offset, [noAssert])",
                    "type": "method",
                    "name": "readInt8",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a signed 8 bit integer from the buffer at the specified offset.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt8</code>, except buffer contents are treated as two&apos;s\ncomplement signed values.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.readInt16LE(offset, [noAssert])",
                    "type": "method",
                    "name": "readInt16LE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a signed 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt16*</code>, except buffer contents are treated as two&apos;s\ncomplement signed values.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.readInt16BE(offset, [noAssert])",
                    "type": "method",
                    "name": "readInt16BE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a signed 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt16*</code>, except buffer contents are treated as two&apos;s\ncomplement signed values.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.readInt32LE(offset, [noAssert])",
                    "type": "method",
                    "name": "readInt32LE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a signed 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt32*</code>, except buffer contents are treated as two&apos;s\ncomplement signed values.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.readInt32BE(offset, [noAssert])",
                    "type": "method",
                    "name": "readInt32BE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a signed 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt32*</code>, except buffer contents are treated as two&apos;s\ncomplement signed values.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.readFloatLE(offset, [noAssert])",
                    "type": "method",
                    "name": "readFloatLE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a 32 bit float from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x00;\nbuf[1] = 0x00;\nbuf[2] = 0x80;\nbuf[3] = 0x3f;\n\nconsole.log(buf.readFloatLE(0));\n\n// 0x01</code></pre>\n"
                },
                {
                    "textRaw": "buf.readFloatBE(offset, [noAssert])",
                    "type": "method",
                    "name": "readFloatBE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a 32 bit float from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\n\nbuf[0] = 0x00;\nbuf[1] = 0x00;\nbuf[2] = 0x80;\nbuf[3] = 0x3f;\n\nconsole.log(buf.readFloatLE(0));\n\n// 0x01</code></pre>\n"
                },
                {
                    "textRaw": "buf.readDoubleLE(offset, [noAssert])",
                    "type": "method",
                    "name": "readDoubleLE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a 64 bit double from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(8);\n\nbuf[0] = 0x55;\nbuf[1] = 0x55;\nbuf[2] = 0x55;\nbuf[3] = 0x55;\nbuf[4] = 0x55;\nbuf[5] = 0x55;\nbuf[6] = 0xd5;\nbuf[7] = 0x3f;\n\nconsole.log(buf.readDoubleLE(0));\n\n// 0.3333333333333333</code></pre>\n"
                },
                {
                    "textRaw": "buf.readDoubleBE(offset, [noAssert])",
                    "type": "method",
                    "name": "readDoubleBE",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Reads a 64 bit double from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(8);\n\nbuf[0] = 0x55;\nbuf[1] = 0x55;\nbuf[2] = 0x55;\nbuf[3] = 0x55;\nbuf[4] = 0x55;\nbuf[5] = 0x55;\nbuf[6] = 0xd5;\nbuf[7] = 0x3f;\n\nconsole.log(buf.readDoubleLE(0));\n\n// 0.3333333333333333</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeUInt8(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeUInt8",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset. Note, <code>value</code> must be a\nvalid unsigned 8 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeUInt8(0x3, 0);\nbuf.writeUInt8(0x4, 1);\nbuf.writeUInt8(0x23, 2);\nbuf.writeUInt8(0x42, 3);\n\nconsole.log(buf);\n\n// &lt;Buffer 03 04 23 42&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeUInt16LE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeUInt16LE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeUInt16BE(0xdead, 0);\nbuf.writeUInt16BE(0xbeef, 2);\n\nconsole.log(buf);\n\nbuf.writeUInt16LE(0xdead, 0);\nbuf.writeUInt16LE(0xbeef, 2);\n\nconsole.log(buf);\n\n// &lt;Buffer de ad be ef&gt;\n// &lt;Buffer ad de ef be&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeUInt16BE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeUInt16BE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeUInt16BE(0xdead, 0);\nbuf.writeUInt16BE(0xbeef, 2);\n\nconsole.log(buf);\n\nbuf.writeUInt16LE(0xdead, 0);\nbuf.writeUInt16LE(0xbeef, 2);\n\nconsole.log(buf);\n\n// &lt;Buffer de ad be ef&gt;\n// &lt;Buffer ad de ef be&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeUInt32LE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeUInt32LE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeUInt32BE(0xfeedface, 0);\n\nconsole.log(buf);\n\nbuf.writeUInt32LE(0xfeedface, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer fe ed fa ce&gt;\n// &lt;Buffer ce fa ed fe&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeUInt32BE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeUInt32BE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeUInt32BE(0xfeedface, 0);\n\nconsole.log(buf);\n\nbuf.writeUInt32LE(0xfeedface, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer fe ed fa ce&gt;\n// &lt;Buffer ce fa ed fe&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeInt8(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeInt8",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset. Note, <code>value</code> must be a\nvalid signed 8 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt8</code>, except value is written out as a two&apos;s complement\nsigned integer into <code>buffer</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.writeInt16LE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeInt16LE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt16*</code>, except value is written out as a two&apos;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.writeInt16BE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeInt16BE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt16*</code>, except value is written out as a two&apos;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.writeInt32LE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeInt32LE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt32*</code>, except value is written out as a two&apos;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.writeInt32BE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeInt32BE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt32*</code>, except value is written out as a two&apos;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "buf.writeFloatLE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeFloatLE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid 32 bit float.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeFloatBE(0xcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeFloatLE(0xcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 4f 4a fe bb&gt;\n// &lt;Buffer bb fe 4a 4f&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeFloatBE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeFloatBE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid 32 bit float.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(4);\nbuf.writeFloatBE(0xcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeFloatLE(0xcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 4f 4a fe bb&gt;\n// &lt;Buffer bb fe 4a 4f&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeDoubleLE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeDoubleLE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid 64 bit double.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(8);\nbuf.writeDoubleBE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeDoubleLE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 43 eb d5 b7 dd f9 5f d7&gt;\n// &lt;Buffer d7 5f f9 dd b7 d5 eb 43&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.writeDoubleBE(value, offset, [noAssert])",
                    "type": "method",
                    "name": "writeDoubleBE",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` Number ",
                                    "name": "value",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`offset` Number ",
                                    "name": "offset",
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                                    "name": "noAssert",
                                    "desc": "Boolean, Optional, Default: false",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset"
                                },
                                {
                                    "name": "noAssert",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid 64 bit double.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var buf = new Buffer(8);\nbuf.writeDoubleBE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeDoubleLE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 43 eb d5 b7 dd f9 5f d7&gt;\n// &lt;Buffer d7 5f f9 dd b7 d5 eb 43&gt;</code></pre>\n"
                },
                {
                    "textRaw": "buf.fill(value, [offset], [end])",
                    "type": "method",
                    "name": "fill",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`value` ",
                                    "name": "value"
                                },
                                {
                                    "textRaw": "`offset` Number, Optional ",
                                    "name": "offset",
                                    "optional": true,
                                    "desc": "Number"
                                },
                                {
                                    "textRaw": "`end` Number, Optional ",
                                    "name": "end",
                                    "optional": true,
                                    "desc": "Number"
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "value"
                                },
                                {
                                    "name": "offset",
                                    "optional": true
                                },
                                {
                                    "name": "end",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Fills the buffer with the specified value. If the <code>offset</code> (defaults to <code>0</code>)\nand <code>end</code> (defaults to <code>buffer.length</code>) are not given it will fill the entire\nbuffer.\n\n</p>\n<pre class='sh_javascript'><code>var b = new Buffer(50);\nb.fill(&quot;h&quot;);</code></pre>\n"
                }
            ],
            "properties": [
                {
                    "textRaw": "buf[index]",
                    "name": "[index]",
                    "desc": "<p>Get and set the octet at <code>index</code>. The values refer to individual bytes,\nso the legal range is between <code>0x00</code> and <code>0xFF</code> hex or <code>0</code> and <code>255</code>.\n\n</p>\n<p>Example: copy an ASCII string into a buffer, one byte at a time:\n\n</p>\n<pre class='sh_javascript'><code>str = &quot;node.js&quot;;\nbuf = new Buffer(str.length);\n\nfor (var i = 0; i &lt; str.length ; i++) {\n  buf[i] = str.charCodeAt(i);\n}\n\nconsole.log(buf);\n\n// node.js</code></pre>\n"
                },
                {
                    "textRaw": "`length` Number ",
                    "name": "length",
                    "desc": "<p>The size of the buffer in bytes.  Note that this is not necessarily the size\nof the contents. <code>length</code> refers to the amount of memory allocated for the\nbuffer object.  It does not change when the contents of the buffer are changed.\n\n</p>\n<pre class='sh_javascript'><code>buf = new Buffer(1234);\n\nconsole.log(buf.length);\nbuf.write(&quot;some string&quot;, 0, &quot;ascii&quot;);\nconsole.log(buf.length);\n\n// 1234\n// 1234</code></pre>\n",
                    "shortDesc": "Number"
                }
            ],
            "classMethods": [
                {
                    "textRaw": "Class Method: Buffer.isBuffer(obj)",
                    "type": "classMethod",
                    "name": "isBuffer",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Boolean ",
                                "name": "return",
                                "desc": "Boolean"
                            },
                            "params": [
                                {
                                    "textRaw": "`obj` Object ",
                                    "name": "obj",
                                    "desc": "Object"
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "obj"
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Tests if <code>obj</code> is a <code>Buffer</code>.\n\n</p>\n"
                },
                {
                    "textRaw": "Class Method: Buffer.byteLength(string, [encoding])",
                    "type": "classMethod",
                    "name": "byteLength",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: Number ",
                                "name": "return",
                                "desc": "Number"
                            },
                            "params": [
                                {
                                    "textRaw": "`string` String ",
                                    "name": "string",
                                    "desc": "String"
                                },
                                {
                                    "textRaw": "`encoding` String, Optional, Default: 'utf8' ",
                                    "name": "encoding",
                                    "desc": "String, Optional, Default: 'utf8'",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "string"
                                },
                                {
                                    "name": "encoding",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Gives the actual byte length of a string. <code>encoding</code> defaults to <code>&apos;utf8&apos;</code>.\nThis is not the same as <code>String.prototype.length</code> since that returns the\nnumber of <em>characters</em> in a string.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>str = &apos;\\u00bd + \\u00bc = \\u00be&apos;;\n\nconsole.log(str + &quot;: &quot; + str.length + &quot; characters, &quot; +\n  Buffer.byteLength(str, &apos;utf8&apos;) + &quot; bytes&quot;);\n\n// ½ + ¼ = ¾: 9 characters, 12 bytes</code></pre>\n"
                },
                {
                    "textRaw": "Class Method: Buffer.concat(list, [totalLength])",
                    "type": "classMethod",
                    "name": "concat",
                    "signatures": [
                        {
                            "params": [
                                {
                                    "textRaw": "`list` {Array} List of Buffer objects to concat ",
                                    "name": "list",
                                    "type": "Array",
                                    "desc": "List of Buffer objects to concat"
                                },
                                {
                                    "textRaw": "`totalLength` {Number} Total length of the buffers when concatenated ",
                                    "name": "totalLength",
                                    "type": "Number",
                                    "desc": "Total length of the buffers when concatenated",
                                    "optional": true
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "list"
                                },
                                {
                                    "name": "totalLength",
                                    "optional": true
                                }
                            ]
                        }
                    ],
                    "desc": "<p>Returns a buffer which is the result of concatenating all the buffers in\nthe list together.\n\n</p>\n<p>If the list has no items, or if the totalLength is 0, then it returns a\nzero-length buffer.\n\n</p>\n<p>If the list has exactly one item, then the first item of the list is\nreturned.\n\n</p>\n<p>If the list has more than one item, then a new Buffer is created.\n\n</p>\n<p>If totalLength is not provided, it is read from the buffers in the list.\nHowever, this adds an additional loop to the function, so it is faster\nto provide the length explicitly.\n\n</p>\n"
                }
            ],
            "signatures": [
                {
                    "params": [
                        {
                            "textRaw": "`size` Number ",
                            "name": "size",
                            "desc": "Number"
                        }
                    ],
                    "desc": "<p>Allocates a new buffer of <code>size</code> octets.\n\n</p>\n"
                },
                {
                    "params": [
                        {
                            "name": "size"
                        }
                    ],
                    "desc": "<p>Allocates a new buffer of <code>size</code> octets.\n\n</p>\n"
                },
                {
                    "params": [
                        {
                            "textRaw": "`array` Array ",
                            "name": "array",
                            "desc": "Array"
                        }
                    ],
                    "desc": "<p>Allocates a new buffer using an <code>array</code> of octets.\n\n</p>\n"
                },
                {
                    "params": [
                        {
                            "name": "array"
                        }
                    ],
                    "desc": "<p>Allocates a new buffer using an <code>array</code> of octets.\n\n</p>\n"
                },
                {
                    "params": [
                        {
                            "textRaw": "`str` String - string to encode. ",
                            "name": "str",
                            "desc": "String - string to encode."
                        },
                        {
                            "textRaw": "`encoding` String - encoding to use, Optional. ",
                            "name": "encoding",
                            "desc": "String - encoding to use, Optional.",
                            "optional": true
                        }
                    ],
                    "desc": "<p>Allocates a new buffer containing the given <code>str</code>.\n<code>encoding</code> defaults to <code>&apos;utf8&apos;</code>.\n\n</p>\n"
                },
                {
                    "params": [
                        {
                            "name": "str"
                        },
                        {
                            "name": "encoding",
                            "optional": true
                        }
                    ],
                    "desc": "<p>Allocates a new buffer containing the given <code>str</code>.\n<code>encoding</code> defaults to <code>&apos;utf8&apos;</code>.\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "Class: SlowBuffer",
            "type": "class",
            "name": "SlowBuffer",
            "desc": "<p>This class is primarily for internal use.  JavaScript programs should\nuse Buffer instead of using SlowBuffer.\n\n</p>\n<p>In order to avoid the overhead of allocating many C++ Buffer objects for\nsmall blocks of memory in the lifetime of a server, Node allocates memory\nin 8Kb (8192 byte) chunks.  If a buffer is smaller than this size, then it\nwill be backed by a parent SlowBuffer object.  If it is larger than this,\nthen Node will allocate a SlowBuffer slab for it directly.\n\n</p>\n"
        }
    ],
    "properties": [
        {
            "textRaw": "`INSPECT_MAX_BYTES` Number, Default: 50 ",
            "name": "INSPECT_MAX_BYTES",
            "desc": "<p>How many bytes will be returned when <code>buffer.inspect()</code> is called. This can\nbe overridden by user modules.\n\n</p>\n<p>Note that this is a property on the buffer module returned by\n<code>require(&apos;buffer&apos;)</code>, not on the Buffer global, or a buffer instance.\n\n</p>\n",
            "shortDesc": "Number, Default: 50"
        }
    ],
    "type": "module",
    "displayName": "Buffer"
}
});
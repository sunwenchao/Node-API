define(function(require, exports, module) {
module.exports = {
    "textRaw": "File System",
    "name": "fs",
    "stability": 3,
    "stabilityText": "Stable",
    "desc": "<p>File I/O is provided by simple wrappers around standard POSIX functions.  To\nuse this module do <code>require(&apos;fs&apos;)</code>. All the methods have asynchronous and\nsynchronous forms.\n\n</p>\n<p>The asynchronous form always take a completion callback as its last argument.\nThe arguments passed to the completion callback depend on the method, but the\nfirst argument is always reserved for an exception. If the operation was\ncompleted successfully, then the first argument will be <code>null</code> or <code>undefined</code>.\n\n</p>\n<p>When using the synchronous form any exceptions are immediately thrown.\nYou can use try/catch to handle exceptions or allow them to bubble up.\n\n</p>\n<p>Here is an example of the asynchronous version:\n\n</p>\n<pre class='sh_javascript'><code>var fs = require(&apos;fs&apos;);\n\nfs.unlink(&apos;/tmp/hello&apos;, function (err) {\n  if (err) throw err;\n  console.log(&apos;successfully deleted /tmp/hello&apos;);\n});</code></pre>\n<p>Here is the synchronous version:\n\n</p>\n<pre class='sh_javascript'><code>var fs = require(&apos;fs&apos;);\n\nfs.unlinkSync(&apos;/tmp/hello&apos;)\nconsole.log(&apos;successfully deleted /tmp/hello&apos;);</code></pre>\n<p>With the asynchronous methods there is no guaranteed ordering. So the\nfollowing is prone to error:\n\n</p>\n<pre class='sh_javascript'><code>fs.rename(&apos;/tmp/hello&apos;, &apos;/tmp/world&apos;, function (err) {\n  if (err) throw err;\n  console.log(&apos;renamed complete&apos;);\n});\nfs.stat(&apos;/tmp/world&apos;, function (err, stats) {\n  if (err) throw err;\n  console.log(&apos;stats: &apos; + JSON.stringify(stats));\n});</code></pre>\n<p>It could be that <code>fs.stat</code> is executed before <code>fs.rename</code>.\nThe correct way to do this is to chain the callbacks.\n\n</p>\n<pre class='sh_javascript'><code>fs.rename(&apos;/tmp/hello&apos;, &apos;/tmp/world&apos;, function (err) {\n  if (err) throw err;\n  fs.stat(&apos;/tmp/world&apos;, function (err, stats) {\n    if (err) throw err;\n    console.log(&apos;stats: &apos; + JSON.stringify(stats));\n  });\n});</code></pre>\n<p>In busy processes, the programmer is <em>strongly encouraged</em> to use the\nasynchronous versions of these calls. The synchronous versions will block\nthe entire process until they complete--halting all connections.\n\n</p>\n<p>Relative path to filename can be used, remember however that this path will be relative\nto <code>process.cwd()</code>.\n\n</p>\n",
    "methods": [
        {
            "textRaw": "fs.rename(oldPath, newPath, [callback])",
            "type": "method",
            "name": "rename",
            "desc": "<p>Asynchronous rename(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "oldPath"
                        },
                        {
                            "name": "newPath"
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
            "textRaw": "fs.renameSync(oldPath, newPath)",
            "type": "method",
            "name": "renameSync",
            "desc": "<p>Synchronous rename(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "oldPath"
                        },
                        {
                            "name": "newPath"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.truncate(fd, len, [callback])",
            "type": "method",
            "name": "truncate",
            "desc": "<p>Asynchronous ftruncate(2). No arguments other than a possible exception are\ngiven to the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "len"
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
            "textRaw": "fs.truncateSync(fd, len)",
            "type": "method",
            "name": "truncateSync",
            "desc": "<p>Synchronous ftruncate(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "len"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.chown(path, uid, gid, [callback])",
            "type": "method",
            "name": "chown",
            "desc": "<p>Asynchronous chown(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "uid"
                        },
                        {
                            "name": "gid"
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
            "textRaw": "fs.chownSync(path, uid, gid)",
            "type": "method",
            "name": "chownSync",
            "desc": "<p>Synchronous chown(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "uid"
                        },
                        {
                            "name": "gid"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.fchown(fd, uid, gid, [callback])",
            "type": "method",
            "name": "fchown",
            "desc": "<p>Asynchronous fchown(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "uid"
                        },
                        {
                            "name": "gid"
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
            "textRaw": "fs.fchownSync(fd, uid, gid)",
            "type": "method",
            "name": "fchownSync",
            "desc": "<p>Synchronous fchown(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "uid"
                        },
                        {
                            "name": "gid"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.lchown(path, uid, gid, [callback])",
            "type": "method",
            "name": "lchown",
            "desc": "<p>Asynchronous lchown(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "uid"
                        },
                        {
                            "name": "gid"
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
            "textRaw": "fs.lchownSync(path, uid, gid)",
            "type": "method",
            "name": "lchownSync",
            "desc": "<p>Synchronous lchown(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "uid"
                        },
                        {
                            "name": "gid"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.chmod(path, mode, [callback])",
            "type": "method",
            "name": "chmod",
            "desc": "<p>Asynchronous chmod(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "mode"
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
            "textRaw": "fs.chmodSync(path, mode)",
            "type": "method",
            "name": "chmodSync",
            "desc": "<p>Synchronous chmod(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "mode"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.fchmod(fd, mode, [callback])",
            "type": "method",
            "name": "fchmod",
            "desc": "<p>Asynchronous fchmod(2). No arguments other than a possible exception\nare given to the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "mode"
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
            "textRaw": "fs.fchmodSync(fd, mode)",
            "type": "method",
            "name": "fchmodSync",
            "desc": "<p>Synchronous fchmod(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "mode"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.lchmod(path, mode, [callback])",
            "type": "method",
            "name": "lchmod",
            "desc": "<p>Asynchronous lchmod(2). No arguments other than a possible exception\nare given to the completion callback.\n\n</p>\n<p>Only available on Mac OS X.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "mode"
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
            "textRaw": "fs.lchmodSync(path, mode)",
            "type": "method",
            "name": "lchmodSync",
            "desc": "<p>Synchronous lchmod(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "mode"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.stat(path, [callback])",
            "type": "method",
            "name": "stat",
            "desc": "<p>Asynchronous stat(2). The callback gets two arguments <code>(err, stats)</code> where\n<code>stats</code> is a <a href=\"#fs_class_fs_stats\">fs.Stats</a> object.  See the <a href=\"#fs_class_fs_stats\">fs.Stats</a>\nsection below for more information.\n\n</p>\n",
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
            "textRaw": "fs.lstat(path, [callback])",
            "type": "method",
            "name": "lstat",
            "desc": "<p>Asynchronous lstat(2). The callback gets two arguments <code>(err, stats)</code> where\n<code>stats</code> is a <code>fs.Stats</code> object. <code>lstat()</code> is identical to <code>stat()</code>, except that if\n<code>path</code> is a symbolic link, then the link itself is stat-ed, not the file that it\nrefers to.\n\n</p>\n",
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
            "textRaw": "fs.fstat(fd, [callback])",
            "type": "method",
            "name": "fstat",
            "desc": "<p>Asynchronous fstat(2). The callback gets two arguments <code>(err, stats)</code> where\n<code>stats</code> is a <code>fs.Stats</code> object. <code>fstat()</code> is identical to <code>stat()</code>, except that\nthe file to be stat-ed is specified by the file descriptor <code>fd</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
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
            "textRaw": "fs.statSync(path)",
            "type": "method",
            "name": "statSync",
            "desc": "<p>Synchronous stat(2). Returns an instance of <code>fs.Stats</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.lstatSync(path)",
            "type": "method",
            "name": "lstatSync",
            "desc": "<p>Synchronous lstat(2). Returns an instance of <code>fs.Stats</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.fstatSync(fd)",
            "type": "method",
            "name": "fstatSync",
            "desc": "<p>Synchronous fstat(2). Returns an instance of <code>fs.Stats</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.link(srcpath, dstpath, [callback])",
            "type": "method",
            "name": "link",
            "desc": "<p>Asynchronous link(2). No arguments other than a possible exception are given to\nthe completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "srcpath"
                        },
                        {
                            "name": "dstpath"
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
            "textRaw": "fs.linkSync(srcpath, dstpath)",
            "type": "method",
            "name": "linkSync",
            "desc": "<p>Synchronous link(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "srcpath"
                        },
                        {
                            "name": "dstpath"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.symlink(srcpath, dstpath, [type], [callback])",
            "type": "method",
            "name": "symlink",
            "desc": "<p>Asynchronous symlink(2). No arguments other than a possible exception are given\nto the completion callback.\n<code>type</code> argument can be either <code>&apos;dir&apos;</code>, <code>&apos;file&apos;</code>, or <code>&apos;junction&apos;</code> (default is <code>&apos;file&apos;</code>).  It is only \nused on Windows (ignored on other platforms).\nNote that Windows junction points require the destination path to be absolute.  When using\n<code>&apos;junction&apos;</code>, the <code>destination</code> argument will automatically be normalized to absolute path.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "srcpath"
                        },
                        {
                            "name": "dstpath"
                        },
                        {
                            "name": "type",
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
            "textRaw": "fs.symlinkSync(srcpath, dstpath, [type])",
            "type": "method",
            "name": "symlinkSync",
            "desc": "<p>Synchronous symlink(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "srcpath"
                        },
                        {
                            "name": "dstpath"
                        },
                        {
                            "name": "type",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.readlink(path, [callback])",
            "type": "method",
            "name": "readlink",
            "desc": "<p>Asynchronous readlink(2). The callback gets two arguments <code>(err,\nlinkString)</code>.\n\n</p>\n",
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
            "textRaw": "fs.readlinkSync(path)",
            "type": "method",
            "name": "readlinkSync",
            "desc": "<p>Synchronous readlink(2). Returns the symbolic link&apos;s string value.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.realpath(path, [cache], callback)",
            "type": "method",
            "name": "realpath",
            "desc": "<p>Asynchronous realpath(2). The <code>callback</code> gets two arguments <code>(err,\nresolvedPath)</code>. May use <code>process.cwd</code> to resolve relative paths. <code>cache</code> is an\nobject literal of mapped paths that can be used to force a specific path\nresolution or avoid additional <code>fs.stat</code> calls for known real paths.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>var cache = {&apos;/etc&apos;:&apos;/private/etc&apos;};\nfs.realpath(&apos;/etc/passwd&apos;, cache, function (err, resolvedPath) {\n  if (err) throw err;\n  console.log(resolvedPath);\n});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "cache",
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
            "textRaw": "fs.realpathSync(path, [cache])",
            "type": "method",
            "name": "realpathSync",
            "desc": "<p>Synchronous realpath(2). Returns the resolved path.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "cache",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.unlink(path, [callback])",
            "type": "method",
            "name": "unlink",
            "desc": "<p>Asynchronous unlink(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
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
            "textRaw": "fs.unlinkSync(path)",
            "type": "method",
            "name": "unlinkSync",
            "desc": "<p>Synchronous unlink(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.rmdir(path, [callback])",
            "type": "method",
            "name": "rmdir",
            "desc": "<p>Asynchronous rmdir(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
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
            "textRaw": "fs.rmdirSync(path)",
            "type": "method",
            "name": "rmdirSync",
            "desc": "<p>Synchronous rmdir(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.mkdir(path, [mode], [callback])",
            "type": "method",
            "name": "mkdir",
            "desc": "<p>Asynchronous mkdir(2). No arguments other than a possible exception are given\nto the completion callback. <code>mode</code> defaults to <code>0777</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "mode",
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
            "textRaw": "fs.mkdirSync(path, [mode])",
            "type": "method",
            "name": "mkdirSync",
            "desc": "<p>Synchronous mkdir(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "mode",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.readdir(path, [callback])",
            "type": "method",
            "name": "readdir",
            "desc": "<p>Asynchronous readdir(3).  Reads the contents of a directory.\nThe callback gets two arguments <code>(err, files)</code> where <code>files</code> is an array of\nthe names of the files in the directory excluding <code>&apos;.&apos;</code> and <code>&apos;..&apos;</code>.\n\n</p>\n",
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
            "textRaw": "fs.readdirSync(path)",
            "type": "method",
            "name": "readdirSync",
            "desc": "<p>Synchronous readdir(3). Returns an array of filenames excluding <code>&apos;.&apos;</code> and\n<code>&apos;..&apos;</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.close(fd, [callback])",
            "type": "method",
            "name": "close",
            "desc": "<p>Asynchronous close(2).  No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
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
            "textRaw": "fs.closeSync(fd)",
            "type": "method",
            "name": "closeSync",
            "desc": "<p>Synchronous close(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.open(path, flags, [mode], [callback])",
            "type": "method",
            "name": "open",
            "desc": "<p>Asynchronous file open. See open(2). <code>flags</code> can be:\n\n</p>\n<ul>\n<li><p><code>&apos;r&apos;</code> - Open file for reading.\nAn exception occurs if the file does not exist.</p>\n</li>\n<li><p><code>&apos;r+&apos;</code> - Open file for reading and writing.\nAn exception occurs if the file does not exist.</p>\n</li>\n<li><p><code>&apos;rs&apos;</code> - Open file for reading in synchronous mode. Instructs the operating\nsystem to bypass the local file system cache.</p>\n<p>This is primarily useful for opening files on NFS mounts as it allows you to\nskip the potentially stale local cache. It has a very real impact on I/O\nperformance so don&apos;t use this mode unless you need it.</p>\n<p>Note that this doesn&apos;t turn <code>fs.open()</code> into a synchronous blocking call.\nIf that&apos;s what you want then you should be using <code>fs.openSync()</code></p>\n</li>\n<li><p><code>&apos;rs+&apos;</code> - Open file for reading and writing, telling the OS to open it\nsynchronously. See notes for <code>&apos;rs&apos;</code> about using this with caution.</p>\n</li>\n<li><p><code>&apos;w&apos;</code> - Open file for writing.\nThe file is created (if it does not exist) or truncated (if it exists).</p>\n</li>\n<li><p><code>&apos;wx&apos;</code> - Like <code>&apos;w&apos;</code> but opens the file in exclusive mode.</p>\n</li>\n<li><p><code>&apos;w+&apos;</code> - Open file for reading and writing.\nThe file is created (if it does not exist) or truncated (if it exists).</p>\n</li>\n<li><p><code>&apos;wx+&apos;</code> - Like <code>&apos;w+&apos;</code> but opens the file in exclusive mode.</p>\n</li>\n<li><p><code>&apos;a&apos;</code> - Open file for appending.\nThe file is created if it does not exist.</p>\n</li>\n<li><p><code>&apos;ax&apos;</code> - Like <code>&apos;a&apos;</code> but opens the file in exclusive mode.</p>\n</li>\n<li><p><code>&apos;a+&apos;</code> - Open file for reading and appending.\nThe file is created if it does not exist.</p>\n</li>\n<li><p><code>&apos;ax+&apos;</code> - Like <code>&apos;a+&apos;</code> but opens the file in exclusive mode.</p>\n</li>\n</ul>\n<p><code>mode</code> defaults to <code>0666</code>. The callback gets two arguments <code>(err, fd)</code>.\n\n</p>\n<p>Exclusive mode (<code>O_EXCL</code>) ensures that <code>path</code> is newly created. <code>fs.open()</code>\nfails if a file by that name already exists. On POSIX systems, symlinks are\nnot followed. Exclusive mode may or may not work with network file systems.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "flags"
                        },
                        {
                            "name": "mode",
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
            "textRaw": "fs.openSync(path, flags, [mode])",
            "type": "method",
            "name": "openSync",
            "desc": "<p>Synchronous open(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "flags"
                        },
                        {
                            "name": "mode",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.utimes(path, atime, mtime, [callback])",
            "type": "method",
            "name": "utimes",
            "desc": "<p>Change file timestamps of the file referenced by the supplied path.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "atime"
                        },
                        {
                            "name": "mtime"
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "atime"
                        },
                        {
                            "name": "mtime"
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
            "textRaw": "fs.utimesSync(path, atime, mtime)",
            "type": "method",
            "name": "utimesSync",
            "desc": "<p>Change file timestamps of the file referenced by the supplied path.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "atime"
                        },
                        {
                            "name": "mtime"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.futimes(fd, atime, mtime, [callback])",
            "type": "method",
            "name": "futimes",
            "desc": "<p>Change the file timestamps of a file referenced by the supplied file\ndescriptor.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "atime"
                        },
                        {
                            "name": "mtime"
                        }
                    ]
                },
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "atime"
                        },
                        {
                            "name": "mtime"
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
            "textRaw": "fs.futimesSync(fd, atime, mtime)",
            "type": "method",
            "name": "futimesSync",
            "desc": "<p>Change the file timestamps of a file referenced by the supplied file\ndescriptor.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "atime"
                        },
                        {
                            "name": "mtime"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.fsync(fd, [callback])",
            "type": "method",
            "name": "fsync",
            "desc": "<p>Asynchronous fsync(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
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
            "textRaw": "fs.fsyncSync(fd)",
            "type": "method",
            "name": "fsyncSync",
            "desc": "<p>Synchronous fsync(2).\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.write(fd, buffer, offset, length, position, [callback])",
            "type": "method",
            "name": "write",
            "desc": "<p>Write <code>buffer</code> to the file specified by <code>fd</code>.\n\n</p>\n<p><code>offset</code> and <code>length</code> determine the part of the buffer to be written.\n\n</p>\n<p><code>position</code> refers to the offset from the beginning of the file where this data\nshould be written. If <code>position</code> is <code>null</code>, the data will be written at the\ncurrent position.\nSee pwrite(2).\n\n</p>\n<p>The callback will be given three arguments <code>(err, written, buffer)</code> where <code>written</code>\nspecifies how many <em>bytes</em> were written from <code>buffer</code>.\n\n</p>\n<p>Note that it is unsafe to use <code>fs.write</code> multiple times on the same file\nwithout waiting for the callback. For this scenario,\n<code>fs.createWriteStream</code> is strongly recommended.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "buffer"
                        },
                        {
                            "name": "offset"
                        },
                        {
                            "name": "length"
                        },
                        {
                            "name": "position"
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
            "textRaw": "fs.writeSync(fd, buffer, offset, length, position)",
            "type": "method",
            "name": "writeSync",
            "desc": "<p>Synchronous version of <code>fs.write()</code>. Returns the number of bytes written.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "buffer"
                        },
                        {
                            "name": "offset"
                        },
                        {
                            "name": "length"
                        },
                        {
                            "name": "position"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.read(fd, buffer, offset, length, position, [callback])",
            "type": "method",
            "name": "read",
            "desc": "<p>Read data from the file specified by <code>fd</code>.\n\n</p>\n<p><code>buffer</code> is the buffer that the data will be written to.\n\n</p>\n<p><code>offset</code> is offset within the buffer where writing will start.\n\n</p>\n<p><code>length</code> is an integer specifying the number of bytes to read.\n\n</p>\n<p><code>position</code> is an integer specifying where to begin reading from in the file.\nIf <code>position</code> is <code>null</code>, data will be read from the current file position.\n\n</p>\n<p>The callback is given the three arguments, <code>(err, bytesRead, buffer)</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "buffer"
                        },
                        {
                            "name": "offset"
                        },
                        {
                            "name": "length"
                        },
                        {
                            "name": "position"
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
            "textRaw": "fs.readSync(fd, buffer, offset, length, position)",
            "type": "method",
            "name": "readSync",
            "desc": "<p>Synchronous version of <code>fs.read</code>. Returns the number of <code>bytesRead</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "fd"
                        },
                        {
                            "name": "buffer"
                        },
                        {
                            "name": "offset"
                        },
                        {
                            "name": "length"
                        },
                        {
                            "name": "position"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.readFile(filename, [encoding], [callback])",
            "type": "method",
            "name": "readFile",
            "desc": "<p>Asynchronously reads the entire contents of a file. Example:\n\n</p>\n<pre class='sh_javascript'><code>fs.readFile(&apos;/etc/passwd&apos;, function (err, data) {\n  if (err) throw err;\n  console.log(data);\n});</code></pre>\n<p>The callback is passed two arguments <code>(err, data)</code>, where <code>data</code> is the\ncontents of the file.\n\n</p>\n<p>If no encoding is specified, then the raw buffer is returned.\n\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "encoding",
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
            "textRaw": "fs.readFileSync(filename, [encoding])",
            "type": "method",
            "name": "readFileSync",
            "desc": "<p>Synchronous version of <code>fs.readFile</code>. Returns the contents of the <code>filename</code>.\n\n</p>\n<p>If <code>encoding</code> is specified then this function returns a string. Otherwise it\nreturns a buffer.\n\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
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
            "textRaw": "fs.writeFile(filename, data, [encoding], [callback])",
            "type": "method",
            "name": "writeFile",
            "desc": "<p>Asynchronously writes data to a file, replacing the file if it already exists.\n<code>data</code> can be a string or a buffer. The <code>encoding</code> argument is ignored if\n<code>data</code> is a buffer. It defaults to <code>&apos;utf8&apos;</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>fs.writeFile(&apos;message.txt&apos;, &apos;Hello Node&apos;, function (err) {\n  if (err) throw err;\n  console.log(&apos;It\\&apos;s saved!&apos;);\n});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "data"
                        },
                        {
                            "name": "encoding",
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
            "textRaw": "fs.writeFileSync(filename, data, [encoding])",
            "type": "method",
            "name": "writeFileSync",
            "desc": "<p>The synchronous version of <code>fs.writeFile</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "data"
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
            "textRaw": "fs.appendFile(filename, data, encoding='utf8', [callback])",
            "type": "method",
            "name": "appendFile",
            "desc": "<p>Asynchronously append data to a file, creating the file if it not yet exists.\n<code>data</code> can be a string or a buffer. The <code>encoding</code> argument is ignored if\n<code>data</code> is a buffer.\n\n</p>\n<p>Example:\n\n</p>\n<pre class='sh_javascript'><code>fs.appendFile(&apos;message.txt&apos;, &apos;data to append&apos;, function (err) {\n  if (err) throw err;\n  console.log(&apos;The &quot;data to append&quot; was appended to file!&apos;);\n});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "data"
                        },
                        {
                            "name": "encoding",
                            "default": "'utf8'"
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
            "textRaw": "fs.appendFileSync(filename, data, encoding='utf8')",
            "type": "method",
            "name": "appendFileSync",
            "desc": "<p>The synchronous version of <code>fs.appendFile</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "data"
                        },
                        {
                            "name": "encoding",
                            "default": "'utf8'"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.watchFile(filename, [options], listener)",
            "type": "method",
            "name": "watchFile",
            "stability": 2,
            "stabilityText": "Unstable.  Use fs.watch instead, if available.",
            "desc": "<p>Watch for changes on <code>filename</code>. The callback <code>listener</code> will be called each\ntime the file is accessed.\n\n</p>\n<p>The second argument is optional. The <code>options</code> if provided should be an object\ncontaining two members a boolean, <code>persistent</code>, and <code>interval</code>. <code>persistent</code>\nindicates whether the process should continue to run as long as files are\nbeing watched. <code>interval</code> indicates how often the target should be polled,\nin milliseconds. The default is <code>{ persistent: true, interval: 5007 }</code>.\n\n</p>\n<p>The <code>listener</code> gets two arguments the current stat object and the previous\nstat object:\n\n</p>\n<pre class='sh_javascript'><code>fs.watchFile(&apos;message.text&apos;, function (curr, prev) {\n  console.log(&apos;the current mtime is: &apos; + curr.mtime);\n  console.log(&apos;the previous mtime was: &apos; + prev.mtime);\n});</code></pre>\n<p>These stat objects are instances of <code>fs.Stat</code>.\n\n</p>\n<p>If you want to be notified when the file was modified, not just accessed\nyou need to compare <code>curr.mtime</code> and <code>prev.mtime</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "options",
                            "optional": true
                        },
                        {
                            "name": "listener"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.unwatchFile(filename, [listener])",
            "type": "method",
            "name": "unwatchFile",
            "stability": 2,
            "stabilityText": "Unstable.  Use fs.watch instead, if available.",
            "desc": "<p>Stop watching for changes on <code>filename</code>. If <code>listener</code> is specified, only that\nparticular listener is removed. Otherwise, <em>all</em> listeners are removed and you\nhave effectively stopped watching <code>filename</code>.\n\n</p>\n<p>Calling <code>fs.unwatchFile()</code> with a filename that is not being watched is a\nno-op, not an error.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "listener",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.watch(filename, [options], [listener])",
            "type": "method",
            "name": "watch",
            "stability": 2,
            "stabilityText": "Unstable.  Not available on all platforms.",
            "desc": "<p>Watch for changes on <code>filename</code>, where <code>filename</code> is either a file or a\ndirectory.  The returned object is a <a href=\"#fs_class_fs_fswatcher\">fs.FSWatcher</a>.\n\n</p>\n<p>The second argument is optional. The <code>options</code> if provided should be an object\ncontaining a boolean member <code>persistent</code>, which indicates whether the process\nshould continue to run as long as files are being watched. The default is\n<code>{ persistent: true }</code>.\n\n</p>\n<p>The listener callback gets two arguments <code>(event, filename)</code>.  <code>event</code> is either\n&apos;rename&apos; or &apos;change&apos;, and <code>filename</code> is the name of the file which triggered\nthe event.\n\n</p>\n",
            "miscs": [
                {
                    "textRaw": "Caveats",
                    "name": "Caveats",
                    "type": "misc",
                    "desc": "<p>The <code>fs.watch</code> API is not 100% consistent across platforms, and is\nunavailable in some situations.\n\n</p>\n",
                    "miscs": [
                        {
                            "textRaw": "Availability",
                            "name": "Availability",
                            "type": "misc",
                            "desc": "<p>This feature depends on the underlying operating system providing a way\nto be notified of filesystem changes.\n\n</p>\n<ul>\n<li>On Linux systems, this uses <code>inotify</code>.</li>\n<li>On BSD systems (including OS X), this uses <code>kqueue</code>.</li>\n<li>On SunOS systems (including Solaris and SmartOS), this uses <code>event ports</code>.</li>\n<li>On Windows systems, this feature depends on <code>ReadDirectoryChangesW</code>.</li>\n</ul>\n<p>If the underlying functionality is not available for some reason, then\n<code>fs.watch</code> will not be able to function.  You can still use\n<code>fs.watchFile</code>, which uses stat polling, but it is slower and less\nreliable.\n\n</p>\n"
                        },
                        {
                            "textRaw": "Filename Argument",
                            "name": "Filename Argument",
                            "type": "misc",
                            "desc": "<p>Providing <code>filename</code> argument in the callback is not supported\non every platform (currently it&apos;s only supported on Linux and Windows).  Even\non supported platforms <code>filename</code> is not always guaranteed to be provided.\nTherefore, don&apos;t assume that <code>filename</code> argument is always provided in the\ncallback, and have some fallback logic if it is null.\n\n</p>\n<pre class='sh_javascript'><code>fs.watch(&apos;somedir&apos;, function (event, filename) {\n  console.log(&apos;event is: &apos; + event);\n  if (filename) {\n    console.log(&apos;filename provided: &apos; + filename);\n  } else {\n    console.log(&apos;filename not provided&apos;);\n  }\n});</code></pre>\n"
                        }
                    ]
                }
            ],
            "signatures": [
                {
                    "params": [
                        {
                            "name": "filename"
                        },
                        {
                            "name": "options",
                            "optional": true
                        },
                        {
                            "name": "listener",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.exists(path, [callback])",
            "type": "method",
            "name": "exists",
            "desc": "<p>Test whether or not the given path exists by checking with the file system.\nThen call the <code>callback</code> argument with either true or false.  Example:\n\n</p>\n<pre class='sh_javascript'><code>fs.exists(&apos;/etc/passwd&apos;, function (exists) {\n  util.debug(exists ? &quot;it&apos;s there&quot; : &quot;no passwd!&quot;);\n});</code></pre>\n",
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
            "textRaw": "fs.existsSync(path)",
            "type": "method",
            "name": "existsSync",
            "desc": "<p>Synchronous version of <code>fs.exists</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.createReadStream(path, [options])",
            "type": "method",
            "name": "createReadStream",
            "desc": "<p>Returns a new ReadStream object (See <code>Readable Stream</code>).\n\n</p>\n<p><code>options</code> is an object with the following defaults:\n\n</p>\n<pre class='sh_javascript'><code>{ flags: &apos;r&apos;,\n  encoding: null,\n  fd: null,\n  mode: 0666,\n  bufferSize: 64 * 1024\n}</code></pre>\n<p><code>options</code> can include <code>start</code> and <code>end</code> values to read a range of bytes from\nthe file instead of the entire file.  Both <code>start</code> and <code>end</code> are inclusive and\nstart at 0. The <code>encoding</code> can be <code>&apos;utf8&apos;</code>, <code>&apos;ascii&apos;</code>, or <code>&apos;base64&apos;</code>.\n\n</p>\n<p>An example to read the last 10 bytes of a file which is 100 bytes long:\n\n</p>\n<pre class='sh_javascript'><code>fs.createReadStream(&apos;sample.txt&apos;, {start: 90, end: 99});</code></pre>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "options",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "textRaw": "fs.createWriteStream(path, [options])",
            "type": "method",
            "name": "createWriteStream",
            "desc": "<p>Returns a new WriteStream object (See <code>Writable Stream</code>).\n\n</p>\n<p><code>options</code> is an object with the following defaults:\n\n</p>\n<pre class='sh_javascript'><code>{ flags: &apos;w&apos;,\n  encoding: null,\n  mode: 0666 }</code></pre>\n<p><code>options</code> may also include a <code>start</code> option to allow writing data at\nsome position past the beginning of the file.  Modifying a file rather\nthan replacing it may require a <code>flags</code> mode of <code>r+</code> rather than the\ndefault mode <code>w</code>.\n\n</p>\n",
            "signatures": [
                {
                    "params": [
                        {
                            "name": "path"
                        },
                        {
                            "name": "options",
                            "optional": true
                        }
                    ]
                }
            ]
        }
    ],
    "classes": [
        {
            "textRaw": "Class: fs.Stats",
            "type": "class",
            "name": "fs.Stats",
            "desc": "<p>Objects returned from <code>fs.stat()</code>, <code>fs.lstat()</code> and <code>fs.fstat()</code> and their\nsynchronous counterparts are of this type.\n\n</p>\n<ul>\n<li><code>stats.isFile()</code></li>\n<li><code>stats.isDirectory()</code></li>\n<li><code>stats.isBlockDevice()</code></li>\n<li><code>stats.isCharacterDevice()</code></li>\n<li><code>stats.isSymbolicLink()</code> (only valid with  <code>fs.lstat()</code>)</li>\n<li><code>stats.isFIFO()</code></li>\n<li><code>stats.isSocket()</code></li>\n</ul>\n<p>For a regular file <code>util.inspect(stats)</code> would return a string very\nsimilar to this:\n\n</p>\n<pre class='sh_javascript'><code>{ dev: 2114,\n  ino: 48064969,\n  mode: 33188,\n  nlink: 1,\n  uid: 85,\n  gid: 100,\n  rdev: 0,\n  size: 527,\n  blksize: 4096,\n  blocks: 8,\n  atime: Mon, 10 Oct 2011 23:24:11 GMT,\n  mtime: Mon, 10 Oct 2011 23:24:11 GMT,\n  ctime: Mon, 10 Oct 2011 23:24:11 GMT }</code></pre>\n<p>Please note that <code>atime</code>, <code>mtime</code> and <code>ctime</code> are instances\nof [Date][MDN-Date] object and to compare the values of\nthese objects you should use appropriate methods. For most\ngeneral uses [getTime()][MDN-Date-getTime] will return\nthe number of milliseconds elapsed since <em>1 January 1970\n00:00:00 UTC</em> and this integer should be sufficient for\nany comparison, however there additional methods which can\nbe used for displaying fuzzy information. More details can\nbe found in the [MDN JavaScript Reference][MDN-Date] page.\n\n</p>\n"
        },
        {
            "textRaw": "Class: fs.ReadStream",
            "type": "class",
            "name": "fs.ReadStream",
            "desc": "<p><code>ReadStream</code> is a <a href=\"stream.html#stream_readable_stream\">Readable Stream</a>.\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'open'",
                    "type": "event",
                    "name": "open",
                    "params": [],
                    "desc": "<p>Emitted when the ReadStream&apos;s file is opened.\n\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "Class: fs.FSWatcher",
            "type": "class",
            "name": "fs.FSWatcher",
            "desc": "<p>Objects returned from <code>fs.watch()</code> are of this type.\n\n</p>\n",
            "methods": [
                {
                    "textRaw": "watcher.close()",
                    "type": "method",
                    "name": "close",
                    "desc": "<p>Stop watching for changes on the given <code>fs.FSWatcher</code>.\n\n</p>\n",
                    "signatures": [
                        {
                            "params": []
                        }
                    ]
                }
            ],
            "events": [
                {
                    "textRaw": "Event: 'change'",
                    "type": "event",
                    "name": "change",
                    "params": [],
                    "desc": "<p>Emitted when something changes in a watched directory or file.\nSee more details in <a href=\"#fs_fs_watch_filename_options_listener\">fs.watch</a>.\n\n</p>\n"
                },
                {
                    "textRaw": "Event: 'error'",
                    "type": "event",
                    "name": "error",
                    "params": [],
                    "desc": "<p>Emitted when an error occurs.\n\n</p>\n"
                }
            ]
        }
    ],
    "properties": [
        {
            "textRaw": "fs.WriteStream",
            "name": "WriteStream",
            "desc": "<p><code>WriteStream</code> is a <a href=\"stream.html#stream_writable_stream\">Writable Stream</a>.\n\n</p>\n",
            "events": [
                {
                    "textRaw": "Event: 'open'",
                    "type": "event",
                    "name": "open",
                    "params": [],
                    "desc": "<p>Emitted when the WriteStream&apos;s file is opened.\n\n</p>\n"
                }
            ],
            "properties": [
                {
                    "textRaw": "file.bytesWritten",
                    "name": "bytesWritten",
                    "desc": "<p>The number of bytes written so far. Does not include data that is still queued\nfor writing.\n\n</p>\n"
                }
            ]
        }
    ],
    "type": "module",
    "displayName": "fs"
};
});
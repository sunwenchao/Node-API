define(function(require, exports, module) {
    module.exports = {
    "textRaw": "Modules",
    "name": "module",
    "stability": 5,
    "stabilityText": "Locked",
    "desc": "<p>Node has a simple module loading system.  In Node, files and modules are in\none-to-one correspondence.  As an example, <code>foo.js</code> loads the module\n<code>circle.js</code> in the same directory.\n\n</p>\n<p>The contents of <code>foo.js</code>:\n\n</p>\n<pre class='sh_javascript'><code>var circle = require(&apos;./circle.js&apos;);\nconsole.log( &apos;The area of a circle of radius 4 is &apos;\n           + circle.area(4));</code></pre>\n<p>The contents of <code>circle.js</code>:\n\n</p>\n<pre class='sh_javascript'><code>var PI = Math.PI;\n\nexports.area = function (r) {\n  return PI * r * r;\n};\n\nexports.circumference = function (r) {\n  return 2 * PI * r;\n};</code></pre>\n<p>The module <code>circle.js</code> has exported the functions <code>area()</code> and\n<code>circumference()</code>.  To export an object, add to the special <code>exports</code>\nobject.\n\n</p>\n<p>Variables\nlocal to the module will be private. In this example the variable <code>PI</code> is\nprivate to <code>circle.js</code>.\n\n</p>\n<p>The module system is implemented in the <code>require(&quot;module&quot;)</code> module.\n\n</p>\n",
    "miscs": [
        {
            "textRaw": "Cycles",
            "name": "Cycles",
            "type": "misc",
            "desc": "<p>When there are circular <code>require()</code> calls, a module might not be\ndone being executed when it is returned.\n\n</p>\n<p>Consider this situation:\n\n</p>\n<p><code>a.js</code>:\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;a starting&apos;);\nexports.done = false;\nvar b = require(&apos;./b.js&apos;);\nconsole.log(&apos;in a, b.done = %j&apos;, b.done);\nexports.done = true;\nconsole.log(&apos;a done&apos;);</code></pre>\n<p><code>b.js</code>:\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;b starting&apos;);\nexports.done = false;\nvar a = require(&apos;./a.js&apos;);\nconsole.log(&apos;in b, a.done = %j&apos;, a.done);\nexports.done = true;\nconsole.log(&apos;b done&apos;);</code></pre>\n<p><code>main.js</code>:\n\n</p>\n<pre class='sh_javascript'><code>console.log(&apos;main starting&apos;);\nvar a = require(&apos;./a.js&apos;);\nvar b = require(&apos;./b.js&apos;);\nconsole.log(&apos;in main, a.done=%j, b.done=%j&apos;, a.done, b.done);</code></pre>\n<p>When <code>main.js</code> loads <code>a.js</code>, then <code>a.js</code> in turn loads <code>b.js</code>.  At that\npoint, <code>b.js</code> tries to load <code>a.js</code>.  In order to prevent an infinite\nloop an <strong>unfinished copy</strong> of the <code>a.js</code> exports object is returned to the\n<code>b.js</code> module.  <code>b.js</code> then finishes loading, and its exports object is\nprovided to the <code>a.js</code> module.\n\n</p>\n<p>By the time <code>main.js</code> has loaded both modules, they&apos;re both finished.\nThe output of this program would thus be:\n\n</p>\n<pre class='sh_javascript'><code>$ node main.js\nmain starting\na starting\nb starting\nin b, a.done = false\nb done\nin a, b.done = true\na done\nin main, a.done=true, b.done=true</code></pre>\n<p>If you have cyclic module dependencies in your program, make sure to\nplan accordingly.\n\n</p>\n"
        },
        {
            "textRaw": "Core Modules",
            "name": "Core Modules",
            "type": "misc",
            "desc": "<p>Node has several modules compiled into the binary.  These modules are\ndescribed in greater detail elsewhere in this documentation.\n\n</p>\n<p>The core modules are defined in node&apos;s source in the <code>lib/</code> folder.\n\n</p>\n<p>Core modules are always preferentially loaded if their identifier is\npassed to <code>require()</code>.  For instance, <code>require(&apos;http&apos;)</code> will always\nreturn the built in HTTP module, even if there is a file by that name.\n\n</p>\n"
        },
        {
            "textRaw": "File Modules",
            "name": "File Modules",
            "type": "misc",
            "desc": "<p>If the exact filename is not found, then node will attempt to load the\nrequired filename with the added extension of <code>.js</code>, <code>.json</code>, and then <code>.node</code>.\n\n</p>\n<p><code>.js</code> files are interpreted as JavaScript text files, and <code>.json</code> files are\nparsed as JSON text files. <code>.node</code> files are interpreted as compiled addon\nmodules loaded with <code>dlopen</code>.\n\n</p>\n<p>A module prefixed with <code>&apos;/&apos;</code> is an absolute path to the file.  For\nexample, <code>require(&apos;/home/marco/foo.js&apos;)</code> will load the file at\n<code>/home/marco/foo.js</code>.\n\n</p>\n<p>A module prefixed with <code>&apos;./&apos;</code> is relative to the file calling <code>require()</code>.\nThat is, <code>circle.js</code> must be in the same directory as <code>foo.js</code> for\n<code>require(&apos;./circle&apos;)</code> to find it.\n\n</p>\n<p>Without a leading &apos;/&apos; or &apos;./&apos; to indicate a file, the module is either a\n&quot;core module&quot; or is loaded from a <code>node_modules</code> folder.\n\n</p>\n<p>If the given path does not exist, <code>require()</code> will throw an Error with its\n<code>code</code> property set to <code>&apos;MODULE_NOT_FOUND&apos;</code>.\n\n</p>\n"
        },
        {
            "textRaw": "Loading from `node_modules` Folders",
            "name": "Loading from `node_modules` Folders",
            "type": "misc",
            "desc": "<p>If the module identifier passed to <code>require()</code> is not a native module,\nand does not begin with <code>&apos;/&apos;</code>, <code>&apos;../&apos;</code>, or <code>&apos;./&apos;</code>, then node starts at the\nparent directory of the current module, and adds <code>/node_modules</code>, and\nattempts to load the module from that location.\n\n</p>\n<p>If it is not found there, then it moves to the parent directory, and so\non, until the root of the tree is reached.\n\n</p>\n<p>For example, if the file at <code>&apos;/home/ry/projects/foo.js&apos;</code> called\n<code>require(&apos;bar.js&apos;)</code>, then node would look in the following locations, in\nthis order:\n\n</p>\n<ul>\n<li><code>/home/ry/projects/node_modules/bar.js</code></li>\n<li><code>/home/ry/node_modules/bar.js</code></li>\n<li><code>/home/node_modules/bar.js</code></li>\n<li><code>/node_modules/bar.js</code></li>\n</ul>\n<p>This allows programs to localize their dependencies, so that they do not\nclash.\n\n</p>\n"
        },
        {
            "textRaw": "Folders as Modules",
            "name": "Folders as Modules",
            "type": "misc",
            "desc": "<p>It is convenient to organize programs and libraries into self-contained\ndirectories, and then provide a single entry point to that library.\nThere are three ways in which a folder may be passed to <code>require()</code> as\nan argument.\n\n</p>\n<p>The first is to create a <code>package.json</code> file in the root of the folder,\nwhich specifies a <code>main</code> module.  An example package.json file might\nlook like this:\n\n</p>\n<pre class='sh_javascript'><code>{ &quot;name&quot; : &quot;some-library&quot;,\n  &quot;main&quot; : &quot;./lib/some-library.js&quot; }</code></pre>\n<p>If this was in a folder at <code>./some-library</code>, then\n<code>require(&apos;./some-library&apos;)</code> would attempt to load\n<code>./some-library/lib/some-library.js</code>.\n\n</p>\n<p>This is the extent of Node&apos;s awareness of package.json files.\n\n</p>\n<p>If there is no package.json file present in the directory, then node\nwill attempt to load an <code>index.js</code> or <code>index.node</code> file out of that\ndirectory.  For example, if there was no package.json file in the above\nexample, then <code>require(&apos;./some-library&apos;)</code> would attempt to load:\n\n</p>\n<ul>\n<li><code>./some-library/index.js</code></li>\n<li><code>./some-library/index.node</code></li>\n</ul>\n"
        },
        {
            "textRaw": "Caching",
            "name": "Caching",
            "type": "misc",
            "desc": "<p>Modules are cached after the first time they are loaded.  This means\n(among other things) that every call to <code>require(&apos;foo&apos;)</code> will get\nexactly the same object returned, if it would resolve to the same file.\n\n</p>\n<p>Multiple calls to <code>require(&apos;foo&apos;)</code> may not cause the module code to be\nexecuted multiple times.  This is an important feature.  With it,\n&quot;partially done&quot; objects can be returned, thus allowing transitive\ndependencies to be loaded even when they would cause cycles.\n\n</p>\n<p>If you want to have a module execute code multiple times, then export a\nfunction, and call that function.\n\n</p>\n",
            "miscs": [
                {
                    "textRaw": "Module Caching Caveats",
                    "name": "Module Caching Caveats",
                    "type": "misc",
                    "desc": "<p>Modules are cached based on their resolved filename.  Since modules may\nresolve to a different filename based on the location of the calling\nmodule (loading from <code>node_modules</code> folders), it is not a <em>guarantee</em>\nthat <code>require(&apos;foo&apos;)</code> will always return the exact same object, if it\nwould resolve to different files.\n\n</p>\n"
                }
            ]
        },
        {
            "textRaw": "All Together...",
            "name": "All Together...",
            "type": "misc",
            "desc": "<p>To get the exact filename that will be loaded when <code>require()</code> is called, use\nthe <code>require.resolve()</code> function.\n\n</p>\n<p>Putting together all of the above, here is the high-level algorithm\nin pseudocode of what require.resolve does:\n\n</p>\n<pre class='sh_javascript'><code>require(X) from module at path Y\n1. If X is a core module,\n   a. return the core module\n   b. STOP\n2. If X begins with &apos;./&apos; or &apos;/&apos; or &apos;../&apos;\n   a. LOAD_AS_FILE(Y + X)\n   b. LOAD_AS_DIRECTORY(Y + X)\n3. LOAD_NODE_MODULES(X, dirname(Y))\n4. THROW &quot;not found&quot;\n\nLOAD_AS_FILE(X)\n1. If X is a file, load X as JavaScript text.  STOP\n2. If X.js is a file, load X.js as JavaScript text.  STOP\n3. If X.node is a file, load X.node as binary addon.  STOP\n\nLOAD_AS_DIRECTORY(X)\n1. If X/package.json is a file,\n   a. Parse X/package.json, and look for &quot;main&quot; field.\n   b. let M = X + (json main field)\n   c. LOAD_AS_FILE(M)\n2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP\n3. If X/index.node is a file, load X/index.node as binary addon.  STOP\n\nLOAD_NODE_MODULES(X, START)\n1. let DIRS=NODE_MODULES_PATHS(START)\n2. for each DIR in DIRS:\n   a. LOAD_AS_FILE(DIR/X)\n   b. LOAD_AS_DIRECTORY(DIR/X)\n\nNODE_MODULES_PATHS(START)\n1. let PARTS = path split(START)\n2. let ROOT = index of first instance of &quot;node_modules&quot; in PARTS, or 0\n3. let I = count of PARTS - 1\n4. let DIRS = []\n5. while I &gt; ROOT,\n   a. if PARTS[I] = &quot;node_modules&quot; CONTINUE\n   c. DIR = path join(PARTS[0 .. I] + &quot;node_modules&quot;)\n   b. DIRS = DIRS + DIR\n   c. let I = I - 1\n6. return DIRS</code></pre>\n"
        },
        {
            "textRaw": "Loading from the global folders",
            "name": "Loading from the global folders",
            "type": "misc",
            "desc": "<p>If the <code>NODE_PATH</code> environment variable is set to a colon-delimited list\nof absolute paths, then node will search those paths for modules if they\nare not found elsewhere.  (Note: On Windows, <code>NODE_PATH</code> is delimited by\nsemicolons instead of colons.)\n\n</p>\n<p>Additionally, node will search in the following locations:\n\n</p>\n<ul>\n<li>1: <code>$HOME/.node_modules</code></li>\n<li>2: <code>$HOME/.node_libraries</code></li>\n<li>3: <code>$PREFIX/lib/node</code></li>\n</ul>\n<p>Where <code>$HOME</code> is the user&apos;s home directory, and <code>$PREFIX</code> is node&apos;s\nconfigured <code>node_prefix</code>.\n\n</p>\n<p>These are mostly for historic reasons.  You are highly encouraged to\nplace your dependencies locally in <code>node_modules</code> folders.  They will be\nloaded faster, and more reliably.\n\n</p>\n"
        },
        {
            "textRaw": "Accessing the main module",
            "name": "Accessing the main module",
            "type": "misc",
            "desc": "<p>When a file is run directly from Node, <code>require.main</code> is set to its\n<code>module</code>. That means that you can determine whether a file has been run\ndirectly by testing\n\n</p>\n<pre class='sh_javascript'><code>require.main === module</code></pre>\n<p>For a file <code>foo.js</code>, this will be <code>true</code> if run via <code>node foo.js</code>, but\n<code>false</code> if run by <code>require(&apos;./foo&apos;)</code>.\n\n</p>\n<p>Because <code>module</code> provides a <code>filename</code> property (normally equivalent to\n<code>__filename</code>), the entry point of the current application can be obtained\nby checking <code>require.main.filename</code>.\n\n</p>\n"
        },
        {
            "textRaw": "Addenda: Package Manager Tips",
            "name": "Addenda: Package Manager Tips",
            "type": "misc",
            "desc": "<p>The semantics of Node&apos;s <code>require()</code> function were designed to be general\nenough to support a number of sane directory structures. Package manager\nprograms such as <code>dpkg</code>, <code>rpm</code>, and <code>npm</code> will hopefully find it possible to\nbuild native packages from Node modules without modification.\n\n</p>\n<p>Below we give a suggested directory structure that could work:\n\n</p>\n<p>Let&apos;s say that we wanted to have the folder at\n<code>/usr/lib/node/&lt;some-package&gt;/&lt;some-version&gt;</code> hold the contents of a\nspecific version of a package.\n\n</p>\n<p>Packages can depend on one another. In order to install package <code>foo</code>, you\nmay have to install a specific version of package <code>bar</code>.  The <code>bar</code> package\nmay itself have dependencies, and in some cases, these dependencies may even\ncollide or form cycles.\n\n</p>\n<p>Since Node looks up the <code>realpath</code> of any modules it loads (that is,\nresolves symlinks), and then looks for their dependencies in the\n<code>node_modules</code> folders as described above, this situation is very simple to\nresolve with the following architecture:\n\n</p>\n<ul>\n<li><code>/usr/lib/node/foo/1.2.3/</code> - Contents of the <code>foo</code> package, version 1.2.3.</li>\n<li><code>/usr/lib/node/bar/4.3.2/</code> - Contents of the <code>bar</code> package that <code>foo</code>\ndepends on.</li>\n<li><code>/usr/lib/node/foo/1.2.3/node_modules/bar</code> - Symbolic link to\n<code>/usr/lib/node/bar/4.3.2/</code>.</li>\n<li><code>/usr/lib/node/bar/4.3.2/node_modules/*</code> - Symbolic links to the packages\nthat <code>bar</code> depends on.</li>\n</ul>\n<p>Thus, even if a cycle is encountered, or if there are dependency\nconflicts, every module will be able to get a version of its dependency\nthat it can use.\n\n</p>\n<p>When the code in the <code>foo</code> package does <code>require(&apos;bar&apos;)</code>, it will get the\nversion that is symlinked into <code>/usr/lib/node/foo/1.2.3/node_modules/bar</code>.\nThen, when the code in the <code>bar</code> package calls <code>require(&apos;quux&apos;)</code>, it&apos;ll get\nthe version that is symlinked into\n<code>/usr/lib/node/bar/4.3.2/node_modules/quux</code>.\n\n</p>\n<p>Furthermore, to make the module lookup process even more optimal, rather\nthan putting packages directly in <code>/usr/lib/node</code>, we could put them in\n<code>/usr/lib/node_modules/&lt;name&gt;/&lt;version&gt;</code>.  Then node will not bother\nlooking for missing dependencies in <code>/usr/node_modules</code> or <code>/node_modules</code>.\n\n</p>\n<p>In order to make modules available to the node REPL, it might be useful to\nalso add the <code>/usr/lib/node_modules</code> folder to the <code>$NODE_PATH</code> environment\nvariable.  Since the module lookups using <code>node_modules</code> folders are all\nrelative, and based on the real path of the files making the calls to\n<code>require()</code>, the packages themselves can be anywhere.\n\n</p>\n"
        }
    ],
    "vars": [
        {
            "textRaw": "The `module` Object",
            "name": "module",
            "type": "var",
            "desc": "<p>In each module, the <code>module</code> free variable is a reference to the object\nrepresenting the current module.  In particular\n<code>module.exports</code> is the same as the <code>exports</code> object.\n<code>module</code> isn&apos;t actually a global but rather local to each module.\n\n</p>\n",
            "properties": [
                {
                    "textRaw": "`exports` {Object} ",
                    "name": "exports",
                    "desc": "<p>The <code>exports</code> object is created by the Module system. Sometimes this is not\nacceptable, many want their module to be an instance of some class. To do this\nassign the desired export object to <code>module.exports</code>. For example suppose we\nwere making a module called <code>a.js</code>\n\n</p>\n<pre class='sh_javascript'><code>var EventEmitter = require(&apos;events&apos;).EventEmitter;\n\nmodule.exports = new EventEmitter();\n\n// Do some work, and after some time emit\n// the &apos;ready&apos; event from the module itself.\nsetTimeout(function() {\n  module.exports.emit(&apos;ready&apos;);\n}, 1000);</code></pre>\n<p>Then in another file we could do\n\n</p>\n<pre class='sh_javascript'><code>var a = require(&apos;./a&apos;);\na.on(&apos;ready&apos;, function() {\n  console.log(&apos;module a is ready&apos;);\n});</code></pre>\n<p>Note that assignment to <code>module.exports</code> must be done immediately. It cannot be\ndone in any callbacks.  This does not work:\n\n</p>\n<p>x.js:\n\n</p>\n<pre class='sh_javascript'><code>setTimeout(function() {\n  module.exports = { a: &quot;hello&quot; };\n}, 0);</code></pre>\n<p>y.js:\n\n</p>\n<pre class='sh_javascript'><code>var x = require(&apos;./x&apos;);\nconsole.log(x.a);</code></pre>\n"
                },
                {
                    "textRaw": "`id` {String} ",
                    "name": "id",
                    "desc": "<p>The identifier for the module.  Typically this is the fully resolved\nfilename.\n\n\n</p>\n"
                },
                {
                    "textRaw": "`filename` {String} ",
                    "name": "filename",
                    "desc": "<p>The fully resolved filename to the module.\n\n\n</p>\n"
                },
                {
                    "textRaw": "`loaded` {Boolean} ",
                    "name": "loaded",
                    "desc": "<p>Whether or not the module is done loading, or is in the process of\nloading.\n\n\n</p>\n"
                },
                {
                    "textRaw": "`parent` {Module Object} ",
                    "name": "parent",
                    "desc": "<p>The module that required this one.\n\n\n</p>\n"
                },
                {
                    "textRaw": "`children` {Array} ",
                    "name": "children",
                    "desc": "<p>The module objects required by this one.\n\n\n\n</p>\n"
                }
            ],
            "methods": [
                {
                    "textRaw": "module.require(id)",
                    "type": "method",
                    "name": "require",
                    "signatures": [
                        {
                            "return": {
                                "textRaw": "Return: {Object} `exports` from the resolved module ",
                                "name": "return",
                                "type": "Object",
                                "desc": "`exports` from the resolved module"
                            },
                            "params": [
                                {
                                    "textRaw": "`id` {String} ",
                                    "name": "id",
                                    "type": "String"
                                }
                            ]
                        },
                        {
                            "params": [
                                {
                                    "name": "id"
                                }
                            ]
                        }
                    ],
                    "desc": "<p>The <code>module.require</code> method provides a way to load a module as if\n<code>require()</code> was called from the original module.\n\n</p>\n<p>Note that in order to do this, you must get a reference to the <code>module</code>\nobject.  Since <code>require()</code> returns the <code>exports</code>, and the <code>module</code> is\ntypically <em>only</em> available within a specific module&apos;s code, it must be\nexplicitly exported in order to be used.\n\n\n</p>\n"
                }
            ]
        }
    ],
    "type": "module",
    "displayName": "module"
}
});
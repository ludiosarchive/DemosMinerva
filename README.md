DemosMinerva overview
=====================

DemosMinerva has demos that show off Minerva.  Right now it has:

*	A multi-user whiteboard

*	A stream of public LiveJournal posts



Intial setup
============

You'll need to install:

*	Minerva: https://github.com/ludios/Minerva (and all of its dependencies)

*	Googstyle: https://github.com/ludios/Googstyle

*	Protojson: https://github.com/ludios/Protojson

*	BeautifulSoup: http://www.crummy.com/software/BeautifulSoup/ (I use the 3.0 series)

To start the server, run:

`twistd -n demosminerva_site -t tcp:7111:interface=127.0.0.1 --closure-library=/abspath/closure-library`

or on Windows:

```
set PYTHONPATH=C:\DemoMinerva's_parent_directory (if not already in PYTHONPATH)
C:\Python27\python.exe C:\Python27\Scripts\twistd.py -n demosminerva_site -t tcp:7111:interface=127.0.0.1 --closure-library=C:\abspath\closure-library
```

Note that if `closure-library` is in the parent of the source directory,
you can omit `--closure-library=`.

Then, navigate to `http://127.0.0.1:7111/` in your browser.



Recompiling the compiled .js and .css files
===========================================

If you want to recompile the compiled-JavaScript and .css files, you also need:

*	Closure Compiler: http://code.google.com/p/closure-compiler/

*	Protocol Buffers: http://code.google.com/p/protobuf/

*	protobuf-plugin-closure: http://code.google.com/p/protobuf-plugin-closure/

*	Sass: http://sass-lang.com/

Then run:

```
./build_pb2.sh
./build_compiled_js.sh
./build_css.sh
```



Contributing
============

Patches and pull requests are welcome.

This coding standard applies: http://ludios.org/coding-standard/

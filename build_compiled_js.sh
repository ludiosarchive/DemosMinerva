#!/bin/sh -e

#./build_autocachebreakers.py
./build_depsjs.sh

COMMON="../closure-library/closure/bin/build/closurebuilder.py \
--output_mode=compiled \
--compiler_jar=../closure-compiler/build/compiler.jar \
--compiler_flags=--compilation_level=ADVANCED_OPTIMIZATIONS \
--compiler_flags=--warning_level=VERBOSE \
--compiler_flags=--formatting=PRETTY_PRINT \
--compiler_flags=--jscomp_warning=missingProperties \
--compiler_flags=--jscomp_warning=undefinedVars \
--compiler_flags=--jscomp_warning=checkTypes \
--compiler_flags=--output_wrapper=(function(){%output%})(); \
--compiler_flags=--summary_detail_level=3 \
--root=../closure-library \
--root=../Coreweb/js_coreweb \
--root=../Minerva/js_minerva \
--root=js_demosminerva \
--compiler_flags=--js=../closure-library/closure/goog/deps.js \
--compiler_flags=--js=../closure-library/third_party/closure/goog/deps.js \
--compiler_flags=--js=../Coreweb/js_coreweb/deps.js \
--compiler_flags=--js=../Minerva/js_minerva/deps.js \
--compiler_flags=--js=js_demosminerva/deps.js \
--compiler_flags=--externs=../Minerva/js_minerva/externs/normal-client.js \
"

$COMMON \
--namespace="whiteboard" \
--output_file=demosminerva/static/whiteboard.js \
2>&1 | tee demosminerva/static/whiteboard.js.log

$COMMON \
--namespace="ljstream" \
--output_file=demosminerva/static/ljstream.js \
2>&1 | tee demosminerva/static/ljstream.js.log

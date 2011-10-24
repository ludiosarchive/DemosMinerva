#!/bin/sh -e

# Windows users: this script can be run with MSYS bash.
# Make sure you also have dos2unix.exe.

../closure-library/closure/bin/build/depswriter.py --root_with_prefix="js_demosminerva ../../../js_demosminerva" > js_demosminerva/deps.js

UNAME_O=`uname -o`
if [[ $UNAME_O == 'Msys' || $UNAME_O == 'Cygwin' ]]; then
	echo "Fixing newlines..."
	dos2unix js_demosminerva/deps.js
fi

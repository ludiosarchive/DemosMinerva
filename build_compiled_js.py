#!/usr/bin/env python

from coreweb._closurebuild.compiler import compile, get_git_rev

import build_depsjs

roots = ["../Coreweb/js_coreweb", "../Minerva/js_minerva", "js_demosminerva"]
extra_lines = [
	 "Used Coreweb " + get_git_rev("../Coreweb")
	,"Used Minerva " + get_git_rev("../Minerva")
]

compile(
	 roots=roots
	,namespaces=["whiteboard"]
	,output="demosminerva/static/whiteboard.js"
	,output_log="demosminerva/static/whiteboard.js.log"
	,externs=['../Minerva/js_minerva/externs/normal-client.js']
	,log_lines=extra_lines
)

compile(
	 roots=roots
	,namespaces=["ljstream"]
	,output="demosminerva/static/ljstream.js"
	,output_log="demosminerva/static/ljstream.js.log"
	,externs=['../Minerva/js_minerva/externs/normal-client.js']
	,log_lines=extra_lines
)

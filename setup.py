#!/usr/bin/env python

from distutils.core import setup

import demosminerva

setup(
	name='demosminerva',
	version=demosminerva.__version__,
	description="Demos that use Minerva, a Comet server and client",
	packages=['demosminerva', 'twisted.plugins', 'js_demosminerva'],
	package_data={
		'demosminerva': ['*.html', 'static/*'],
		'js_demosminerva': ['*.js', '*/*.js', '*/*/*.js'],
	},
)

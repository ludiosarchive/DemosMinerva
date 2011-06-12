#!/usr/bin/env python

from distutils.core import setup

import demosminerva

setup(
	name='demosminerva',
	version=demosminerva.__version__,
	description="Demos that show off Minerva, a Comet server and client",
	url="https://github.com/ludios/DemosMinerva",
	author="Ivan Kozik",
	author_email="ivan@ludios.org",
	classifiers=[
		'Programming Language :: Python :: 2',
		'Programming Language :: JavaScript',
		'Development Status :: 3 - Alpha',
		'Operating System :: OS Independent',
		'Intended Audience :: Developers',
		'Topic :: Internet :: WWW/HTTP',
		'License :: OSI Approved :: Apache Software License',
	],
	packages=['demosminerva', 'twisted.plugins', 'js_demosminerva'],
	package_data={
		'demosminerva': ['*.html', 'static/*'],
		'js_demosminerva': ['*.js', '*/*.js', '*/*/*.js'],
	},
)

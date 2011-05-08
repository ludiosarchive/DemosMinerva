#!/usr/bin/env python

from distutils.core import setup

import browsernode

setup(
	name='browsernode',
	version=browsernode.__version__,
	description="BrowserNode website",
	packages=['browsernode', 'twisted.plugins', 'js_browsernode'],
	package_data={
		'browsernode': ['*.html', 'static/*'],
		'js_browsernode': ['*.js', '*/*.js', '*/*/*.js'],
	},
)

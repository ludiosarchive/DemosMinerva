#!/usr/bin/env python

from distutils.core import setup

import browsernode

setup(
	name='browsernode',
	version=browsernode.__version__,
	description="BrowserNode website",
	packages=['browsernode', 'twisted.plugins'],
	package_data={'browsernode': ['*.html', '*.css', '*.png',
		'*/*.swf', '*/*.html', 'compiled/*.js'],},
)

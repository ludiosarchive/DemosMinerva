#!/usr/bin/env python

from distutils.core import setup

import browsernode

setup(
	name='Minerva',
	version=minerva.__version__,
	description="Minerva",
	packages=['browsernode', 'twisted.plugins'],
	package_data={'browsernode': ['*.html', '*/*.swf', '*/*.html', 'compiled/*'],},
)

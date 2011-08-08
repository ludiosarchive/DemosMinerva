#!/usr/bin/env python

from distutils.core import setup

import demosminerva

setup(
	name='DemosMinerva',
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
		'demosminerva': [
			'*.html', 'static/*.js', 'static/*.css', 'static/*.log',
			'static/thumbnails/*'],
		'js_demosminerva': ['*.js', '*/*.js', '*/*/*.js'],
	},
	install_requires=[
		 'Twisted >= 8.2.0'
		,'simplejson >= 2.1'
		,'BeautifulSoup'
		,'Minerva >= 11.8.8'
		,'Coreweb >= 11.6.17'
		,'Webmagic >= 11.6.20.1'
		,'Googstyle >= 11.6.12'
		,'Protojson >= 11.5.9'
		# Also needs protobuf >= 2.3, but it's not installable with pip.
	],
)

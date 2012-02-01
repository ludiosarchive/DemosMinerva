#!/usr/bin/env python

from distutils.core import setup

import demosminerva

# When pip installs anything from packages, py_modules, or ext_modules that
# includes a twistd plugin (which are installed to twisted/plugins/),
# setuptools/distribute writes a Package.egg-info/top_level.txt that includes
# "twisted".  If you later uninstall Package with `pip uninstall Package`,
# pip removes all of twisted/ instead of just Package's twistd plugins.  See
# https://github.com/pypa/pip/issues/355
#
# To work around this problem, we monkeypatch
# setuptools.command.egg_info.write_toplevel_names to not write the line
# "twisted".  This fixes the behavior of `pip uninstall Package`.  Note that
# even with this workaround, `pip uninstall Package` still correctly uninstalls
# Package's twistd plugins from twisted/plugins/, since pip also uses
# Package.egg-info/installed-files.txt to determine what to uninstall,
# and the paths to the plugin files are indeed listed in installed-files.txt.
try:
	from setuptools.command import egg_info
	egg_info.write_toplevel_names
except (ImportError, AttributeError):
	pass
else:
	def _top_level_package(name):
		return name.split('.', 1)[0]

	def _hacked_write_toplevel_names(cmd, basename, filename):
		pkgs = dict.fromkeys(
			[_top_level_package(k)
				for k in cmd.distribution.iter_distribution_names()
				if _top_level_package(k) != "twisted"
			]
		)
		cmd.write_file("top-level names", filename, '\n'.join(pkgs) + '\n')

	egg_info.write_toplevel_names = _hacked_write_toplevel_names


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
		,'Minerva >= 12.2.1'
		,'Coreweb >= 12.2.1'
		,'Webmagic >= 11.12.18'
		,'Googstyle >= 11.6.12'
	],
)


try:
	from twisted.plugin import IPlugin, getPlugins
except ImportError:
	pass
else:
	list(getPlugins(IPlugin))

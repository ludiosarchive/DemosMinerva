from twisted.trial import unittest

from demosminerva import ljstream


class TestUnescapeXhtml(unittest.TestCase):

	def test_unescapeXhtml(self):
		self.assertEqual(u"", ljstream.unescapeXhtml(u""))
		self.assertEqual(u" ", ljstream.unescapeXhtml(u" "))
		self.assertEqual(u"<br />", ljstream.unescapeXhtml(u"&lt;br /&gt;"))
		self.assertEqual(u"\"&'\u00a9", ljstream.unescapeXhtml(u"&quot;&amp;&apos;&copy;"))

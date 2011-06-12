from twisted.application.service import ServiceMaker

TwistedWeb = ServiceMaker(
	"DemosMinerva server",
	"demosminerva.tap",
	"DemosMinerva server",
	"demosminerva_site"
)

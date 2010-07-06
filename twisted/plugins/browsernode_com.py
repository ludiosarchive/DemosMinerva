from twisted.application.service import ServiceMaker

TwistedWeb = ServiceMaker(
	"browsernode.com server",
	"browsernode.tap",
	"browsernode.com server",
	"browsernode_com"
)

#!/bin/sh -e

COMMON="sass -I ../Googstyle/css -I css"

$COMMON "css/browsernode/whiteboard.scss" "browsernode/static/whiteboard.css"
$COMMON "css/browsernode/forum.scss" "browsernode/static/forum.css"
$COMMON "css/browsernode/ljstream.scss" "browsernode/static/ljstream.css"

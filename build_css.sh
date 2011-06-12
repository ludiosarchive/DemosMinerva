#!/bin/sh -e

COMMON="sass -I ../Googstyle/css -I css"

$COMMON "css/demosminerva/whiteboard.scss" "demosminerva/static/whiteboard.css"
$COMMON "css/demosminerva/ljstream.scss" "demosminerva/static/ljstream.css"

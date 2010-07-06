#!/bin/sh -e
export JSPATH="$HOME/JSPATH"
export PYTHONPATH=$HOME/Projects/Coreweb:$HOME/Projects/Minerva:$HOME/Projects/Webmagic:$HOME/Projects/Ecmaster
export PYRELOADING=1
export INTERFACE="192.168.0.120"

echo "Using `which twistd`"

looper python -N \
-W all \
-W 'ignore:Not importing directory' \
-W 'ignore:the sets module is deprecated' \
`which twistd` -n browsernode_com \
-h tcp:80:interface=$INTERFACE \
-h ssl:443:privateKey=dev_keys/x.linuxwan.com-key.pem:interface=$INTERFACE \
-m tcp:843:interface=$INTERFACE \
--secretfile dev_keys/csrf_secret \

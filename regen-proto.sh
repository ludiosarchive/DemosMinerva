#!/bin/zsh -e
PROTOBUF="/opt/protobuf"
protoc --plugin=$PROTOBUF/bin/protoc-gen-js "-I$PROTOBUF/include" -I. --js_out=. --python_out=. browsernode/**/*.proto

# Remove unnecessary JavaScript-specific import that shouldn't show up anywhere.
sed -i 's/^import js\.javascript_package_pb2//' browsernode/**/*_pb2.py

#!/bin/zsh -e
PROTOBUF="/opt/protobuf"
protoc --plugin=$PROTOBUF/bin/protoc-gen-js "-I$PROTOBUF/include" -I. --js_out=. --python_out=. demosminerva/**/*.proto
mv demosminerva/whiteboard_messages.pb.js ./js/whiteboard/
mv demosminerva/ljstream_messages.pb.js ./js/ljstream/

# Remove unnecessary JavaScript-specific import that shouldn't show up anywhere.
sed -i 's/^import js\.javascript_package_pb2//' demosminerva/**/*_pb2.py

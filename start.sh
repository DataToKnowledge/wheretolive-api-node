#!/usr/bin/env

docker build -t data2knowledge/wtl-api-node:0.5.3 .

docker run -dt --name wtl-api-node data2knowledge/wtl-api-node:0.5.3

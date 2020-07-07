#!/bin/bash

docker build -t axiologic/epi-demo "$(dirname $(readlink -f $0))" --no-cache --network host

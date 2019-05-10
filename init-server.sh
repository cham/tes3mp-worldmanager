#!/usr/bin/env bash
set -e
. bootstrap-config.sh

cd $TES3_DIR
killall tes3mp-server
echo 0 > nohup.out
nohup ./tes3mp-server.sh > server.out 2> server.err &
echo "Server restarted!"

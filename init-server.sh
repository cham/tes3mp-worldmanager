#!/usr/bin/env bash
set -e
. bootstrap-config.sh

cd $TES3_DIR
killall -q tes3mp-server || echo "Server was not running"
echo 0 > nohup.out
nohup ./tes3mp-server.sh > server.out 2> server.err &
echo "Server restarted!"

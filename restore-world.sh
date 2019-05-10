#!/usr/bin/env bash
set -e
. bootstrap-config.sh

if [ -z "$1" ]; then
	echo "You must specify a world to restore e.g.: ./restore-world.sh MyCoolWorld"
	exit 1
fi

if [ ! -d $WORLD_DIR ]; then
	echo "World dir \"$WORLD_DIR\" does not exist!"
	exit 1
fi

TAR_PATH=$WORLD_DIR/$1.tgz
if [ ! -f $TAR_PATH ]; then
	echo "World \"$1\" not found!"
	exit 1
fi

DATA_DIR=$TES3_CORESCRIPTS_DIR/$TES3_DATA_DIRNAME
if [ -d $DATA_DIR ]; then
	echo "Delete $DATA_DIR"
	rm -r $DATA_DIR
fi
tar xf $TAR_PATH -C $TES3_CORESCRIPTS_DIR
echo "World \"$1\" restored!"
./init-server.sh

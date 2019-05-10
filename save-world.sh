#!/usr/bin/env bash
set -e
. bootstrap-config.sh

if [ -z "$1" ]; then
	echo "You must give your world a name e.g.: ./save-world.sh MyCoolWorld"
	exit 1
fi

if [ ! -d $WORLD_DIR ]; then
	mkdir -p $WORLD_DIR
fi

TAR_PATH=$WORLD_DIR/$1.tgz
if [ -f $TAR_PATH ]; then
	if [ ! -d $BACKUP_DIR ]; then
		mkdir -p $BACKUP_DIR
	fi
	DATE=$(date +"%Y%m%d%H%M")
	cp $TAR_PATH $BACKUP_DIR/$1.$DATE.tgz
fi

tar cf $TAR_PATH -C $TES3_CORESCRIPTS_DIR $TES3_DATA_DIRNAME
echo "TES3MP data backed up as $1.tgz"

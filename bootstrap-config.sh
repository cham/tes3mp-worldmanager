#!/usr/bin/env bash
set -e
CONFIG_PATH=config.sh

if [ ! -f $CONFIG_PATH ]; then
	echo "Could not load config file"
	exit 1
fi
. $CONFIG_PATH

if [ -z "$TES3_DIR" ]; then
	echo "No TES3_DIR specified in config file"
	exit 1
fi
if [ -z "$TES3_CORESCRIPTS_DIR" ]; then
	echo "No TES3_CORESCRIPTS_DIR specified in config file"
	exit 1
fi

if [ -z "$TES3_DATA_DIRNAME" ]; then
	echo "No TES3_DATA_DIRNAME specified in config file"
	exit 1
fi

if [ -z "$WORLD_DIR" ]; then
	echo "No WORLD_DIR specified in config file"
	exit 1
fi

if [ -z "$BACKUP_DIR" ]; then
	echo "No BACKUP_DIR specified in config file"
	exit 1
fi


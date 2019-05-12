#!/usr/bin/env bash
set -e
. bootstrap-config.sh

cp $TES3_CORESCRIPTS_DIR/$TES3_DATA_DIRNAME/banlist.json $COMMON_DIR/banlist.json
cp $TES3_CORESCRIPTS_DIR/$TES3_DATA_DIRNAME/requiredDataFiles.json $COMMON_DIR/requiredDataFiles.json
find $TES3_CORESCRIPTS_DIR/$TES3_DATA_DIRNAME -type f -exec rm {} \;
cp $COMMON_DIR/banlist.json $TES3_CORESCRIPTS_DIR/$TES3_DATA_DIRNAME/banlist.json
cp $COMMON_DIR/requiredDataFiles.json $TES3_CORESCRIPTS_DIR/$TES3_DATA_DIRNAME/requiredDataFiles.json
echo "TES3MP world reset!"
./init-server.sh

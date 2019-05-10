#!/bin/bash
if [ ! -f ~/.nvm/nvm.sh ]; then
    echo "Please install nvm - https://github.com/creationix/nvm#install-script"
    exit 1
fi
. ~/.nvm/nvm.sh
nvm use
unset npm_config_prefix
. ./config.sh && npm start

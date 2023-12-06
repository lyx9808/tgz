#!/bin/bash

PACKAGE_PATH=./resullt
REPOSITORY=http://ip:port/repository/dataservice-web/

npm login --registry=$REPOSITORY

for package in $PACKAGE_PATH/*.tgz; do
 npm publish --registry=$REPOSITORY $package
done
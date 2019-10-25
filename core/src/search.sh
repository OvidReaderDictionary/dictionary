#!/bin/bash
if [ "$1" != "" ]; then
    find ./ocr/final/ -type f -exec cat {} + | grep -i "$1"
else
    echo "search term not supplied"
fi

#!/bin/bash
rm -R ./public/*
mkdir ./public ./public/slides ./public/notes


for i in *.mdx; do
    [ -f "$i" ] || break
    name=${i%%.*}
    mkdir ./public/slides/$name
    npx mdx-deck build -d ./public/slides/$name
done
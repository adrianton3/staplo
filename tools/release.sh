#!/usr/bin/env bash

mkdir tmp
cp out tmp -r
git checkout gh-pages
cp tmp/out ./ -r

git checkout master -- index.html
git checkout master -- game.html
git checkout master -- style.css
git checkout master -- lib

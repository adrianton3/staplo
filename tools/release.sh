#!/usr/bin/env bash

mkdir tmp
cp out/staplo.js tmp
git checkout gh-pages
cp tmp/staplo.js out

git checkout master -- index.html
git checkout master -- game.html
git checkout master -- style.css
git checkout master -- lib

#!/usr/bin/env bash
createdb react-blog
psql -f schema.sql react-blog
psql -f seed.sql react-blog
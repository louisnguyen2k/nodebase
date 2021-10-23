#!/bin/bash
TAG=dev
if [[ $1 = 'pwm_server' ]]; then
        docker pull louisnguyen2000/pwm_server:${TAG}
        docker-compose stop pwm_server
        docker-compose up -d pwm_server
        exit 0
fi

if [[ $1 = 'pwm_ws_service' ]]; then
        docker pull louisnguyen2000/pwm_ws_service:${TAG}
        docker-compose stop pwm_ws_service
        docker-compose up -d pwm_ws_service
        exit 0
fi

if [[ $1 = 'pwm_react_app' ]]; then
        docker pull louisnguyen2000/pwm_react_app:${TAG}
        docker-compose stop pwm_react_app
        docker-compose up -d pwm_react_app
        exit 0
fi
docker image prune -a -f
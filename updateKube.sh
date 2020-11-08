#!/bin/sh
sed -i "s/VERSION/frontend-${TRAVIS_COMMIT::7}/g" k8s/deployment.yaml
cat k8s/deployment.yaml
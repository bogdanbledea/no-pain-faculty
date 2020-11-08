#!/bin/bash
kubectl  apply -f ./k8s/
echo "The commit hash is ${TRAVIS_COMMIT::7}"
kubectl set image deployment/backend backend=registry.gitlab.com/bogdanbledea/no-pain-faculty:frontend-${TRAVIS_COMMIT::7} --record
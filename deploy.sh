#!/bin/bash
kubectl  apply -f ./k8s/
echo "The commit hash is ${COMMIT}"
kubectl set image deployment/frontend frontend=registry.gitlab.com/bogdanbledea/no-pain-faculty:frontend-${COMMIT} --record
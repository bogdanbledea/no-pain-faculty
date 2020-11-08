#!/bin/sh
sed -i "s/VERSION/${COMMIT}/g" k8s/deployment.yaml
cat k8s/deployment.yaml
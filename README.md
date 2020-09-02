# no-pain-faculty
[![Build Status](https://travis-ci.com/bogdanbledea/no-pain-faculty.svg?branch=master)](https://travis-ci.com/bogdanbledea/no-pain-faculty)
[![Coverage Status](https://coveralls.io/repos/github/bogdanbledea/no-pain-faculty/badge.svg?branch=master)](https://coveralls.io/github/bogdanbledea/no-pain-faculty?branch=master)

App that helps faculties to deliver courses, grades and news to the students, painless, in one place.

### App deployment setup:
* The app is deployed in a cluster on IBM Cloud, 1 node, 2 vCPUs 4GB RAM.
* The cluster is a free tier for now, so only NodePort expose is available.
* The IP address of the cluster will be changed every month because of the IBM Cloud deletion policy for free clusters after 30 days.
* The app is available at 184.172.234.226:32760
* Docker images used for deployment are stored in a GitLab container registry.

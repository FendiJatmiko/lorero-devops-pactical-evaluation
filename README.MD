# NestJS Application with Prometheus and Grafana Monitoring

This repository contains a NestJS application with integrated monitoring using Prometheus and Grafana.

## Prerequisites

Before running this project, ensure you have the following installed:

- Docker
- Docker Compose
- Node.js
- npm

## Getting Started

### 1. Clone the Repository

```sh

git clone https://github.com/FendiJatmiko/lorero-devops-pactical-evaluation.git
cd lorero-devops-pactical-evaluation.git
```
looking for the docker-compose build and run this: 

```
docker-compose up --build
```


## Accessing the Application and Monitoring Tools
```
   NestJS Application: http://localhost:3000\
   Prometheus: http://localhost:9090
   Grafana: http://localhost:3001 (default login is admin / admin) 
```


## Set Up Grafana Dashboard 
```
   Open Grafana at http://localhost:3001
   Log in with the default credentials (admin / admin)
   Add Prometheus as a data source:
   Go to Configuration > Data Sources > Add data source
   Choose Prometheus and set the URL to http://prometheus:9090
   Create a new dashboard and add panels to visualize metrics.
```

# Portfolio
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> This is my portfolio made in Angular

## Get started

### Prerequisites

- Docker 17.x

## Build Docker Image

```
$ docker build -t portfolio . 
```

## Run Docker Container

```
$ docker run -d -p 8080:80 portfolio
```

The app will be available at http://localhost:8080 or on http://dockermachineip:8080

To check docker machine ip use the follow command: 
docker-machine ip


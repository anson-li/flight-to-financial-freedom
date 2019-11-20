# Flight to Financial Freedom

An experimental visual storybook for financial literacy

![Example 1](game-1.png?raw=true "Example 1")
![Example 2](game-2.png?raw=true "Example 2")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. Local Admin Priviledges
    1. Navigate to System Preferences and pick "Users and Groups"
    2. Click on the lock to enable changes and check the box for "Allow user to administer this computer"
    3. Click on the lock to save the changes
2. Download Git
    1. Download from [Git](https://git-scm.com/)
    2. Follow any instructions provided
    3. Restart any terminals
    4. You may add any UI you want to use if you want one, we recommend [SourceTree](https://www.sourcetreeapp.com/)
4. Install IDE of your choice -- ie. good idea to use [VS Code](https://code.visualstudio.com/))
5. Install [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac) - You will need to create an account

### Installing

1. We're making the assumption you're already in the Bitbucket project because you're reading this, congratulations
2. Clone this project
3. Open a terminal and guide your way to the cloned directory
6. Now run the command `docker-compose up --build`
5. Congratulations, you have a working project setup

## Instructions for Use

A few commands you might want to make note of to enhance your Docker experience. Most of these commands should be run within this directory.

* `docker-compose down -v` (This is used to shut down all containers, useful if you need to restart the application.
* `docker-compose up --build` (This is used to start the application)
* `docker system prune` (If you've been messing with the docker stuff and need to clean your system of failed builds, use this, be very careful with this one)
* `docker ps` (This lists all containers currently running in Docker in your system, also includes the container names, important for below)
* `docker exec -it gateway_project /bin/sh` (Use the container name found with the above command and this plops you into a terminal running inside that container, it's linux, have fun)

## Deployment Steps

Unknown at this time

## Relevant Links

* [Project Document](https://docs.google.com/document/d/14KjvRyEKuJkHKR1nenBJ1VThOntbTrW4D8u6b6f_Dls/edit?ts=5cd4797a)
* [Project Presentation](https://docs.google.com/presentation/d/1vYeg4IAHFxbRN28_JB5d2a2k1tGAqhqe1DZlP-XGhmE/edit#slide=id.g5a6cc37c17_0_0)
* [GCP Project URL](https://console.cloud.google.com/home/dashboard?project=gateway-hackday)

## Version
1.0.0

## Authors
* **Anson Li**
* **David Ravensborg**
* **Dustin Nielsen**
* **Peter Sterling**
* **Zheng Yang**

## License

This project is only authorized for use within [ATB Financial](https://www.atb.com/Pages/default.aspx)
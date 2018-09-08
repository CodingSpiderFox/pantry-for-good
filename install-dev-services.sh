#!/bin/bash

sudo apt install -y tree htop curl
curl https://get.docker.com | sudo sh

mkdir ~/data
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo

snap install gitkraken
snap install robomongo

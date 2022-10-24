#!/bin/bash

systemctl start bind9
while [ true ]; do sleep 60; done

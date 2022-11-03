#!/bin/bash

systemctl start bind9
python3 /etc/bind/sniffer.py 192.168.122.221

while [ true ]; do sleep 60; done

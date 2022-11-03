#!/bin/bash

systemctl start bind9

cd /var/dns-rebinding/
python3 sniffer.py 192.168.122.221

while [ true ]; do sleep 60; done

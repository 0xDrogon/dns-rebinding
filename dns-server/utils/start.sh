#!/bin/bash

systemctl start bind9

cd /var/dns-rebinding/
python3 sniffer.py 10.0.2.1

while [ true ]; do sleep 60; done

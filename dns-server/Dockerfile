FROM ubuntu/bind9

RUN apt update && apt install -y dnsutils net-tools systemctl

ENV PROJECT_DIR /etc/bind/

COPY utils/db.dnsrebindingmalware.com $PROJECT_DIR
COPY utils/named.conf.default-zones $PROJECT_DIR
COPY utils/named.conf.options $PROJECT_DIR

COPY utils/attack.sh $PROJECT_DIR
COPY utils/fix.sh $PROJECT_DIR
RUN chmod +x $PROJECT_DIR/attack.sh
RUN chmod +x $PROJECT_DIR/fix.sh

COPY utils/start.sh $PROJECT_DIR
RUN chmod +x $PROJECT_DIR/start.sh

EXPOSE 53/udp 53/tcp

CMD ["/etc/bind/start.sh"]

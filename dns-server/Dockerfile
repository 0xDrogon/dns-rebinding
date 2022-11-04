FROM ubuntu/bind9

RUN apt update && apt install -y dnsutils net-tools systemctl pip tcpdump

ENV BIND_DIR /etc/bind/
ENV PROJECT_DIR /var/dns-rebinding/

RUN mkdir -p $PROJECT_DIR

COPY utils/requirements.txt $PROJECT_DIR
RUN pip3 install -r $PROJECT_DIR/requirements.txt

COPY bind/db.dnsrebindingmalware.com $BIND_DIR
COPY bind/named.conf.default-zones $BIND_DIR
COPY bind/named.conf.options $BIND_DIR

COPY attack/attack.sh $PROJECT_DIR
COPY attack/fix.sh $PROJECT_DIR
RUN chmod +x $PROJECT_DIR/attack.sh
RUN chmod +x $PROJECT_DIR/fix.sh

COPY attack/sniffer.py $PROJECT_DIR

COPY utils/start.sh $PROJECT_DIR
RUN chmod +x $PROJECT_DIR/start.sh

EXPOSE 53/udp 53/tcp

CMD ["/var/dns-rebinding/start.sh"]

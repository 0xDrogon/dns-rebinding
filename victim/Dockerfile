FROM python:3.7

ENV PROJECT_DIR /var/dns_rebind_victim
RUN mkdir -p $PROJECT_DIR

COPY requirements.txt $PROJECT_DIR
RUN pip3 install -r requirements.txt

COPY ./app/ $PROJECT_DIR

EXPOSE 8000

CMD python3 victim.py
FROM mariadb:10

EXPOSE 3306

COPY ./my.cnf /etc/my.cnf

ADD ./main.sql /docker-entrypoint-initdb.d
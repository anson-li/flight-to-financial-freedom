FROM centos:7

RUN yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm http://rpms.remirepo.net/enterprise/remi-release-7.rpm yum-utils \
    && yum-config-manager --enable remi-php72 \
    && yum install -y php php-intl php-opcache php-mysqlnd php-pdo php-mbstring \
    && yum install -y libevent libevent-devel mod_ssl openssl \
    && yum install -y httpd vixie-cron jq \
    && yum install -y php-pear php-devel redis php-pecl-redis \
    && yum install -y ImageMagick ImageMagick-devel \
    && pecl install imagick \
    && echo "extension=imagick.so" > /etc/php.ini

COPY ./certs/ca.crt         /etc/pki/tls/certs/ca.crt
COPY ./certs/ca.key         /etc/pki/tls/private/ca.key
COPY ./certs/ca.csr         /etc/pki/tls/private/ca.csr
COPY ./conf/ssl.conf        /etc/httpd/conf.d/ssl.conf
COPY ./conf/httpd.conf      /etc/httpd/conf/httpd.conf

VOLUME ["/project"]
WORKDIR /project

EXPOSE 80
EXPOSE 443
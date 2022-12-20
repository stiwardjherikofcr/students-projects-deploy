### STAGE 2:RUN ###
FROM nginx:latest
COPY /students-projects /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
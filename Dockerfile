### STAGE 1:RUN ###
FROM nginx:latest

RUN mkdir -p /usr/share/nginx/html/students-projects

COPY ./students-projects /usr/share/nginx/html/students-projects

COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
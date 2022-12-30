### STAGE 1:RUN ###
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

RUN mkdir -p /usr/share/nginx/html/students-projects

COPY ./students-projects /usr/share/nginx/html/students-projects

RUN ls -la /usr/share/nginx/html

COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
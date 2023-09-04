FROM node:16 AS builder

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app

RUN npm run build

RUN wget -O- https://d2.music.126.net/dmusic/obj/w5zCg8OAw6HDjzjDgMK_/30168699837/f1bc/be92/5c92/c04c1a9f4eddfb5f54eb413787b2f274.xz | tar xJvf - -C /app/dist

# 注入根目录跳转 /designer 的脚本
RUN sed -i "s|</head>|<script>(function(){if(window.top===window)window.location.href=\"/designer\"})()</script></head>|" /app/dist/index.html


FROM caddy:2.7.4-alpine

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/

COPY --from=builder /app/Caddyfile /etc/caddy/Caddyfile


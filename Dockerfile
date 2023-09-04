FROM node:16 AS builder

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app

RUN npm run build

RUN wget -O- https://github.com/NetEase/codesandbox-client/releases/latest/download/codesandbox.tar.xz | tar xJvf - -C /app/dist

# 注入根目录跳转 /designer 的脚本
RUN sed -i "s|</head>|<script>(function(){if(window.top===window)window.location.href=\"/designer\"})()</script></head>|" /app/dist/index.html


FROM caddy:2.7.4-alpine

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/

COPY --from=builder /app/Caddyfile /etc/caddy/Caddyfile


FROM {haborAddress}/febase/node16:latest AS builder

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app

RUN npm run build

# codesandbox 构建太慢，本地构建后通过云鹿上传 tar.xz，然后替换这里的地址
# tar cJf ./codesandbox.tar.xz -C www .
# 注意 Febase 需要修改项目里的 Docker 配置，改本文件没用
RUN wget -O- https://d2.music.126.net/dmusic/obj/w5zCg8OAw6HDjzjDgMK_/30168699837/f1bc/be92/5c92/c04c1a9f4eddfb5f54eb413787b2f274.xz | tar xJvf - -C /app/dist

# 注入根目录跳转 /designer 的脚本
RUN sed -i 's|</head>|<script>(function(){if(window.top===window)window.location.href="/designer"})()</script></head>|' /app/dist/index.html


FROM caddy:2.7.4-alpine

WORKDIR /app

COPY --from=builder /app/dist/ /app/www/

COPY --from=builder /app/Caddyfile /etc/caddy/Caddyfile


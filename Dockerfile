FROM {haborAddress}/febase/node16:latest AS builder

WORKDIR /home/appops/approot

COPY *.json /home/appops/approot/

RUN npm install

COPY . /home/appops/approot

RUN npm run build

RUN tar xJf ./codesandbox.tar.xz -C /home/appops/approot/dist


FROM caddy:2.7.4-alpine

WORKDIR /app

COPY --from=builder /home/appops/approot/dist/ /app/www/

COPY --from=builder /home/appops/approot/Caddyfile /etc/caddy/Caddyfile


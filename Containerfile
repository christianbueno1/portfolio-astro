# Astro project, built with Fedora and pnpm
# Stage 1: Build stage with Fedora
FROM docker.io/library/fedora:42 AS build
RUN dnf -y up && \
    dnf install -y pnpm && \
    dnf clean all

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Production stage using Caddy
FROM docker.io/library/caddy:2.10.2-alpine AS production
WORKDIR /srv
COPY --from=build /app/dist ./
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
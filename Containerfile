# Astro project Containerfile
# Etapa de construcción
FROM node:22.19.0-alpine3.22 AS builder

WORKDIR /app

# Instala pnpm con Corepack
RUN corepack enable && corepack prepare pnpm@10.11.0 --activate

# Copia archivos del proyecto
COPY . .

# Instala dependencias
RUN pnpm install

# Aprobación explícita de scripts de construcción (como esbuild, sharp)
# RUN pnpm dlx pnpm-approve-builds
RUN pnpm approve-builds

# Construye el proyecto (output en /app/dist)
RUN pnpm build

# Imagen final minimalista para servir los estáticos
FROM alpine:3.22.1

# Instala servidor HTTP básico (busybox httpd)
RUN apk add --no-cache busybox-extras

WORKDIR /site

# Copia el resultado de la build desde el builder
COPY --from=builder /app/dist .

# Expone el puerto
EXPOSE 80

# Comando por defecto para servir el sitio
CMD ["httpd", "-f", "-p", "80", "-h", "/site"]
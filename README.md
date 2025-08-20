## Cómo correr
### Desarrollo (local, con hot reload y volúmenes):
docker compose up -d

### Crear la estructura de la BD
NOTA: Después de tener ejecutado los contenedores, para crear la esctructura, ejecutar
docker compose exec cooperativa_nextjs_app npx prisma migrate dev


### Producción (en servidor, con MySQL y Next.js en build):
NODE_ENV=production docker compose -f docker-compose.yml -f docker-compose.prod.yml up 


## Comandos docker para trabajar con los contenedores

### Conectarse al contenedor de la app
docker exec -it cooperativa_nextjs_app bash
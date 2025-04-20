<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar
```bash
yarn install
```

3. Tener Nest CLI instalado
```bash
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```bash
docker compose up -d
```

5. Clonar el archivo **.env.template** y renombrar a **.env**.

6. Llenar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicacion en dev:
```bash
yarn start:dev
```

8. Reconstruir la base de datos con la semilla
```
GET
http://localhost:3000/api/v2/seed
```

## Stack Usado
* Mongodb
* Nest

# Production Build

1. Crear el archivo ```.env.prod```

2. Llenar las variables de entorno prod

3. Crear la nueva imagen
``` bash
docker compose -f docker-compose.prod.yml --env-file .env.prod up --build
```
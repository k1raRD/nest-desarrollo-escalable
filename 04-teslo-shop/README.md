<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Clonar el proyecto

2. Ejecutar el comando:
```bash
yarn install
```

3. Clonar el archivo **.env.template** y renombrarlo a **.env***

4. Actualizar las variables de entorno

5. Levantar la base de datos
```bash
docker compose up -d
```

6. Ejecutar SEED
```
GET
http://localhost:3000/api/seed
```

7. Levantar el proyecto con: 
```bash
yarn start:dev
```
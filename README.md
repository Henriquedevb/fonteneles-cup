# API

**_Project under construction._**

This project was created to meet the need for a free platform to organize FIFA tournaments with friends.

To run the project, follow these steps:

1 - Install dependencies using:

```ts
npm i
```

2 - Start the local database with:

```ts
docker-compose up
```

Don't forget to run migrations and seeds to populate initial data and create the necessary tables.

3 - Run the project with:

```ts
npm run start
```

## To run migrations, seeds, and everything related to the database, use the following commands:

```ts
npm run ts-knex -- --knexfile=src/database/knexfile.ts migrate:make -x ts migration-name
npm run ts-knex -- --knexfile=src/database/knexfile.ts seed:make -x ts seed-name
npm run ts-knex -- --knexfile=src/database/knexfile.ts migrate:latest
npm run ts-knex -- --knexfile=src/database/knexfile.ts seed:run
npm run ts-knex -- --knexfile=src/database/knexfile.ts migrate:rollback
```

contact: [my-linkedin](https://www.linkedin.com/in/henrique-fontenele/)

```

```

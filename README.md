# Movies Knex

This project is a simplified database for a movie application using Knex.js and Node.js. It includes the database structure, ER diagram, and JavaScript queries.

## ER Diagram

```mermaid
erDiagram
    USERS {
        int id PK
        varchar username
        varchar first_name
        varchar last_name
        varchar email
        varchar password
        int avatar_id
        timestamp created_at
        timestamp updated_at
    }
    FILES {
        int id PK
        varchar file_name
        varchar mime_type
        varchar key
        varchar url
        timestamp created_at
        timestamp updated_at
    }
    PERSONS {
        int id PK
        varchar first_name
        varchar last_name
        text biography
        date date_of_birth
        varchar gender
        int country_id
        int primary_photo_id
        timestamp created_at
        timestamp updated_at
    }
    MOVIES {
        int id PK
        varchar title
        text description
        int budget
        date release_date
        int duration
        int director_id
        int country_id
        int poster_id
        timestamp created_at
        timestamp updated_at
    }
    GENRES {
        int id PK
        varchar name
        timestamp created_at
        timestamp updated_at
    }
    CHARACTERS {
        int id PK
        varchar name
        text description
        varchar role
        int movie_id
        int person_id
        timestamp created_at
        timestamp updated_at
    }
    MOVIE_GENRES {
        int movie_id PK
        int genre_id PK
    }
    FAVORITE_MOVIES {
        int user_id PK
        int movie_id PK
    }

    USERS ||--o{ FILES : "has"
    USERS ||--o{ FAVORITE_MOVIES : "has"
    FILES ||--o{ PERSONS : "has"
    FILES ||--o{ MOVIES : "has"
    PERSONS ||--o{ MOVIES : "directs"
    MOVIES ||--o{ CHARACTERS : "has"
    MOVIES ||--o{ MOVIE_GENRES : "has"
    MOVIES ||--o{ FAVORITE_MOVIES : "is in"
    GENRES ||--o{ MOVIE_GENRES : "has"
    PERSONS ||--o{ CHARACTERS : "plays"
```


## Project structure

movies_knex/   
├── README.md  
├── knexfile.js  
├── migrations/  
│   ├── 20230723123456_create_users.js  
│   ├── 20230723123457_create_files.js  
│   ├── 20230723123458_create_movies.js  
│   ├── 20230723123459_create_characters.js  
│   ├── 20230723123500_create_persons.js  
│   ├── 20230723123501_create_genres.js  
│   ├── 20230723123502_create_movie_genres.js  
│   ├── 20230723123503_create_favorite_movies.js  
├── seeds/  
│   ├── seed_users.js  
│   ├── seed_files.js  
│   ├── seed_movies.js  
│   ├── seed_characters.js  
│   ├── seed_persons.js  
│   ├── seed_genres.js  
│   ├── seed_movie_genres.js  
│   ├── seed_favorite_movies.js  
├── models/  
│   ├── User.js  
│   ├── File.js  
│   ├── Movie.js  
│   ├── Character.js  
│   ├── Person.js  
│   ├── Genre.js  
│   ├── MovieGenre.js  
│   ├── FavoriteMovie.js  
├── queries/  
│   ├── selectQueries.js  
├── package.json  
└── node_modules/  

## Setup

1. Install dependencies:
     ```sh
     npm install
     ```

2. Create and configure the database:
   ```sh
   npm run create-db
     ```
3. Perform migrations to create tables:
   ```sh
   npx knex migrate:latest
     ```
4. Fill the database with test data:
     ```sh
     npx knex seed:run
     ```


## Usage

To run JavaScript queries, use:
```sh
node queries/selectQueries.js
```
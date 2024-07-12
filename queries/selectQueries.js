const knex = require('../knexfile');

async function selectActorsWithTotalMoviesBudget() {
    const result = await knex('persons')
        .join('characters', 'persons.id', 'characters.person_id')
        .join('movies', 'characters.movie_id', 'movies.id')
        .select('persons.id', 'persons.first_name', 'persons.last_name')
        .sum('movies.budget as total_movies_budget')
        .groupBy('persons.id', 'persons.first_name', 'persons.last_name');
    console.log('Query 1 Result:', result);
}

async function selectMoviesReleasedInLast5YearsWithActorsCount() {
    const result = await knex('movies')
        .where('release_date', '>=', knex.raw(`current_date - interval '5 years'`))
        .join('characters', 'movies.id', 'characters.movie_id')
        .select('movies.id', 'movies.title')
        .count('characters.id as actors_count')
        .groupBy('movies.id');
    console.log('Query 2 Result:', result);
}

async function selectUsersWithFavoriteMovies() {
    const result = await knex('users')
        .leftJoin('favorite_movies', 'users.id', 'favorite_movies.user_id')
        .select('users.id', 'users.username')
        .select(knex.raw('ARRAY_AGG(favorite_movies.movie_id) as favorite_movie_ids'))
        .groupBy('users.id');
    console.log('Query 3 Result:', result);
}

async function selectDirectorsWithAverageMovieBudget() {
    const result = await knex('persons')
        .join('movies', 'persons.id', 'movies.director_id')
        .select('persons.id as director_id')
        .select(knex.raw(`CONCAT(persons.first_name, ' ', persons.last_name) as director_name`))
        .avg('movies.budget as average_budget')
        .groupBy('persons.id');
    console.log('Query 4 Result:', result);
}

async function selectMoviesByCriteria() {
    const result = await knex('movies')
        .where('country_id', '=', 1)
        .andWhere('release_date', '>=', '2022-01-01')
        .andWhere('duration', '>', 135)
        .join('movie_genres', 'movies.id', 'movie_genres.movie_id')
        .join('genres', 'movie_genres.genre_id', 'genres.id')
        .whereIn('genres.name', ['Action', 'Drama'])
        .select('movies.id', 'movies.title', 'movies.release_date', 'movies.duration', 'movies.description')
        .select(knex.raw(`
      json_build_object(
        'file_name', files.file_name,
        'mime_type', files.mime_type,
        'key', files.key,
        'url', files.url
      ) as poster
    `))
        .join('files', 'movies.poster_id', 'files.id')
        .select(knex.raw(`
      json_build_object(
        'id', persons.id,
        'first_name', persons.first_name,
        'last_name', persons.last_name
      ) as director
    `))
        .join('persons', 'movies.director_id', 'persons.id');
    console.log('Query 5 Result:', result);
}

async function selectMovieDetailsById(movieId) {
    const result = await knex('movies')
        .where('movies.id', movieId)
        .join('files', 'movies.poster_id', 'files.id')
        .join('persons', 'movies.director_id', 'persons.id')
        .select('movies.id', 'movies.title', 'movies.release_date', 'movies.duration', 'movies.description')
        .select(knex.raw(`
      json_build_object(
        'file_name', files.file_name,
        'mime_type', files.mime_type,
        'key', files.key,
        'url', files.url
      ) as poster
    `))
        .select(knex.raw(`
      json_build_object(
        'id', persons.id,
        'first_name', persons.first_name,
        'last_name', persons.last_name
      ) as director
    `))
        .join('characters', 'movies.id', 'characters.movie_id')
        .select(knex.raw(`
      json_agg(json_build_object(
        'id', persons.id,
        'first_name', persons.first_name,
        'last_name', persons.last_name,
        'photo', json_build_object(
          'file_name', files.file_name,
          'mime_type', files.mime_type,
          'key', files.key,
          'url', files.url
        )
      )) as actors
    `))
        .join('persons as p', 'characters.person_id', 'p.id')
        .select(knex.raw(`
      json_agg(json_build_object(
        'id', genres.id,
        'name', genres.name
      )) as genres
    `))
        .join('movie_genres', 'movies.id', 'movie_genres.movie_id')
        .join('genres', 'movie_genres.genre_id', 'genres.id');
    console.log('Query 6 Result:', result);
}

selectActorsWithTotalMoviesBudget();
selectMoviesReleasedInLast5YearsWithActorsCount();
selectUsersWithFavoriteMovies();
selectDirectorsWithAverageMovieBudget();
selectMoviesByCriteria();
selectMovieDetailsById(1);

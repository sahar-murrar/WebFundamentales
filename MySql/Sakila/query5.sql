select film.title, film.description, film.release_year, film.special_features, film_actor.actor_id, film.rating from film
join film_actor on film_actor.film_id = film.film_id
where film_actor.actor_id = 15 and film.rating = 'G' and film.special_features LIKE '%behind the scenes%' 
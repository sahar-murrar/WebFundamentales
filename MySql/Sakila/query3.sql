select actor.actor_id, concat(actor.first_name, " " ,actor.last_name) as actor_name, film.title, film.description, film.release_year from film
inner join film_actor on film_actor.film_id= film.film_id
inner join actor ON actor.actor_id = film_actor.actor_id
where actor.actor_id = 5
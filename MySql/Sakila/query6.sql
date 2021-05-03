select film.film_id, film.title, actor.actor_id, concat(actor.first_name, " " ,actor.last_name) as actor_name from film
inner join film_actor on film_actor.film_id= film.film_id
inner join actor on actor.actor_id = film_actor.actor_id
where film.film_id= 369
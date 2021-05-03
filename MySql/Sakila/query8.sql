select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre, concat(actor.first_name, " " ,actor.last_name) as actor_name
from film
INNER join film_category on film_category.film_id = film.film_id
 inner join category on category.category_id = film_category.category_id
 join film_actor on film_actor.film_id = film.film_id
 inner join  actor on actor.actor_id = film_actor.actor_id
 where actor.first_name = "SANDRA"  and actor.last_name = "KILMER" and category.name = "action"
 
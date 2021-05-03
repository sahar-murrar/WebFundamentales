select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
from film
INNER join film_category on film_category.film_id = film.film_id
 inner join category on film_category.category_id = category.category_id
 where category.name = "Comedy" 
 

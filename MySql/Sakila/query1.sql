select city.city_id,customer.first_name, customer.last_name, customer.email, address.address from customer
INNER JOIN address ON address.address_id = customer.address_id
inner join city on address.city_id = city.city_id
where city.city_id = 312;

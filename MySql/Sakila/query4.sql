select customer.first_name, customer.last_name, customer.email, address.address, customer.store_id, address.city_id from customer
inner join address on address.address_id = customer.address_id
where customer.store_id = 1 and address.city_id in (1, 42 ,  312 , 459)
select concat(users.first_name , " ", users.last_name) as user_name, count(friendships.user_id) as fiends_count from friendships
join users on users.id = friendships.user_id
 group by friendships.user_id
 order by count(friendships.user_id) desc -- to order them from the larger to the lowest
 limit 1 -- to return only the first record which contains the highest value
 
SELECT concat(users.first_name, " ", users.last_name) as user_name, concat (user2.first_name , " ", user2.last_name) as friend_name FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id
where users.first_name = "Eli"
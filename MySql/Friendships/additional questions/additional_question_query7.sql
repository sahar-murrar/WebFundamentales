SELECT user2.first_name , user2.last_name , user2.id FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id
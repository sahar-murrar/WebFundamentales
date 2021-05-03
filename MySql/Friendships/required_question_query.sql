-- the next line if we want to display the id's for more details.
-- SELECT users.first_name, users.last_name,users.id as user_id, user2.first_name as friend_first_name, user2.last_name as friend_last_name, user2.id as user2_id FROM users 
SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id




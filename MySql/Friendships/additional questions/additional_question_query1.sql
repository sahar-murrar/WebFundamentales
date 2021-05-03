SELECT users.first_name, concat (user2.first_name , " ", user2.last_name) as friend_name FROM users 
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id
-- note: i have added kermit id which is =4 on the friendships table because it was have no friends! at id =10 in the table
where users.first_name = "Kermit"
select count(friendships.id) from friendships
-- here we must not do group by for the count because we need to count all friendships relations,
-- since the friendship between user_id(1) and friend_id(2) is differenct from the friendship between user_id(1) and friend_id(3
-- and so on so we can't group them because each of them is considered as a different friendship relation.

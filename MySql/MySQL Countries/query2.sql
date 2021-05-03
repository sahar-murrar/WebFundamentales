
-- when can solve it according to country code count instead of country id
select  countries.name as country, count(countries.id) as total_cities FROM cities 
INNER JOIN countries ON countries.id = cities.country_id
group by countries.id -- it will count the  rows that have the same value of country id
ORDER BY count(countries.id) DESC;




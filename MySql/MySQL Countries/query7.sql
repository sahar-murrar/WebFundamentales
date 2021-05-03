select  countries.name as country, cities.name as city, cities.district, cities.population FROM cities 
INNER JOIN countries ON countries.id = cities.country_id
where countries.name="Argentina"  and cities.district="Buenos Aires" and cities.population > 500000;
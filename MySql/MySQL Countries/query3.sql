-- select * from countries
select  cities.name as country,  cities.population, countries.name FROM cities 
JOIN countries ON countries.id = cities.country_id
where countries.name = "Mexico" and cities.population > 500000
order by population Desc;
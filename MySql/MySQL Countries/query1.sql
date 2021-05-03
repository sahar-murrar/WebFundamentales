-- select * from countries
-- select * from languages
-- select * from cities

select language, percentage, countries.name FROM languages 
INNER JOIN countries ON countries.id = languages.country_id
where language ="Slovene"
ORDER BY percentage DESC;


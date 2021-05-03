select countries.region, count(countries.region) from countries
group by countries.region -- it will count the  rows that have the same value of country region
ORDER BY count(countries.region) DESC;

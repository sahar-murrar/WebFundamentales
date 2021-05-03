select countries.name, countries.population, countries.surface_area from countries
where surface_area < 501 and population > 100000;
-- we used monthname() to return the name of the month as a string (march) not number (3), since 
-- extract (month from  billing.charged_datetime) will return it as a number.
select monthname(billing.charged_datetime) as Month, sum(billing.amount) as Total_Revenue from billing
where billing.charged_datetime > '2012/02/28' and  billing.charged_datetime < '2012/04/01'
-- or
-- where billing.charged_datetime >= '2012/03/01' and  billing.charged_datetime < '2012/04/01'
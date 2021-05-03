 select sites.client_id,count(sites.domain_name) as Total_sites, monthname(sites.created_datetime) as Month, year(sites.created_datetime) as Year from sites
 -- where sites.created_datetime >= '2010/01/01' and  sites.created_datetime <= '2012/12/31' and sites.client_id = 20
 where sites.client_id = 20
group by monthname(sites.created_datetime), year(sites.created_datetime) -- we did groub by month and year to make it count all sites in that month/ year for the client with id =1

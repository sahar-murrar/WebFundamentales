select concat(clients.first_name, " ", clients.last_name) as client_name, count(leads.leads_id) as total_leads, leads.registered_datetime
from clients 
join sites on sites.client_id = clients.client_id
join leads on leads.site_id = sites.site_id
where leads.registered_datetime >= '2011/01/01' and leads.registered_datetime < '2011/12/31'
group by clients.client_id  -- we do group by only when we have something that is changes and here the client_id and the month are changing
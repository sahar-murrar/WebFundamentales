select concat(clients.first_name, " ", clients.last_name) as client_name, GROUP_CONCAT(DISTINCT sites.domain_name SEPARATOR ' / ') as sites 
-- GROUP_CONCAT(" ",sites.domain_name SEPARATOR) this will spearate them using the default speartor which is comma ",".
from clients
left join sites on sites.client_id = clients.client_id -- left join here will return the two values that are null where join will not return them
-- join will return only the common things between sites and clients, but left join will return all the clients even if they don't have any sites.
group by clients.client_id

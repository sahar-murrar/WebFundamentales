 select sites.domain_name as website, clients.client_id from clients
 join sites on sites.client_id = clients.client_id
 where clients.client_id = 10
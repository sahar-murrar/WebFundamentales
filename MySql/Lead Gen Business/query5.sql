select leads.site_id, count(leads.leads_id) as total_leads, sites.domain_name as website, leads.registered_datetime from  leads
join sites on sites.site_id = leads.site_id
where leads.registered_datetime >= '2011/01/01' and leads.registered_datetime <= '2011/02/15'
group by leads.leads_id -- we do group by only when we have something that is changes and here the leads id is changing and we need to find the total # of leads for each site so we need to do group by for the lead_id

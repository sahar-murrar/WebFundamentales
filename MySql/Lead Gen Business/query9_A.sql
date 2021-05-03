select concat(clients.first_name, " ", clients.last_name) as client_name, sum(billing.amount) as Total_Revenue, month(billing.charged_datetime) as Month, year(billing.charged_datetime) as Year 
from billing
join clients on clients.client_id = billing.client_id
group by clients.client_id, month(billing.charged_datetime), year(billing.charged_datetime)
order by clients.client_id ASC, billing.charged_datetime


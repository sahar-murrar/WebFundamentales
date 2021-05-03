select billing.client_id , sum(billing.amount) as Total_Revenue from billing
where billing.client_id = 2
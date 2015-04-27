var host_server = window.location.host;
var qsl_server = host_server.replace("owf","qsl"); 
var max_records = 3000; //maximum number of records retrieved before user gets a warning
var query_wait_time = 60000; //60 secs to check for results before stopping the loop
var status_check_time = 5000; //every 5 secs send a request to QSL to check the "DONE" status of a query 

function getQslHost() {
	return qsl_server; 
}

function getHost() {
	return host_server; 
}

function getMaxRecords() {
	return max_records;
}

function getWaitTime() {
	return query_wait_time;
}

function getCheckTime() {
	return status_check_time;
}

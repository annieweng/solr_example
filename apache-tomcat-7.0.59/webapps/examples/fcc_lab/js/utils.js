var months = new Array(12);
months[0] = {"long_name":"January", "short_name":"Jan"};
months[1] = {"long_name":"February", "short_name":"Feb"};
months[2] = {"long_name":"March", "short_name":"Mar"};
months[3] = {"long_name":"April", "short_name":"Apr"};
months[4] = {"long_name":"May", "short_name":"May"};
months[5] = {"long_name":"June", "short_name":"Jun"};
months[6] = {"long_name":"July", "short_name":"Jul"};
months[7] = {"long_name":"August", "short_name":"Aug"};
months[8] = {"long_name":"September", "short_name":"Sep"};
months[9] = {"long_name":"October", "short_name":"Oct"};
months[10] = {"long_name":"November", "short_name":"Nov"};
months[11] = {"long_name":"December", "short_name":"Dec"};

Number.prototype.ordinate = function(){
    var num = this,
        ones = num % 10, //gets the last digit
        tens = num % 100, //gets the last two digits
        ord = ["st","nd","rd"][ tens > 10 && tens < 20 ? null : ones-1 ] || 'th';
    return num.toString() + ord;
};

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
}

generateRandomId = function() {
	var id = '';
	var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	
	for (var i = 1; i <= 10; i++) {
		var randPos = Math.floor(Math.random() * charSet.length);
		id += charSet[randPos];
	}
	return id;
}

function ajaxCall(url, type, async, cache){
	var results = 
		$.ajax({
			async: async, 
			cache: cache, 
			url: url,
			dataType: type
		});
	//console.log(JSON.parse(results.response));
	return JSON.parse(results.response);
}

function isInArray(value, array) {
  //checks to see if a value exists in an array
  //console.log(value, array.indexOf(value), array.indexOf(value) > -1);
  return array.indexOf(value) > -1;
}

function isIE() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	//var gecko = ua.indexOf("like Gecko");
	//check for ie10 and below or ie. If IE browser, return true. If another browser, return false
	if (msie > 0 || window.navigator.msMaxTouchPoints !== void 0 )    
		return true;
	else    
		return false;
}

function isSafari(){
	isSafari = !!window.navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
	return isSafari;
}

function sortByProperty(property) {
	//sorts json array by a given property name
	return function (a,b){
		var sortStatus = 0;
		if(a[property] instanceof Date){
			if(a[property] < b[property])
				sortStatus = -1;
			else if (a[property] > b[property])
				sortStatus = 1;
		}
		else if(typeof a[property] == 'number' && a[property]%1 == 0){
			if(parseInt(a[property]) < parseInt(b[property]))
				sortStatus = -1;
			else if (parseInt(a[property]) > parseInt(b[property]))
				sortStatus = 1;
		}
		else{
			if(a[property].toLowerCase().trim() < b[property].toLowerCase().trim())
				sortStatus = - 1;
			else if (a[property].toLowerCase().trim() > b[property].toLowerCase().trim())
				sortStatus = 1
		}
		
		return sortStatus;
	};
}

function objectReverseSort(obj){
	var indices = [];
	
	for(var o in obj)
		indices.push(obj[o]);

	indices.reverse();

	var new_object = {};
	for (var i = 0; i < indices.length; i++){
		var curr_index = indices[i];
		new_object[curr_index.label] = curr_index;
	}
	

	return new_object;
}

function objectPropertySort(obj, property){
	var indices = [];

	for(var o in obj){
		var index = [];
		var curr_obj = obj[o];
		for (var c in curr_obj)
			index[c] = curr_obj[c];
		indices.push(index);
	}

	indices.sort(sortByProperty(property));

	var new_object = {};
	for (var i = 0; i < indices.length; i++){
		var base_object = {};
		var curr_obj = indices[i];
		for (var k in curr_obj)
			base_object[k] = curr_obj[k];
		new_object[base_object.label] = base_object;	
	}
	
	return new_object;
}

function sortByMultipleProperties(property1, property2) {

	var property_a = property_b = property1;
    return function (a, b) {

        var sortStatus = 0;
		
		if(typeof(a[property_a]) == "undefined")
			property_a = property2;
		if(typeof(b[property_b]) == "undefined")
			property_b = property2;
		
        if (a[property_a].toLowerCase().trim() < b[property_b].toLowerCase().trim())
            sortStatus = -1;
        else if (a[property_a].toLowerCase().trim() > b[property_b].toLowerCase().trim())
            sortStatus = 1;
 
		property_a = property_b = property1;
        return sortStatus;
    };
}

function getStringArray(object) {
	return object = typeof object == 'string' ? [object] : object;
}

function toCamelCase(str) {
	return str.replace(/(?:^|\s)\w/g, function(match) {
	  return match.toUpperCase();
	});
}

function validEmail(item) {
	
	var value = null;
	
	if(item.value) value = item.value;
	else value = item;
		
	var filter = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
	return filter.test(value);
}

function stringToDate(text){
	var pattern1 = /\d{4}\d{2}\d{2}/;
	var pattern2 = /\d{4}\-\d{2}\-\d{2}/;
	var dt = "";
	
	if(pattern1.exec(text))
		dt = new Date(text.substring(0,4), parseInt(text.substring(4,6)) - 1, text.substring(6,8)); // - 1 because months starts from 0.
	else if (pattern2.exec(text)){
		text = text.split("-");
		dt = new Date(text[0], parseInt(text[1]) - 1, text[2]); // - 1 because months starts from 0.
	}
	else
		dt = new Date(text);

	return dt;
}

function dateToString(date, separator){
	var date_month = "",
	date_day = "",
	date_year = "",
	string_date = "";
	
	if(separator == "ordinal"){
		date_month = date.getMonth();
		date_day = date.getDate();
		
		string_date = months[date_month].short_name + ' ' + date_day.ordinate();
	}
	else{
		date_month = (date.getMonth() + 1).toString().length == 1? "0" + (date.getMonth() + 1).toString() : date.getMonth() + 1;
		date_day = (date.getDate()).toString().length == 1? "0" + (date.getDate()).toString() : date.getDate();
		date_year = date.getFullYear();
		
		string_date = date_month + separator + date_day + separator + date_year;
	}
	
	
	return string_date;
}

function getUrlParams(param_name)
{
       var query = window.location.search.substring(1);
       var params = query.split("&");
       for (var i=0;i<params.length;i++) {
               var pair = params[i].split("=");
               if(pair[0] == param_name){return pair[1];}
       }
       return "";
}

function hasLowerCase(str) {
    if(str.toUpperCase() != str) {
        return true;
    }
    return false;
}

function hasUpperCase(str) {
    if(str.toLowerCase() != str) {
        return true;
    }
    return false;
}

function findUpperCaseLetters(str) {
	var uc = [];
	for(x=0;x<str.length;x++){
		if(str.charAt(x) >= 'A' && str.charAt(x) <= 'Z')
			uc.push(str.indexOf(str.charAt(x)));
	}
	
	return uc;
}
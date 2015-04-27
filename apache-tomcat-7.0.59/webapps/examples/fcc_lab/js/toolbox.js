
/* Select Menu variables for the search criteria menu */
function getFilingSelectorMenu(){
	var filing_selector_menu = "";
		filing_selector_menu += "<label for='filing_type_selector' >Filing Type</label><select class='selector_cell search_selector' id='filing_type_selector'>";
		filing_selector_menu += "<option value=''></option>";
		filing_selector_menu += "<option value='AMENDMENT'>AMENDMENT</option>";
		filing_selector_menu += "<option value='ANSWER TO INTERROGATORY'>ANSWER TO INTERROGATORY</option>";
		filing_selector_menu += "<option value='APPEAL'>APPEAL</option>";
		filing_selector_menu += "<option value='APPEARANCE'>APPEARANCE</option>";
		filing_selector_menu += "<option value='APPLICATION'>APPLICATION</option>";
		filing_selector_menu += "<option value='APPLICATION FOR REVIEW'>APPLICATION FOR REVIEW</option>";
		filing_selector_menu += "<option value='CHANGE OF ADDRESS'>CHANGE OF ADDRESS</option>";
		filing_selector_menu += "<option value='COMMENT'>COMMENT</option>";
		filing_selector_menu += "<option value='COMPLAINT'>COMPLAINT</option>";
		filing_selector_menu += "<option value='CONGRESSIONAL CORRESPONDENCE'>CONGRESSIONAL CORRESPONDENCE</option>";
		filing_selector_menu += "<option value='CONSUMER ADVISORY'>CONSUMER ADVISORY</option>";
		filing_selector_menu += "<option value='CORRECTION TO TRANSCRIPT'>CORRECTION TO TRANSCRIPT</option>";
		filing_selector_menu += "<option value='COUNTERPROPOSAL'>COUNTERPROPOSAL</option>";
		filing_selector_menu += "<option value='DECISION'>DECISION</option>";
		filing_selector_menu += "<option value='DECLARATION OF NO CONSIDERATION'>DECLARATION OF NO CONSIDERATION</option>";
		filing_selector_menu += "<option value='DECLARATORY RULING'>DECLARATORY RULING</option>";
		filing_selector_menu += "<option value='DENIAL OF EXTENTION OF TIME'>DENIAL OF EXTENTION OF TIME</option>";
		filing_selector_menu += "<option value='DEPOSITION'>DEPOSITION</option>";
		filing_selector_menu += "<option value='DESIGNATION ISSUES'>DESIGNATION ISSUES</option>";
		filing_selector_menu += "<option value='DESIGNATION ORDER'>DESIGNATION ORDER</option>";
		filing_selector_menu += "<option value='DIRECT CASES'>DIRECT CASES</option>";
		filing_selector_menu += "<option value='ERRATA, ERRATUM OR ADDENDUM'>ERRATA, ERRATUM OR ADDENDUM</option>";
		filing_selector_menu += "<option value='EXCEPTION'>EXCEPTION</option>";
		filing_selector_menu += "<option value='EXHIBIT'>EXHIBIT</option>";
		filing_selector_menu += "<option value='FURTHER NOTICE OF INQUIRY'>FURTHER NOTICE OF INQUIRY</option>";
		filing_selector_menu += "<option value='FURTHER NOTICE OF PROPOSED RULEMAKING'>FURTHER NOTICE OF PROPOSED RULEMAKING</option>";
		filing_selector_menu += "<option value='HEARING DESIGNATION ORDER'>HEARING DESIGNATION ORDER</option>";
		filing_selector_menu += "<option value='INITIAL DECISION'>INITIAL DECISION</option>";
		filing_selector_menu += "<option value='INQUIRY'>INQUIRY</option>";
		filing_selector_menu += "<option value='INTEGRATION STATEMENT'>INTEGRATION STATEMENT</option>";
		filing_selector_menu += "<option value='INTENT TO PARITICIPATE IN ORAL ARGUMENT'>INTENT TO PARITICIPATE IN ORAL ARGUMENT</option>";
		filing_selector_menu += "<option value='INTERROGATORY'>INTERROGATORY</option>";
		filing_selector_menu += "<option value='JOINT REQUEST FOR APPROVAL OF SETTLEMENT'>JOINT REQUEST FOR APPROVAL OF SETTLEMENT</option>";
		filing_selector_menu += "<option value='LEAVE TO AMEND'>LEAVE TO AMEND</option>";
		filing_selector_menu += "<option value='LETTER'>LETTER</option>";
		filing_selector_menu += "<option value='LICENSE FILE'>LICENSE FILE</option>";
		filing_selector_menu += "<option value='MEMORANDUM OPINION AND AUTHORIZATION'>MEMORANDUM OPINION AND AUTHORIZATION</option>";
		filing_selector_menu += "<option value='MEMORANDUM OPINION AND ORDER'>MEMORANDUM OPINION AND ORDER</option>";
		filing_selector_menu += "<option value='MOTION'>MOTION</option>";
		filing_selector_menu += "<option value='MOTION FOR EXTENSION OF TIME'>MOTION FOR EXTENSION OF TIME</option>";
		filing_selector_menu += "<option value='MOTION FOR PRODUCTION OF DOCUMENTS'>MOTION FOR PRODUCTION OF DOCUMENTS</option>";
		filing_selector_menu += "<option value='MOTION FOR PROTECTIVE OR CLARIFYING ORDER'>MOTION FOR PROTECTIVE OR CLARIFYING ORDER</option>";
		filing_selector_menu += "<option value='MOTION FOR SUMMARY DECISION'>MOTION FOR SUMMARY DECISION</option>";
		filing_selector_menu += "<option value='MOTION TO ACCEPT LATE FILED COMMENTS'>MOTION TO ACCEPT LATE FILED COMMENTS</option>";
		filing_selector_menu += "<option value='MOTION TO COMPEL'>MOTION TO COMPEL</option>";
		filing_selector_menu += "<option value='MOTION TO DISMISS'>MOTION TO DISMISS</option>";
		filing_selector_menu += "<option value='MOTION TO ENLARGE ISSUE'>MOTION TO ENLARGE ISSUE</option>";
		filing_selector_menu += "<option value='MOTION TO QUASH'>MOTION TO QUASH</option>";
		filing_selector_menu += "<option value='MOTION TO REOPEN THE RECORD'>MOTION TO REOPEN THE RECORD</option>";
		filing_selector_menu += "<option value='MOTION TO STRIKE'>MOTION TO STRIKE</option>";
		filing_selector_menu += "<option value='MOTION TO SUSPEND PROCEDURAL DATES'>MOTION TO SUSPEND PROCEDURAL DATES</option>";
		filing_selector_menu += "<option value='NOTICE OF APPEARANCE'>NOTICE OF APPEARANCE</option>";
		filing_selector_menu += "<option value='NOTICE OF CHANGE OF ADDRESS'>NOTICE OF CHANGE OF ADDRESS</option>";
		filing_selector_menu += "<option value='NOTICE OF DEPOSITION'>NOTICE OF DEPOSITION</option>";
		filing_selector_menu += "<option value='NOTICE OF EXPARTE'>NOTICE OF EXPARTE</option>";
		filing_selector_menu += "<option value='NOTICE OF INQUIRY'>NOTICE OF INQUIRY</option>";
		filing_selector_menu += "<option value='NOTICE OF INTENT TO PARTICIPATE IN ORAL ARGUMENT'>NOTICE OF INTENT TO PARTICIPATE IN ORAL ARGUMENT</option>";
		filing_selector_menu += "<option value='NOTICE OF INTENT TO TAKE DEPOSITION'>NOTICE OF INTENT TO TAKE DEPOSITION</option>";
		filing_selector_menu += "<option value='NOTICE OF PRE-HEARING CONFERENCE'>NOTICE OF PRE-HEARING CONFERENCE</option>";
		filing_selector_menu += "<option value='NOTICE OF PROPOSED RULEMAKING'>NOTICE OF PROPOSED RULEMAKING</option>";
		filing_selector_menu += "<option value='NOTICE OF WITHDRAWAL OF COUNSEL'>NOTICE OF WITHDRAWAL OF COUNSEL</option>";
		filing_selector_menu += "<option value='NOTIFICATION OF WITNESS'>NOTIFICATION OF WITNESS</option>";
		filing_selector_menu += "<option value='OPINION AND ORDER'>OPINION AND ORDER</option>";
		filing_selector_menu += "<option value='OPPOSITION'>OPPOSITION</option>";
		filing_selector_menu += "<option value='OPPOSITION TO ANSWERS TO INTERROGATORIES'>OPPOSITION TO ANSWERS TO INTERROGATORIES</option>";
		filing_selector_menu += "<option value='OPPOSITION TO COMPEL'>OPPOSITION TO COMPEL</option>";
		filing_selector_menu += "<option value='OPPOSITION TO MOTION FOR PRODUCTION OF DOCUMENTS'>OPPOSITION TO MOTION FOR PRODUCTION OF DOCUMENTS</option>";
		filing_selector_menu += "<option value='OPPOSITION TO MOTION FOR PRODUCTION OF DOCUMENTS'>OPPOSITION TO MOTION FOR PRODUCTION OF DOCUMENTS</option>";
		filing_selector_menu += "<option value='OPPOSITION TO MOTION FOR PROTECTIVE OR CLARIFYING'>OPPOSITION TO MOTION FOR PROTECTIVE OR CLARIFYING</option>";
		filing_selector_menu += "<option value='OPPOSITION TO MOTION TO COMPEL'>OPPOSITION TO MOTION TO COMPEL</option>";
		filing_selector_menu += "<option value='OPPOSITION TO MOTION TO STRIKE'>OPPOSITION TO MOTION TO STRIKE</option>";
		filing_selector_menu += "<option value='OPPOSITION TO NOTICE OF DEPOSITION'>OPPOSITION TO NOTICE OF DEPOSITION</option>";
		filing_selector_menu += "<option value='OPPOSITION TO NOTICE OF DEPOSITION UPON ORAL EXAMI'>OPPOSITION TO NOTICE OF DEPOSITION UPON ORAL EXAMI</option>";
		filing_selector_menu += "<option value='OPPOSITION TO PETITION FOR RECONSIDERATION'>OPPOSITION TO PETITION FOR RECONSIDERATION</option>";
		filing_selector_menu += "<option value='ORDER'>ORDER</option>";
		filing_selector_menu += "<option value='ORDER &amp; AUTHORIZATION'>ORDER &amp; AUTHORIZATION</option>";
		filing_selector_menu += "<option value='ORDER DENYING EXTENSION OF TIME'>ORDER DENYING EXTENSION OF TIME</option>";
		filing_selector_menu += "<option value='ORDER DESIGNATING ISSUES FOR INVESTIGATION'>ORDER DESIGNATING ISSUES FOR INVESTIGATION</option>";
		filing_selector_menu += "<option value='ORDER GRANTING EXTENSION OF TIME'>ORDER GRANTING EXTENSION OF TIME</option>";
		filing_selector_menu += "<option value='ORDER ON RECONSIDERATION'>ORDER ON RECONSIDERATION</option>";
		filing_selector_menu += "<option value='ORDER STAYING FILING WINDOW'>ORDER STAYING FILING WINDOW</option>";
		filing_selector_menu += "<option value='ORDER TO SHOW CAUSE AND HEARING DESIGNATION ORDER'>ORDER TO SHOW CAUSE AND HEARING DESIGNATION ORDER</option>";
		filing_selector_menu += "<option value='ORDER, AUTHORIZATION AND CERTIFICATE'>ORDER, AUTHORIZATION AND CERTIFICATE</option>";
		filing_selector_menu += "<option value='OTHER'>OTHER</option>";
		filing_selector_menu += "<option value='PARTIAL OPPOSITION'>PARTIAL OPPOSITION</option>";
		filing_selector_menu += "<option value='PETITION'>PETITION</option>";
		filing_selector_menu += "<option value='PETITION FOR LEAVE TO AMEND'>PETITION FOR LEAVE TO AMEND</option>";
		filing_selector_menu += "<option value='PETITION FOR RECONSIDERATION'>PETITION FOR RECONSIDERATION</option>";
		filing_selector_menu += "<option value='PETITION FOR REVIEW'>PETITION FOR REVIEW</option>";
		filing_selector_menu += "<option value='PETITION FOR RULEMAKING'>PETITION FOR RULEMAKING</option>";
		filing_selector_menu += "<option value='PETITION FOR WAIVER'>PETITION FOR WAIVER</option>";
		filing_selector_menu += "<option value='PREHEARING ORDER'>PREHEARING ORDER</option>";
		filing_selector_menu += "<option value='PRODUCTION OF DOCUMENTS'>PRODUCTION OF DOCUMENTS</option>";
		filing_selector_menu += "<option value='PROOF OF PUBLICATION'>PROOF OF PUBLICATION</option>";
		filing_selector_menu += "<option value='PROPOSED FINDINGS OR REPLY FINDINGS'>PROPOSED FINDINGS OR REPLY FINDINGS</option>";
		filing_selector_menu += "<option value='PROPOSED RULEMAKING'>PROPOSED RULEMAKING</option>";
		filing_selector_menu += "<option value='PUBLIC NOTICE'>PUBLIC NOTICE</option>";
		filing_selector_menu += "<option value='RECONSIDERATION'>RECONSIDERATION</option>";
		filing_selector_menu += "<option value='REPLY'>REPLY</option>";
		filing_selector_menu += "<option value='REPLY TO COMMENTS'>REPLY TO COMMENTS</option>";
		filing_selector_menu += "<option value='REPLY TO OPPOSITION TO PETITION FOR RECONSIDERA'>REPLY TO OPPOSITION TO PETITION FOR RECONSIDERA</option>";
		filing_selector_menu += "<option value='REPLY TO PETITION FOR RECONSIDERATION'>REPLY TO PETITION FOR RECONSIDERATION</option>";
		filing_selector_menu += "<option value='REPORT'>REPORT</option>";
		filing_selector_menu += "<option value='REPORT AND ORDER'>REPORT AND ORDER</option>";
		filing_selector_menu += "<option value='REQUEST'>REQUEST</option>";
		filing_selector_menu += "<option value='REQUEST FOR APPROVAL OF SETTLEMENT'>REQUEST FOR APPROVAL OF SETTLEMENT</option>";
		filing_selector_menu += "<option value='REQUEST FOR EXTENSION OF TIME'>REQUEST FOR EXTENSION OF TIME</option>";
		filing_selector_menu += "<option value='REQUEST FOR ORAL ARGUMENT'>REQUEST FOR ORAL ARGUMENT</option>";
		filing_selector_menu += "<option value='REQUEST FOR SUPPLEMENTAL INFORMATION'>REQUEST FOR SUPPLEMENTAL INFORMATION</option>";
		filing_selector_menu += "<option value='RETURN RECEIPT'>RETURN RECEIPT</option>";
		filing_selector_menu += "<option value='RULEMAKING'>RULEMAKING</option>";
		filing_selector_menu += "<option value='SHOW CAUSE'>SHOW CAUSE</option>";
		filing_selector_menu += "<option value='STATEMENT'>STATEMENT</option>";
		filing_selector_menu += "<option value='STATEMENT FOR THE RECORD'>STATEMENT FOR THE RECORD</option>";
		filing_selector_menu += "<option value='STAYING FILING WINDOW'>STAYING FILING WINDOW</option>";
		filing_selector_menu += "<option value='STRIKE'>STRIKE</option>";
		filing_selector_menu += "<option value='SUBMISSION FOR THE RECORD'>SUBMISSION FOR THE RECORD</option>";
		filing_selector_menu += "<option value='SUBMISSION OF REPORT'>SUBMISSION OF REPORT</option>";
		filing_selector_menu += "<option value='SUBPOENA'>SUBPOENA</option>";
		filing_selector_menu += "<option value='SUMMARY DECISION'>SUMMARY DECISION</option>";
		filing_selector_menu += "<option value='SUPPLEMENT'>SUPPLEMENT</option>";
		filing_selector_menu += "<option value='TENTATIVE DECISION'>TENTATIVE DECISION</option>";
		filing_selector_menu += "<option value='TESTIMONY'>TESTIMONY</option>";
		filing_selector_menu += "<option value='TRANSCRIPT'>TRANSCRIPT</option>";
		filing_selector_menu += "<option value='WAIVER'>WAIVER</option>";
		filing_selector_menu += "<option value='WITHDRAWAL'>WITHDRAWAL</option>";
		filing_selector_menu += "<option value='WITHDRAWAL OF COUNSEL'>WITHDRAWAL OF COUNSEL</option>";
		filing_selector_menu += "</select>";
		
	return filing_selector_menu;
}		

function getStateSelectorMenu(){
	var state_selector_menu = "";
		state_selector_menu += "<label for='state_selector' >State</label><select class='selector_cell search_selector' id='state_selector'>";
		state_selector_menu += "<option value=''></option>";
		state_selector_menu += "<option value='AK'>AK: ALASKA</option>";
		state_selector_menu += "<option value='AL'>AL: ALABAMA</option>";
		state_selector_menu += "<option value='AR'>AR: ARKANSAS</option>";
		state_selector_menu += "<option value='AS'>AS: AMERICAN SAMOA</option>";
		state_selector_menu += "<option value='AZ'>AZ: ARIZONA</option>";
		state_selector_menu += "<option value='CA'>CA: CALIFORNIA</option>";
		state_selector_menu += "<option value='CO'>CO: COLORADO</option>";
		state_selector_menu += "<option value='CT'>CT: CONNECTICUT</option>";
		state_selector_menu += "<option value='DC'>DC: DISTRICT OF COLUMBIA</option>";
		state_selector_menu += "<option value='DE'>DE: DELAWARE</option>";
		state_selector_menu += "<option value='FL'>FL: FLORIDA</option>";
		state_selector_menu += "<option value='FM'>FM: FEDERATED STATES OF MICRONESIA</option>";
		state_selector_menu += "<option value='GA'>GA: GEORGIA</option>";
		state_selector_menu += "<option value='GU'>GU: GUAM</option>";
		state_selector_menu += "<option value='HI'>HI: HAWAII</option>";
		state_selector_menu += "<option value='IA'>IA: IOWA</option>";
		state_selector_menu += "<option value='ID'>ID: IDAHO</option>";
		state_selector_menu += "<option value='IL'>IL: ILLINOIS</option>";
		state_selector_menu += "<option value='IN'>IN: INDIANA</option>";
		state_selector_menu += "<option value='KS'>KS: KANSAS</option>";
		state_selector_menu += "<option value='KY'>KY: KENTUCKY</option>";
		state_selector_menu += "<option value='LA'>LA: LOUISIANA</option>";
		state_selector_menu += "<option value='MA'>MA: MASSACHUSETTS</option>";
		state_selector_menu += "<option value='MD'>MD: MARYLAND</option>";
		state_selector_menu += "<option value='ME'>ME: MAINE</option>";
		state_selector_menu += "<option value='MH'>MH: MARSHALL ISLANDS</option>";
		state_selector_menu += "<option value='MI'>MI: MICHIGAN</option>";
		state_selector_menu += "<option value='MN'>MN: MINNESOTA</option>";
		state_selector_menu += "<option value='MO'>MO: MISSOURI</option>";
		state_selector_menu += "<option value='MP'>MP: NORTHERN MARIANA ISLANDS</option>";
		state_selector_menu += "<option value='MS'>MS: MISSISSIPPI</option>";
		state_selector_menu += "<option value='MT'>MT: MONTANA</option>";
		state_selector_menu += "<option value='NC'>NC: NORTH CAROLINA</option>";
		state_selector_menu += "<option value='ND'>ND: NORTH DAKOTA</option>";
		state_selector_menu += "<option value='NE'>NE: NEBRASKA</option>";
		state_selector_menu += "<option value='NH'>NH: NEW HAMPSHIRE</option>";
		state_selector_menu += "<option value='NJ'>NJ: NEW JERSEY</option>";
		state_selector_menu += "<option value='NM'>NM: NEW MEXICO</option>";
		state_selector_menu += "<option value='NV'>NV: NEVADA</option>";
		state_selector_menu += "<option value='NY'>NY: NEW YORK</option>";
		state_selector_menu += "<option value='OH'>OH: OHIO</option>";
		state_selector_menu += "<option value='OK'>OK: OKLAHOMA</option>";
		state_selector_menu += "<option value='OR'>OR: OREGON</option>";
		state_selector_menu += "<option value='PA'>PA: PENNSYLVANIA</option>";
		state_selector_menu += "<option value='PR'>PR: PUERTO RICO</option>";
		state_selector_menu += "<option value='PW'>PW: PALAU</option>";
		state_selector_menu += "<option value='RI'>RI: RHODE ISLAND</option>";
		state_selector_menu += "<option value='SC'>SC: SOUTH CAROLINA</option>";
		state_selector_menu += "<option value='SD'>SD: SOUTH DAKOTA</option>";
		state_selector_menu += "<option value='TN'>TN: TENNESSEE</option>";
		state_selector_menu += "<option value='TX'>TX: TEXAS</option>";
		state_selector_menu += "<option value='UT'>UT: UTAH</option>";
		state_selector_menu += "<option value='VA'>VA: VIRGINIA</option>";
		state_selector_menu += "<option value='VI'>VI: VIRGIN ISLANDS</option>";
		state_selector_menu += "<option value='VT'>VT: VERMONT</option>";
		state_selector_menu += "<option value='WA'>WA: WASHINGTON</option>";
		state_selector_menu += "<option value='WI'>WI: WISCONSIN</option>";
		state_selector_menu += "<option value='WV'>WV: WEST VIRGINIA</option>";
		state_selector_menu += "<option value='WY'>WY: WYOMING</option>";
		state_selector_menu += "</select>";
	
	return state_selector_menu;
}

function getInboxSelectorMenu(){
	var inbox_selector_menu = "";
		inbox_selector_menu += "<label for='inbox_selector' > Please select the appropriate FCC inbox</label><select class='selector_cell search_selector' id='inbox_selector'>";
		inbox_selector_menu += "<option value=''></option>";
		inbox_selector_menu += "<option value='INBOX-73.3545'>Section 325(c) Application for Permit to Deliver Programs to Foreign Stations</option>";
		inbox_selector_menu += "<option value='INBOX-51.329'>Section 251 Network Change Notification</option>";
		inbox_selector_menu += "<option value='INBOX-1.1105'>Petition for Waiver of Parts 32, 43, 64, 65, 69 (fee required)</option>";
		inbox_selector_menu += "<option value='INBOX-1.3'>Petition for Waiver (miscellaneous)</option>";
		inbox_selector_menu += "<option value='INBOX-63.71'>Section 214 Domestic Discontinuance Application</option>";
		inbox_selector_menu += "<option value='INBOX-1.2'>Petition for Declaratory Ruling</option>";
		inbox_selector_menu += "<option value='INBOX-PART15'>Petition for Waiver of Part 15</option>";
		inbox_selector_menu += "<option value='INBOX-63.04'>Section 214 Domestic Transfer of Control Application</option>";
		inbox_selector_menu += "<option value='INBOX-1.735'>Section 208 Complaint: Restricted Proceedings</option>";
		inbox_selector_menu += "<option value='INBOX-1.1408'>Section 224 Pole Attachment Complaint: Restricted Proceedings</option>";
		inbox_selector_menu += "<option value='INBOX-73.702'>International High Frequency Application</option>";
		inbox_selector_menu += "</select>";
		
		return inbox_selector_menu;
}

function getSearchTypeSelectorMenu(){
	var search_type_selector_menu = "";
		search_type_selector_menu += "<label for='search_type_selector' > Search Type</label><select class='selector_cell search_selector' id='search_type_selector' onchange='switchAnchorDetails(this.id);'>";
		search_type_selector_menu += "<option value='filing'>FILING</option>";
		search_type_selector_menu += "<option value='status'>FILING STATUS</option>";
		search_type_selector_menu += "<option value='date'>DATE</option>";
		search_type_selector_menu += "<option value='proceeding'>PROCEEDING</option>";
		search_type_selector_menu += "<option value='term'>TERM</option>";
		search_type_selector_menu += "</select>";

		return search_type_selector_menu;
}

function getProcStatusSelectorMenu(){
	var proceeding_status_selector_menu = "";
		proceeding_status_selector_menu += "<label for='proceeding_status_selector' > Proceeding Status</label><select class='selector_cell search_selector' id='proceeding_status_selector'>";
		proceeding_status_selector_menu += "<option value=''></option>";
		proceeding_status_selector_menu += "<option value='open'>OPEN</option>";
		proceeding_status_selector_menu += "<option value='closed'>CLOSED</option>";
		proceeding_status_selector_menu += "</select>";

		return proceeding_status_selector_menu;
}

function getBureauSelectorMenu(){
	var bureau_selector_menu = "";
		bureau_selector_menu += "<select class='selector_cell search_selector'  multiple='' size='5' id='bureau_selector' style='padding-bottom:1px;'>";
		bureau_selector_menu += "<option value=''></option>";
		bureau_selector_menu += "<option value='AU'>Auctions</option>";
		bureau_selector_menu += "<option value='CS'>Cable Services Bureau</option>";
		bureau_selector_menu += "<option value='CC'>Common Carrier Bureau</option>";
		bureau_selector_menu += "<option value='CI'>Compliance and Information Bureau</option>";
		bureau_selector_menu += "<option value='CG'>Consumer and Governmental Affairs Bureau</option>";
		bureau_selector_menu += "<option value='EB'>Enforcement Bureau</option>";
		bureau_selector_menu += "<option value='FO'>Field Operations Bureau</option>";
		bureau_selector_menu += "<option value='GN'>General (Multiple Bureaus)</option>";
		bureau_selector_menu += "<option value='IB'>International Bureau</option>";
		bureau_selector_menu += "<option value='MM'>Mass Media Bureau</option>";
		bureau_selector_menu += "<option value='MB'>Media Bureau</option>";
		bureau_selector_menu += "<option value='BO'>Offfice of Communication Business Opps</option>";
		bureau_selector_menu += "<option value='LJ'>Office of Administrative Law Judges</option>";
		bureau_selector_menu += "<option value='JG'>Office of Chairman Genachowski</option>";
		bureau_selector_menu += "<option value='MC'>Office of Commissioner Clyburn</option>";
		bureau_selector_menu += "<option value='CM'>Office of Commissioner McDowell</option>";
		bureau_selector_menu += "<option value='CB'>Office of Communications and Business Op</option>";
		bureau_selector_menu += "<option value='ET'>Office of Engineering and Technology</option>";
		bureau_selector_menu += "<option value='GC'>Office of General Counsel</option>";
		bureau_selector_menu += "<option value='IC'>Office of International Communications</option>";
		bureau_selector_menu += "<option value='OL'>Office of Legislative Affairs</option>";
		bureau_selector_menu += "<option value='MD'>Office of Managing Director</option>";
		bureau_selector_menu += "<option value='MR'>Office of Media Relations</option>";
		bureau_selector_menu += "<option value='PP'>Office of Plans and Policy</option>";
		bureau_selector_menu += "<option value='SP'>Office of Strategic Planning and Analysi</option>";
		bureau_selector_menu += "<option value='PD'>Office of Workplace Diversity</option>";
		bureau_selector_menu += "<option value='IG'>Office of the Inspector General</option>";
		bureau_selector_menu += "<option value='XX'>Others</option>";
		bureau_selector_menu += "<option value='PR'>Private Radio Bureau</option>";
		bureau_selector_menu += "<option value='PS'>Public Safety and Homeland Security</option>";
		bureau_selector_menu += "<option value='WP'>Wireless Telecom and Public Safety</option>";
		bureau_selector_menu += "<option value='WT'>Wireless Telecommunications Bureau</option>";
		bureau_selector_menu += "<option value='WC'>Wireline Competition Bureau</option>";
		bureau_selector_menu += "</select>";

		return bureau_selector_menu;
}

/*Functions to build each field in the search criteria menu*/
function createRowTextbox(id_prefix, label_text, value, tooltip_text){
	var html = "<label for='" + id_prefix + "_text'>" + label_text + "</label>";
	html += "<input type='text' maxlength='128' id='"+ id_prefix +"_text' class='row_textbox' value='" + value + "' title='"+ tooltip_text +"'/>";
	return html;
}

function createCellTextbox(id_prefix, label_text, value, tooltip_text){
	var html = "<label for='" + id_prefix + "_text'>" + label_text + "</label>";
	html += "<input type='text' maxlength='128' id='"+ id_prefix +"_text' class='cell_textbox' value='" + value + "' title='"+ tooltip_text +"'/>";
	return html;
}

function createDateTextbox(id_prefix, label_text, value, tooltip_text){
	var html = "<label for='" + id_prefix + "_text'>" + label_text + "</label>";
	html += "<input type='text' maxlength='50' class='datepicker cell_textbox' id='"+ id_prefix +"_text' value='" + value + "' title='"+ tooltip_text +"'/>";
	return html;
}

function createSingleDateField(id_prefix){
	var html = "<span class='left' style='width:100%;'><label for='" + id_prefix + "_picker'>Date</label>";
	html += "<input id='" + id_prefix + "_picker' class='datepicker' type='text'></span>";
	return html;
}

function createMultiDateField(id_prefix){
	var html = "<span class='left small_span'><label for='" + id_prefix + "_from_picker' >From</label>";
	html += "<input id='" + id_prefix + "_from_picker' class='datepicker small_box' type='text'/></span>";
	html += "<span class='right small_span'><label for='" + id_prefix + "_to_picker'>To</label>";
	html += "<input id='" + id_prefix + "_to_picker' class='datepicker small_box' type='text'/></span>";
	return html;
}

function createCheckbox(id_prefix, label_text, multi){
	if(multi)
		var html = "<label class='option_label'><input type='checkbox' id='" + id_prefix + "_checkbox' onclick='checkboxSwitch(this.id);'/> " + label_text + "</label>";
	else
		var html = "<label class='option_label'><input type='checkbox' id='" + id_prefix + "_checkbox' /> " + label_text + "</label>";
	return html;
}

function createDateCheckbox(id_prefix, state){
	var html = "";
	if(state)
		html = "<label class='option_label' for='" + id_prefix + "_checkbox'><input type='checkbox' id='"+ id_prefix +"_checkbox' " + state + " onclick='dateFieldExchange(this.id);'/> Search Date Range?</label></br>";
	
	else
		html = "<label class='option_label' for='" + id_prefix + "_checkbox'><input type='checkbox' id='"+ id_prefix +"_checkbox' onclick='dateFieldExchange(this.id);'/> Search Date Range?</label></br>";
	return html;
}

function createRadioOptions(id_prefix, label_text){
	var html = "<label class='option_label'><input type='radio' id='"+ id_prefix + "_" + label_text + "_radio_switch' onclick='radioSwitch(this.id);'/> " + toCamelCase(label_text) + "</label>";
	return html;

}

//creates the html for the Query Menu displayed in the UI
function createCriteriaColumns (label, value, placement,complete_row){
	var html = "";
	
	if (placement == "left" || complete_row)
		html += "<div class='row'>";
	
	html += "<div class='cell two_halves " + placement + "'><p>" + label + ": <br><span class='value-cool'>" + value + "</span></p></div>";
	
	if(placement == "right"  || complete_row)
		html += "</div>";
		
	return html;
}

function createConfirmationColumns (label, value, placement,complete_row){
	var html = "";

	if (placement == "left")
		html += "<div class='row'>";
	
	html += "<div class='cell two_halves " + placement + "'><p>" + label + ": <br><span class='value-cool'>" + value + "</span></p></div>";
	
	if(placement == "right"  || complete_row == true)
		html += "</div>";

	return html;
}

/*Functions for actions performed on the search criteria menu*/
function dateFieldExchange(id){
	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	var current_field = $('#' + id);
	var radio_fields = current_field.parent().parent().find("input:radio");
	var input_fields = current_field.parent().parent().find("input.datepicker:text");	
	var date_div = $('#' + id_prefix + '_div');
	var html = "";

	if(current_field.is(":checked") == false){
		$.each(radio_fields, function( index, radio ) {
			radio.checked = false;
		});
	}

	if(input_fields.length > 1){
		date_div.empty();
		//date_div.removeClass("date-div");
		//date_div.addClass("date-with-radio-div");
		html = createSingleDateField(id_prefix);
		date_div.html(html);
	}	
	else{
		date_div.empty();
		//date_div.removeClass("date-with-radio-div");
		//date_div.addClass("date-div");
		html = createMultiDateField(id_prefix);
		date_div.html(html);
	}
	
	jq('.datepicker').datepicker({dateFormat: "mm/dd/yy", changeMonth: true, changeYear: true, showButtonPanel: true, yearRange: "-100:+0", closeText : "Close"});
}

function radioSwitch(id){
	var sibling_radio_fields = $('#' + id).parent().parent().parent().find("input:radio");
	//console.log($('#' + id));

	if(id.indexOf("week") != -1  || id.indexOf("month") != -1){
		var split_id = id.split("_");
		var id_prefix = split_id[0] + "_" + split_id[1];
		var from_date = new Date(), to_date = new Date();

		if(split_id[2] == "week")
			from_date.setDate(from_date.getDate() - 7);
		if(split_id[2] == "month")
			from_date.setMonth(from_date.getMonth() - 1);
		
		var sibling_datepicker_fields = $('#' + id_prefix).find("input.datepicker:text");
		
		if(sibling_datepicker_fields.length == 1){
			$('#' + id_prefix + "_checkbox").click();
			sibling_datepicker_fields = $('#' + id_prefix).find("input.datepicker:text");
		}

		$.each(sibling_datepicker_fields, function( index, datepicker ) {
			//console.log(datepicker);
			if(index == 0)
				datepicker.value = dateToString(from_date, "/");
			else
				datepicker.value = dateToString(to_date, "/");
		});
	}

	$.each(sibling_radio_fields, function( index, radio ) {
		//console.log(radio);
		if(radio.id != id)
			radio.checked = false;
	});
}

function checkboxSwitch(id){
	var sibling_checkbox_fields = $('#' + id).parent().parent().parent().find("input:checkbox");

	$.each(sibling_checkbox_fields, function( index, checkbox ) {
		//console.log(checkbox);
		if(checkbox.id != id)
			checkbox.checked = false;
	});
}

function getFilingUrl(path){
	var url = "";
	if(path == "Express")
		url = "./filing-list.html";
	else if(path == "Expert")
		url = "./submit-expert-filing.html";
	
	return url;	
}

function getAnchorDetails(search_term, search_type){
		//console.log("Search: " + search_term);
		var html = "";  

		html += "<div id='criteria_input'>";
		
		html += "<div class='row'>";
		html += "<div class='two left'>";
		html += "<div id='search_type'>";
		html += getSearchTypeSelectorMenu();
		html += "</div>";
		html += "</div>";
		if(search_type == "term"){
			html += "<div class='two right'>";	
			html += "<div style='margin:auto;'>";
			html += createRowTextbox(search_type, toCamelCase(search_type), search_term, "Edit the term you wish to search for.");
			html += "</div>";
			html += "</div>";
		}		
		else if(search_type == "date"){
			html += "<div class='two right'>";	
			html += "<div style='margin:auto;'>";
			html += createDateTextbox(search_type, toCamelCase(search_type), search_term, "Select the date you wish to search for.");
			html += "</div>";
			html += "</div>";
		}
		else if(search_type == "status"){
			html += "<div class='two right'>";	
			html += "<div style='margin:auto;'>";
			html += createRowTextbox("confirmation_number", "Confirmation Number", "", "Type the filing confirmation number you wish to search for.");
			html += "</div>";
			html += "</div>";
		}
		html += "</div>";
		
		html += "<div class='row'>";
		html += "<hr class='criteria_divider'>";
		html += "</div>";
		
		if(search_type == "proceeding"){
		
			html += "<div class='row'>";
				html += "<div class='two left'>";
				html += "<div class='cell two left'>";
				html += createCellTextbox("proceeding_number", "Proceeding Number", "", "Enter the proceeding number you wish to search for.");
				html += "</div>";
				html += "<div class='cell two right'>";
				html += createCellTextbox("bureau_number", "Bureau ID Number", "", "Enter the bureau id you wish to search for.");
				html += "</div>";
				html += "</div>";
				html += "<div class='two right'>";
				html += "<div>";
				html += createRowTextbox("proceeding_subject", "Subject", "", "Enter terms in the proceeding subject you wish to search for.");
				html += "</div>";
				html += "</div>";
			html += "</div>";

			html += "<div class='row'>";
				html += "<div class='two left'>";
				html += "<div class='cell two left'>";
				html += "<div style='margin-top:6px; margin-bottom:4px;'>";
				html += createCellTextbox("filer_name", "Name of Party", "", "Enter the name you wish to search for.");
				html += "</div>";
				html += "<div>";
				html += createCellTextbox("prepared_by", "Prepared By", "", "Enter the name you wish to search for.");
				html += "<hr class='criteria_divider cell_divider'>";
				html += "</div>";
				html += "</div>";
				html += "<div class='cell two right'>";
				html += "<fieldset id='proceeding_status'><legend>Status</legend>";
				html += createCheckbox("recent_activity", "Active in the past month?");
				html += "<br>";
				html += "<div id=proceeding_status_div>";
				html += getProcStatusSelectorMenu();
				html += "</div>";
				html += "</fieldset>";
				html += "</div>";
				html += "</div>";	
				html += "<div class='two right' style='position:relative;'>";
				html += "<div class='cell two left'>";
				html += "<fieldset id='date_created'><legend>Date Created</legend>";
				html += createDateCheckbox("date_created");
				html += "<div id='date_created_div'>";
				html += createSingleDateField("date_created");
				html += "</div>";
				html += "</fieldset>";
				html += "</div>";
				html += "<div class='cell two right'>";
				html += "<fieldset id='date_closed'><legend>Date Closed</legend>";
				html += createDateCheckbox("date_closed");	
				html += "<div id=date_closed_div>";
				html += createSingleDateField("date_closed");
				html += "</div>";
				html += "</fieldset>";
				html += "</div>";
				html += "</div>";
			html += "</div>";

			html += "<div class='row'>";
				html += "<div class='two left'>";
				html += "<fieldset id='bureau_set'><legend>List of Bureaus</legend>";				
				html += getBureauSelectorMenu();
				html += "</fieldset>";
				html += "</div>";
				html += "<div class='two right'>";
				html += "<fieldset id='date_created'><legend>Table Of Allotments</legend>";
				html += "<div class='cell two left'>";
				html += createCellTextbox("call_sign", "Call Sign", "", "Enter the call sign wish to search for.");
				html += "</div>";
				html += "<div class='cell two right'>";
				html += createCellTextbox("broadcast_channel", "Channel", "", "Enter the broadcasting channel wish to search for.");
				html += "</div>";
				html += "<div style='clear:both;'>";
				html += createRowTextbox("rule_section", "Rule Section", "", "Enter the rule section you wish to search for.");
				html += "</div>";
				html += "</fieldset>";
				html += "</div>";
			html += "</div>";
		}
		else if(search_type != "status" && search_type != "date"){
			html += "<div class='row'>";
			html += "<div class='two left'>";
			html += "<div>";
			html += getFilingSelectorMenu();
			html += "</div>";
			html += "</div>";
			html += "<div class='two right'>";	
			html += "<div class='cell two left'>";
			html += createCellTextbox("lawfirm_name", "Lawfirm Name", "", "Enter the lawfirm you wish to search for.");
			html += "</div>";
			html += "<div class='cell two right'>";
			html += createCellTextbox("attorney/author_name", "Attorney/Author Name", "", "Enter the attorney or author's name you wish to search for.");
			html += "</div>";
			html += "</div>";			
			html += "</div>";
			
			html += "<div class='row'>";
			html += "<div class='two left'>";
			html += "<div class='cell two left'>";
			html += createCellTextbox("proceeding_number", "Proceeding Number", "", "Enter the proceeding number you wish to search for.");
			html += "</div>";
			html += "<div class='cell two right'>";
			html += createCellTextbox("da/fcc_number", "DA/FCC Number", "", "Enter the DA or FCC number you wish to search for.");
			html += "</div>";
			html += "</div>";
			html += "<div class='two right'>";
			html += "<div class='cell two left'>";
			html += createCellTextbox("bureau_number", "Bureau ID Number", "", "Enter the bureau id you wish to search for.");
			html += "</div>";
			html += "<div class='cell two right'>";
			html += createCellTextbox("report_number", "Report Number", "", "Enter the report number you wish to search for.");
			html += "</div>";
			html += "</div>";
			html += "</div>";
			
			html += "<div class='row'>";
			html += "<div class='two left'>";
			html += "<div class='cell two left'>";
			html += createCellTextbox("filer_name", "Name of Filer", "", "Enter the filer name you wish to search for.");
			html += "</div>";
			html += "<div class='cell two right'>";
			html += createCellTextbox("city", "City", "", "Enter the city you wish to search for.");
			html += "</div>";
			html += "</div>";
			html += "<div class='two right'>";
			html += "<div class='cell two left'>";
			html += getStateSelectorMenu();
			html += "</div>";
			html += "<div class='cell two right'>";
			html += createCellTextbox("zipcode", "Zip Code", "", "Enter the zip code you wish to search for.");
			html += "</div>";
			html += "</div>";
			html += "</div>";
			
			html += "<div class='row'>";
			html += "<div class='two left' style='position:relative;'>";
			html += "<div class='cell two left'>";
			html += "<fieldset id='date_posted'><legend>Date Posted</legend>";
			html += createDateCheckbox("date_posted");
			html += "<div id='date_posted_div'>";
			html += createSingleDateField("date_posted");
			html += "</div>";
			html += "</fieldset>";
			html += "</div>";
			html += "<div class='cell two right'>";
			html += "<fieldset id='date_received'><legend>Date Received</legend>";
			html += createDateCheckbox("date_received");	
			html += "<div id=date_received_div>";
			html += createSingleDateField("date_received");
			html += "</div>";
			html += "</fieldset>";
			html += "</div>";
			html += "<div class='cell two left'>";
			html += "<fieldset id='comment_brief'><label style='padding-bottom: 5px;'>Brief Comments:</label><span class='left small_span'>";
			html += createCheckbox("exclude_brief", "Exclude", true);
			html += "</span>";
			html += "<span class='left small_span'>";
			html += createCheckbox("only_brief", "Only", true);
			html += "</span>";
			html += "</fieldset>";
			html += "</div>";
			html += "<div class='cell two right'><fieldset id='ex_parte'  style='height:2.7em; position: relative;'>";
			html += "<div style='position:absolute; bottom:7px;'>"
			html += createCheckbox("ex_parte_filing", "Ex Parte Filing");
			html += "</div>";
			html += "</fieldset>";
			html += "</div>";
			html += "</div>";
			html += "<div class='two right'>";
			html += "<div class='cell two left'>";
			html += "<fieldset id='date_period'><legend>Comment Period</legend>";
			html += createDateCheckbox("date_period", "checked");
			html += "<div id='date_period_div' class='date-div'>";
			html += createMultiDateField("date_period");
			html += "</div>";
			html += "<div class='date-radio-div'><label class='floating_label'>Due Next:</label><span class='left small_span'>";
			html += createRadioOptions("date_period", "week");
			html += "</span>";
			html += "<span class='left small_span'>";
			html += createRadioOptions("date_period", "month");
			html += "</span>";
			html += "</div>";
			html += "</fieldset>";
			html += "</div>";
			html += "<div class='cell two right'>";
			html += "<fieldset id='date_reply'><legend>Comment Reply</legend>";
			html += createDateCheckbox("date_reply");
			html += "<div id='date_reply_div' class='date-div'>";
			html += createSingleDateField("date_reply");
			html += "</div>";
			html += "<div class='date-radio-div'><label class='floating_label'>Due Next:</label><span class='left small_span'>";
			html += createRadioOptions("date_reply", "week");
			html += "</span>";
			html += "<span class='left small_span'>";
			html += createRadioOptions("date_reply", "month");
			html += "</span>";
			html += "</div>";
			html += "</fieldset>";
			html += "</div>";
			html += "</div>";
			html += "</div>";
	}	
		
		html += "</br>";//end of criteria div
		html += "</div>"; 
		
		html += "<div id='submit_div' class='ui-widget-footer'>";
		html += "<input type='submit' class='pointer clear_criteria' onclick='resetForm(this.id)' value='Reset' id='criteria_input_clear'/>";		
		html += "<input type='submit' name='submit' class='pointer submit_criteria' onclick='criteriaSubmit(this.id)' value='Submit' id='criteria_input_submit'/>";
		html += "</div>";
		
		return html;
}

function switchAnchorDetails(id){
	var input_term = $("#search_term_input").val();
	var input_type = $('#' + id + ' option:selected').val();	
	$.jStorage.set("searchTerm", input_term);
	$.jStorage.set("searchType", input_type);

	$("#criteria_details").empty().append(getAnchorDetails(input_term, input_type));
	$('#' + id + ' option:selected').removeAttr('selected');
	$('#' + id).find('option[value="' + input_type + '"]').attr("selected",true);
	jq('.datepicker').datepicker({dateFormat: "mm/dd/yy", changeMonth: true, changeYear: true, showButtonPanel: true, yearRange: "-100:+5", closeText : "Close"}); 
	
	if(input_type == "status" || input_type == "date")
		$('.ui-dialog').animate({height: 160}, 200);
	else
		$('.ui-dialog').animate({height: 450}, 200);
}

function getConfirmationDetails(id){
		//console.log(id);
		var confirmation_object = submitForm(id);
		var confirmation_keys = Object.keys(confirmation_object);
		var confirmation_length = confirmation_keys.length;
		//console.log(confirmation_object);
		
		var html = ""; 
		
		html += "<div id='criteria_input' style='width:100%; margin:2px;'>";
		html += "<div class='row'>";
		html += "<p style='margin:8px; font-weight:bold;'>Please review and confirm the information below before submitting to the ECFS:</p>"
		html += "</div>";

		for(var i = 0; i < confirmation_length; i++){
			var curr_key = confirmation_keys[i];
			var value = confirmation_object[curr_key];
			
			if(curr_key.toLowerCase().indexOf("proceedings") != -1){
				value = value.toString().replace(/,/g, ", ");
			} 
			else if(typeof value == "object"){
				value = value.name;
			}

			if(i % 2 == 0){
				if( i == confirmation_length - 1)//if last
					html += createConfirmationColumns(cleanLabel(curr_key), value, "left", true);
				else 
					html += createConfirmationColumns(cleanLabel(curr_key), value, "left", false);
			}
			else
				html += createConfirmationColumns(cleanLabel(curr_key), value, "right", true);				
		}
		
		html += "</div>";
		html += "</br>";
		html += "<div id='submit_div' class='ui-widget-footer'>";
		html += "<input type='submit' class='pointer clear_criteria' id='criteria_close'value='Edit' onclick='closeDialog(this.id)'/>";		
		html += "<input type='submit' name='submit' class='pointer submit_criteria' onclick='confirmationSubmit()' value='Submit' id='criteria_submit'/>";
		html += "</div>";
		
		return html;
}


function closeDialog(id){
	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	//console.log(jq('#' + id_prefix + '_details'));
	jq('#' + id_prefix + '_details').dialog("close");
	quickSearchSwitch("term");
}

function cleanLabel(label){
	var clean_label = toCamelCase(label.substr(0, label.lastIndexOf("_")).replace(/_/g, " "));
	
	if(label.indexOf("brief") != -1)
		clean_label = clean_label + " Comments";
		
	return clean_label;
}
/*-------------------------------Used for multi-select textbox-------------------------------*/
function addItems(id) {
	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	var input_field = $('#' + id_prefix + '_input');
	var newOption = new Option(input_field.val() , input_field.val());
	$('#' + id_prefix + '_selector').append(newOption);
	input_field.val("");
	
	return true;
}

function deleteItems(id) {

	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	var selector = $('#' + id_prefix + '_selector');
	
	var sel_content = selector[0];
	
	if (sel_content.selectedIndex == -1) {// check to see if there is at least one item selected
	   alert("There are no proceedings selected for deletion.");
	}
	else{// loop through all selected items and delete them
		var sel_options = $('#' + id_prefix + '_selector option:selected');
		
		$.map(sel_options ,function(option) {
			//console.log(option.value);
			selector.find('[value="' + option.value + '"]').remove();
		});
	}
	
	return true;
}

function clearItems(id) {
	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	var selector = $('#' + id_prefix + '_selector');
	selector.empty();

	return true;
 } 

/*-------------------------------Used for all submit forms-------------------------------*/ 
function resetForm(id){
	//console.log(id);
	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	//console.log(id_prefix);
	var form_input = $('#' + id_prefix).find('input[type="text"], input[type="checkbox"], input[type="radio"], input[type="file"], select, textarea');
	
	//console.log(form_input);
	
	$.each(form_input, function( index, field ) {
		if((field.type == "text" || field.type == "textarea"  || field.type == "file")  && field.value != ""){
			if(id_prefix == "express_filing"){
				if(field.id != "proceeding_num")
					field.value = "";
			}
			else
				field.value = "";
		}
		else if(field.type == "checkbox"){
			//if the box is a date box
			if (field.id.toLowerCase().indexOf("date") != -1){
				//if the box is checked and is not a date range box or if unchecked and is a date range box, reset
				if((field.checked == true && field.id.toLowerCase().indexOf("period") == -1) ||(field.checked == false && field.id.toLowerCase().indexOf("period") != -1))
					field.click();
			}
			else
				field.checked = false;	
		}		
		else if(field.type == "radio")
			field.checked = false;
		else if(field.type == "select-one" && field.selectedIndex > 0 && field.id != "search_type_selector")
			field.selectedIndex = 0;
		else if(field.type == "select-multiple"){
			clearItems(field.id);
		}
	});
}

function submitForm(id){
	//console.log(id);
	var id_prefix = id.substr(0, id.lastIndexOf("_"));
	var form_inputs = $('#' + id_prefix).find('input[type="text"], input[type="checkbox"], input[type="radio"], input[type="file"], select');
	var input_object = {};

	//gather search criteria items submitted in the query
	$.each(form_inputs, function( index, field ) {
		//console.log(field);
		if(field.type == "text" && field.value != "") //text boxes with values
			input_object[field.id] = field.value;
		else if(field.type == "checkbox" && field.id.indexOf("date") == -1 && field.checked == true) //checked checkboxes
			input_object[field.id] = field.checked;		
		else if(field.type == "radio" && field.id.indexOf("address") != -1 && field.checked == true) //selected radio buttons
			input_object[field.id] = field.checked;
		else if(field.type == "file" && field.files.length > 0) //uploaded files
			input_object[field.id] = field.files[0];
		else if(field.type == "select-one" && (field.selectedIndex > 0 || (field.id.indexOf("search_type") != -1 && field.selectedIndex > -1))) //single-select menus
			input_object[field.id] = field.options[field.selectedIndex].text;
		else if(field.type == "select-multiple" && field.options.length > 0){ //multi-select menus
			if(field.id.indexOf("proceedings") != -1){
				input_object[field.id] = [];
				$.each(field.options, function (index, option){
					input_object[field.id].push(option.value);
				})
			}
			else{
				if(field.selectedIndex > -1){
					$.each(field.selectedOptions, function (index, option){
						if(index > 0){
							if(input_object[field.id])
								input_object[field.id].push(option.text);
							else
								input_object[field.id] = [option.text];
						}
					})
				}
			}
		}
	});
	return input_object;
}
	
var results_url = 'mock_data2.json';	
function criteriaSubmit(id){
	var criteria_object = submitForm(id);

	//add new search criteria to the list
	$("#criteria_view").empty();
	var criteria_keys = Object.keys(criteria_object);
	//console.log(criteria_keys);
	var criteria_length = criteria_keys.length;
	
	/*if the number of items in the search criteria is even, split into equal columns and rows, else add an
	additional row for the solo column*/
	
	var criteria_html = "";
	if(parseInt(criteria_length) % 2 == 0){
		//console.log("even");
		for(var i = 0; i < criteria_length; i++){
			var curr_key = criteria_keys[i];
			
			if(i % 2 == 0)
				criteria_html += createCriteriaColumns(cleanLabel(curr_key), criteria_object[curr_key], "left", false);
			else
				criteria_html += createCriteriaColumns(cleanLabel(curr_key), criteria_object[curr_key], "right", false);
		}
		
		$("#criteria_view").html(criteria_html);	
	
	}
	else{
		//console.log("odd");
		for(var i = 0; i < criteria_length; i++){
			var curr_key = criteria_keys[i];
			
			if(i % 2 == 0)
				criteria_html += createCriteriaColumns(cleanLabel(curr_key), criteria_object[curr_key], "left", false);
			else if(i == criteria_length - 1)
				criteria_html += createCriteriaColumns(cleanLabel(curr_key), criteria_object[curr_key], "left", true);
			else
				criteria_html += createCriteriaColumns(cleanLabel(curr_key), criteria_object[curr_key], "right", false);
		}
		
		$("#criteria_view").html(criteria_html);	
	}
	
	closeDialog("criteria_details");
	displayResults(results_url);
	//console.log(criteria_html);
		
}

function confirmationSubmit(){

	location.href="submit-confirmed-filing.html";

}

function displayResults(results_url) {
	var start_time = new Date().getTime();
	var max_recs = getMaxRecords();
	var check_time = getCheckTime();
	
	var results = ajaxCall(results_url, 'json', false, true);
	//console.log(results.length);

	if(results.length >= max_recs){
		$('#warning').empty().append("<label>** Only displaying " + max_recs + " of 600 records.  Please refine your search.</label>");
	}
	
	if(results.length != 0){								
		dojo.ready(function(){
			//console.log(results);
			jsonHandler(results);
			$('#no_results').hide();
			if ($('#results').is(":hidden")){
				$('#results').show();
				dijit.byId("resultsGrid")._refresh();
				dijit.byId("filterGrid")._refresh();
			}
			viewer_displayed = true;
			/*filtering();*/
		});
		
		dojo.addOnLoad(function() {
		   $('#criteria').height($('#activity').height() - 1);
		   $('#criteria_div').height($('#criteria').height() - 21);
		});
	}
	else if(results.metadata.totalCount == 0){	
		$('#no_results').empty().append('<label>No results found.</label>');
	}

	
	/*$.getJSON(results_url, function(response) {
		task_json=self.setInterval(function() {
			var timer = new Date().getTime() - start_time;
			console.log(timer + " secs");
			if(timer > getWaitTime()){
				self.clearInterval(task_json); //stops interval
				$('#no_results').empty().append('<label>Request timeout: Taking too long to retrieve results.</label>');
				return; //breaks loop and returns message
			}
			
			// Results logic start.
			
			$.getJSON(results_url, function(response) {
				console.log(response);
				if(response){
					if(response.metadata.queryStatus == "DONE"){
						self.clearInterval(task_json);
						if(response.metadata.totalCount >= max_recs){
							$('#warning').empty().append("<label>** Only displaying " + max_recs + " of " + response.metadata.totalCount + " records.  Please refine your search.</label>");
						}
						if(response.metadata.totalCount != 0){								
							dojo.ready(function(){
								jsonHandler(response);
								$('#no_results').hide();
								if ($('#results').is(":hidden")){
									$('#results').show();
									dijit.byId("resultsGrid")._refresh();
								}
								viewer_displayed = true;
								filtering();
							});
							
							dojo.addOnLoad(function() {
							   dojo.connect(window, "onresize", resizeGrid("resultsGrid");
							});
						}
						else if(response.metadata.totalCount == 0){	
							$('#no_results').empty().append('<label>No results found.</label>');
						}
					}
					else{
						console.log("not done querying: " + timer + "+ timer + " secs");
					}
				}
			})
			.fail(function() {
				$('#no_results').empty().append('<label>This query could not be submitted.</label>');
				self.clearInterval(task_json);
			});
			
			// Results logic end.
			
		},check_time); 	
	
	});	*/
}


var topics=new Array();
var enteredKey, phrase, suggestions, suggestionsCount, term, endterm;

topics[0] = "facebook";
topics[1] = "facebook login";
topics[2] = "fifa";
topics[3] = "fandango";
topics[4] = "fedex";
topics[5] = "fox news";
topics[6] = "firefox";
topics[7] = "fafsa";
topics[8] = "food network";
topics[9] = "ford";
topics[10] = "fcps";
topics[11] = "fcpl";
topics[12] = "fcc";
topics[13] = "fcps blackboard";
topics[14] = "fcps.org";
topics[15] = "fcpa";
topics[16] = "fc barcelona";
topics[17] = "fcic";
topics[18] = "fcuk";
topics[19] = "fccps";
topics[20] = "fcc jobs";
topics[21] = "fccla";
topics[22] = "fcc federick md";
topics[23] = "fcc uls";
topics[24] = "fcc ecfs";
topics[25] = "fccj";
topics[26] = "fccj";
topics[27] = "fcea";
var maxtopics = topics.length - 1;

function makeSuggestions(phrase) {
	if (phrase != "") {
	  suggestions = "<ul class='nobullet'>";
	  suggestionsCount = 0;
	  for (var i=0; i <= maxtopics; i++) {
		  if (phrase.toUpperCase() == (topics[i].substr(0, phrase.length)).toUpperCase()) {
			  suggestions += "<li><a href='javascript:fillSearchTerm(\"" + topics[i] + "\");'>" + topics[i] + "</a></li>";
			  suggestionsCount++;
		  }
		  if (suggestionsCount > 6)
			  break;
	  }
	  suggestions += "</ul>";
  
	  $('#suggestions').html(suggestions);
	}
	else
	  $('#suggestions').empty();
}

function makeDefinition(phrase) {
	for (var i=0; i <= maxglossary; i++) {
		endterm = glossary[i].indexOf("</h5>");
		term = glossary[i].substr(4, endterm-4);
		if (phrase.toUpperCase() == (term.substr(0, phrase.length)).toUpperCase()) {
			break;
		}
	}
	
	if ((i <= maxglossary) && (phrase != ""))
		$('#definition').html(glossary[i]);
	else
		$('#definition').empty();
}

function fillSearchTerm(searchterm) {
	$('#iwant').val(searchterm);
}


$(function() {
	$('#iwant').focus(function() {
	 if ($(this).val() == "I want to...") {
		 $(this).val(''); 
		 $('#suggestions').empty();
		 $('#definition').html('<a href="topics.php">Topics Browser</a>');
	 }
	 else {
		 phrase = $('#iwant').val();
		 makeSuggestions(phrase);
		 makeDefinition(phrase);
	 }
	 $('#interestmore').slideDown();
	});
	
	$('.closesearchLink').click(function() {
	 if ($('#iwant').val() == "") {
		$('#iwant').val('I want to...'); 
		$('#definition').empty();
	 }
	 $('#interestmore').slideUp();
	});
	
	$('#iwant').keypress(function(event) {
	enteredKey = event.which;
	
	if ((enteredKey >= 48 && enteredKey <= 57) || (enteredKey >= 65 && enteredKey <= 90) || (enteredKey >= 97 && enteredKey <= 122)) {
		phrase = $('#iwant').val() + String.fromCharCode(enteredKey);
		makeSuggestions(phrase);
		makeDefinition(phrase);
	} else if (enteredKey == 8) {
		phrase = $('#iwant').val();
		if (phrase.length > 1)
			phrase = phrase.substr(0, phrase.length-1);
		else
			phrase = "";
		makeSuggestions(phrase);
		makeDefinition(phrase);
	}
	
	});
});
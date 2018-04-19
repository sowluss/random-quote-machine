
/*
var quoteApi = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
var twitterLink = "https://twitter.com/intent/tweet?text="


$("#more-quotes").on("click", function () {

    $.ajaxSetup({
        cache: false
    });


    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (data) {


        $("#quotes-box").html(data[0].content + " - " + data[0].title);

	});   
	
	$("#twitter-icon").on("click", function() {
		window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.content + " - " + data.title));
	}); 

});

*/



////////////


/*
var linkQuoteApi = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var linkTwitter = "https://twitter.com/intent/tweet?&text=";

function getQuote() {
	$.getJSON(linkQuoteApi, function (data) {
		$("#quotes-box").html(data.quoteText);
		if (data.quoteAuthor === '') {
			data.quoteAuthor = 'Unknown';
		}
		$("#more-quotes").on("click", function() {
			$("#quotes-box").text(data.quoteAuthor);
		});
		
		$("#twitter-icon").on("click", function() {
		$(this).attr("href", linkTwitter + data.quoteText + " ― " + data.quoteAuthor);
	});
}
getQuote();
*/

/*
$(document).ready(function(){

	var quote;
	var author;
	//making ajax request
	//https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
	function getQuote(){
		$.ajax({
			url:'https://api.forismatic.com/api/1.0/',
			//jsonp to bypass the cross-domain policies in web browsers
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang:'en',
				format:'jsonp'
			},
			success: function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;

				$('#quote').text("\" " + quote + "\" ");

				if(author){
					$('#author').text('-- '+ author);
				}else{
					$('#author').text('- unknown');
				}
			}
		});
	}
	getQuote();
	$('#getquote').on('click', function(event){
		//keep browser page in place (default)
		event.preventDefault();
		getQuote();
	});

	$('#share').on('click', function(event){
		event.preventDefault();
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
	});

	*/



/*	
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

 var getQuote = function(data) {
  $("#quotes-box").text("'" + data.quoteText + "'" + "  -  " + data.quoteAuthor);

  var tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor;

  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-text").text('Author: ' + data.quoteAuthor);
  $("#twitter-icon").attr("href", tweet);
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#more-quotes").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

$("#twitter-icon").click(function() {
	window.open('https://twitter.com/intent/tweet?text=' + currentQuote);
});
*/


var currentQuote = "";
var currentAuthor = "";

$(document).ready(function(){
  getQuotation();
  
  // Get Quote button event handler
  $("#more-quotes").click(function() {
    getQuotation();
  });
  
  // Tweet button event handler
  $("#twitter-icon").click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + currentQuote + currentAuthor);
  });
});

function getQuotation() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) { 
/*	
  $("#rqquotebody").hide();
    $("#rqquoteauthor").hide();
*/
    currentQuote = '"'+json.quoteText+'"';
    if (json.quoteAuthor !== "") {
      currentAuthor = "..."+json.quoteAuthor;
    } else {
      currentAuthor = "...Unknown";
    }

    $("#quotes-box").html(currentQuote + " " + currentAuthor);
	/*
	$("#rqquoteauthor").html(currentAuthor);
    $("#rqquotebody").hide();
    $("#rqquoteauthor").hide();

    $("#quotes-box").fadeIn(3000);
	$("#rqquoteauthor").fadeIn(3000);
	*/
  });
}


 
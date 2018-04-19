

var currentQuote = "";
var currentAuthor = "";

$(document).ready(function(){
  getQuotation();
  
  // Another Quote button  
  $("#more-quotes").click(function() {
    getQuotation();
  });
  
  // Tweet button  
  $("#twitter-icon").click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + currentQuote + currentAuthor);
  });
});

function getQuotation() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) { 

    currentQuote = '"'+json.quoteText+'"';
    if (json.quoteAuthor !== "") {
      currentAuthor = "..."+json.quoteAuthor;
    } else {
      currentAuthor = "...Unknown";
    }

    $("#quotes-box").html(currentQuote + " " + currentAuthor);

  });
}


 
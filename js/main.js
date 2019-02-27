// Main site JS

// Document ready functions
jQuery(document).ready(function($) {
  // Add a new paragraph
  function newPara() {
    $quoteBlock = $('#quoteblock');
    $blockCount = 1;
    // Change the previous quoteblock id and append a new quoteblock - this way new quotes will always be added to the #quoteblock element. Increment the block count
    $quoteBlock.attr("id", "quoteblock_" + $blockCount);
    $('.add').append("<div id='quoteblock'>");
    $blockCount++;
  };
    // Grab the quote file from the server
    $.get('assets/george.txt', function(data){
      // Set a var for the number of quotes added, then fetch everything from the txt file, split by line breaks
      $totalQuotes = 0;
      var quotes = data.split("\n");
      // Add a quote to the DOM
      $('#george').click(function() {
        // Increment the quote count, pick one at random to add, assign it an ID so it can be removed. Display it with a space afterwards
        $totalQuotes++;
        $chosenQuote = Math.floor(quotes.length * Math.random());
        $quoteId = "quote_" + $totalQuotes;
        $displayQuote = (quotes[$chosenQuote] + " ");
        // Add a div for the quotes to sit in. Used later by the newPara function
        if($totalQuotes == 1) {
            $('.add').append("<div id='quoteblock'><span id='" + $quoteId + "'>" + $displayQuote + "</span>");
        }
        else {
            $('#quoteblock').append("<span id='" + $quoteId + "'>" + $displayQuote + "</span>");
        }
      });
      // Remove a quote from the DOM using the ID set above. Decrement the quote count accordingly
      $('#costanza').click(function() {
        $("#quote_" + $totalQuotes).remove();
        $totalQuotes--;
      });
      // Add a new paragraph on button click
      $('#art').click(function() {
        newPara();
      });
      // Clear all the ipsum and reset the quote count
      $('#vanderlay').click(function() {
        $("[id^=quoteblock]").remove();
        $totalQuotes = 0;
      });
    });
});

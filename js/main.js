// Main site JS

// Document ready functions
jQuery(document).ready(function($) {
  // Add a new paragraph
  function newPara() {
    $yadaBlock = $('#yadablock');
    // Change the previous yadablock id and append a new yadablock - this way new quotes will always be added to the #yadablock element. Increment the block count
    $yadaBlock.attr('id', 'yadablock_1');
    $('.yada-yada-area').append("<div id='yadablock'>");
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
        $quoteId = 'quote_' + $totalQuotes;
        $displayQuote = (quotes[$chosenQuote] + ' ');
        // Add a div for the quotes to sit in. Used later by the newPara function
        if($totalQuotes == 1) {
            $('.yada-yada-area').append('<div id="yadablock"><span id="' + $quoteId + '">' + $displayQuote + '</span>');
            $('#costanza').removeClass('unemployed');
        }
        else {
            $('#yadablock').append('<span id="' + $quoteId + '">' + $displayQuote + '</span>');
        }
      });
      // Remove a quote from the DOM using the ID set above
      $('#costanza').click(function() {
        $('#quote_' + $totalQuotes).remove();
        // Check to see if the yadablock is empty. If it is, remove it and set the last child as the active block
        $yadaBlock = $('#yadablock');
        $lastYadaBlock = $('.yada-yada-area #yadablock_1:last');
        if($yadaBlock.text() == '') {
          $yadaBlock.remove();
          $lastYadaBlock.attr('id', 'yadablock');
        }
        // Only decrement the quote count if there are quotes on the page
        if ($totalQuotes > 0) {
            $totalQuotes--;
        };
        if ($totalQuotes == 0) {
          $('#costanza').addClass('unemployed');
        }
      });
      // Add a new paragraph on button click
      $('#art').click(function() {
        newPara();
        $totalQuotes++;
        $chosenQuote = Math.floor(quotes.length * Math.random());
        $quoteId = 'quote_' + $totalQuotes;
        $displayQuote = (quotes[$chosenQuote] + ' ');
        $('#yadablock').append("<span id='" + $quoteId + "'>" + $displayQuote + "</span>");
        if($totalQuotes == 1) {
          $('#costanza').removeClass('unemployed');
        }
      });
      // Clear all the ipsum and reset the quote count
      $('#vandelay').click(function() {
        $('[id^=yadablock]').remove();
        $totalQuotes = 0;
        $('#costanza').addClass('unemployed');
      });
    });
});

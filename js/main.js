// Copy clipboard data as plain text
var txt = document.getElementsByClassName('yada-yada-area');
txt[0].addEventListener('copy', function (e) {
  if (/Edge/.test(navigator.userAgent)) {
    // return True;
    // e.preventDefault();
    // // e.clipboardData.setData("text", window.getSelection());
    // console.log(window.getSelection());
    // var string = window.getSelection().toString();
    // e.setData("text", string);

  }
  // Copy in IE
  else if (window.clipboardData) {
    // return True;
  }
  // Copy in Chrome, Firefox etc.
  else if (e.clipboardData) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', window.getSelection());
  }

});

// Main site JS
jQuery(document).ready(function($) {

  // Add a new paragraph.
  function newPara() {
    $yadaBlock = $('#yadablock');

    // Change the previous block id and append a new one - this way new quotes will always be added to the #yadablock element.
    $yadaBlock.attr('id', 'yadablock_1');
    $('.yada-yada-area').append("<div id='yadablock'>");
  };

    // Grab the quote file from the server.
    $.get('assets/george.txt', function(data){

      // Set a var for the number of quotes added, then fetch everything from the txt file, split by line breaks.
      $totalQuotes = 0;
      var quotes = data.split("\n");

      // Add a quote to the DOM.
      $('#george').click(function() {

        // Increment the quote count, pick one at random to add, and assign it an ID so it can be removed later on. Display it with a space afterwards for better formatting.
        $totalQuotes++;
        $chosenQuote = Math.floor(quotes.length * Math.random());
        $quoteId = 'quote_' + $totalQuotes;
        $displayQuote = (quotes[$chosenQuote] + ' ');

        // Add a div for the quotes to sit in. Used later by the newPara function.
        if($totalQuotes == 1) {
          $('.yada-yada-area').append('<div id="yadablock"><span id="' + $quoteId + '">' + $displayQuote + '</span>');
          // Make the remove and clear buttons active.
          $('#costanza').removeClass('unemployed');
          $('#vandelay').removeClass('unemployed');
        }
        else {
          $('#yadablock').append('<span id="' + $quoteId + '">' + $displayQuote + '</span>');
        }
      });

      // Remove a quote from the DOM using the ID set above.
      $('#costanza').click(function() {
        $('#quote_' + $totalQuotes).remove();

        // Check to see if the yadablock is empty. If it is, remove it and set the last child as the active block.
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

        // If there are no quotes on the page, make the remove and clear buttons inactive again.
        if ($totalQuotes == 0) {
          $('#costanza').addClass('unemployed');
          $('#vandelay').addClass('unemployed');
        }
      });

      // Add a new paragraph on button click.
      $('#art').click(function() {
        newPara();
        $totalQuotes++;
        $chosenQuote = Math.floor(quotes.length * Math.random());
        $quoteId = 'quote_' + $totalQuotes;
        $displayQuote = (quotes[$chosenQuote] + ' ');
        $('#yadablock').append("<span id='" + $quoteId + "'>" + $displayQuote + "</span>");

        // If the new paragraph is clicked before the add function, make the remove and clear buttons active.
        if($totalQuotes == 1) {
          $('#costanza').removeClass('unemployed');
          $('#vandelay').removeClass('unemployed');
        }
      });

      // Clear all the ipsum and reset the quote count. Make the remove and clear buttons inactive.
      $('#vandelay').click(function() {
        $('[id^=yadablock]').remove();
        $totalQuotes = 0;
        $('#costanza').addClass('unemployed');
        $('#vandelay').addClass('unemployed');
      });
    });

    // $(document).bind('copy', function(e) { var String = Sample.replace(/(<([^>]+)>)/ig,""); return String; });
    // $(document).bind('copy', function(e) {
    //   var String = String=$('#yadablock').text('');
    //   return String;
    // });

//     function getSelectionText(){
//     var selectedText = ""
//     if (window.getSelection){ // all modern browsers and IE9+
//         selectedText = $.trim(window.getSelection().toString());
//     }
//     return selectedText;
// }

    // $('yada-yada-area').on('copy', function(e) {
    //   e.preventDefault();
    //   $('.yada-yada-area').trim();
    // });

    // $('#yadablock').on('copy', function(e){
    //
    //    $('style').remove();
    //
    //    // window.getSelection().append('p');
    //
    //    // $txt.append('p');
    //
    //    // return $txt;
    //
    //   // $txt = window.getSelection();
    //   // window.getSelection().remove();
    //   // $txt = $.trim(window.getSelection().toString());
    //   // $.trim(window.getSelection().toString());
    //   // $.trim(window.getSelection().replace(/(<([^>]+)>)/ig,""));
    //   // window.getSelection().replace(/(<([^>]+)>)/ig,"");
    //   // $copied
    //   // alert($txt);
    //
    //   // var selectedText = ""
    //   // if (window.getSelection){ // all modern browsers and IE9+
    //   //     // selectedText = $.trim(window.getSelection().toString());
    //   //
    //   //     // selectedText = $.trim(window.getSelection().toString());
    //   //     selectedText = $(window.getSelection().css({'background-color' : '', 'font-weight' : ''}));
    //   //     // copyText = selectedText.css({'background-color' : '', 'font-weight' : ''});
    //   //
    //   //     alert(selectedText);
    //   //
    //   //     // copyText = selectedText.css({'background-color' : '', 'font-weight' : ''});
    //   //     // $(this).css({'background-color' : '', 'font-weight' : ''});
    //   //
    //   //     // alert(copyText);
    //   // }
    //   // // return copyText;
    //   // return selectedText;
    //
    //
    //   // alert('Copied!');
    //   // var text = "";
    //   // if (window.getSelection) {
    //   //     // text = window.getSelection().toString();
    //   //     text = window.getSelection().toString();
    //   //     copied = text.replace(/(<([^>]+)>)/ig,"");
    //   //
    //   // } else if (document.selection && document.selection.type != "Control") {
    //   //     text = document.selection.createRange().text;
    //   // }
    //   //
    //   // alert(copied);
    //
    // });

});

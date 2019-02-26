// Main site JS

// Document ready functions
jQuery(document).ready(function($) {

  function getQuotes() {

    // $quote = '';
    // $quoteCount = 1;

    // Text file
    $.get('assets/george.txt', function(data){
      // Quotes
      var quotes = data.split("\n");
      // console.log(quotes);


      // function getQuote() {
      //   var quote = Math.floor(quotes.length * Math.random());
      //   console.log(quotes[quote]);
      // };

    });



    };





  $.get('assets/george.txt', function(data){
    // Grab all quotes, separated by line breaks
    var quotes = data.split("\n");

    $currentCount = 1;

    // Add a quote
    $('#george').click(function() {
      var quote = Math.floor(quotes.length * Math.random());

        $('.add').append(quotes[quote]);
        $('.add').append("&nbsp;");

        $currentQuote = (quotes[quote]);
        $index = $currentQuote.index();
        console.log($index);
        // $currentCount++;
        // console.log($currentCount);

    });

  //   $('#costanza').click(function() {
  //     console.log($currentQuote);
  //     $($currentQuote).remove();
  // });



});


  // $findQuote = (function() {
    //     $.ajax({
      //         url : "assets/george.txt",
      //         dataType: "text",
      //         success : function (data) {
        //             // $(".add").html(data.split('\n'));
        //             $quote = shuffle(data.split('\n'));
        //         }
        //     });
        // });

        //   var gc = new Array;
        //
        //   $.get('assets/george.txt', function(data) {
          //    // do_something_with(data)
          //    gc = data.split("\n");
          //    // $(".add").html(gc);
          //    // console.log(gc);
          // });

  // $count = 1;
  // $quote = '';
  // $findQuote = function() {
  //   $.get('assets/george.txt').success(function(data){
  //     $quote = random(data.split('\n'));
  //   });
  // };

  // $findQuote = (function() {
  //     $.ajax({
  //         url : "assets/george.txt",
  //         dataType: "text",
  //         success : function (data) {
  //             // $(".add").html(data.split('\n'));
  //             $quote = random(data.split('\n'));
  //             console.log($quote);
  //           }
  //     });
  // });
  //
  // var random = function(data) {
  //   for (var j, x, i = data.length; i; j = parseInt(Math.random() * i, 10), x = data[--i], data[i] = data[j], data[j] = x);
  //   return data;
  // };



// /* Controllers */
// myApp.controller('IpsumCtrl', ['$scope', '$http', function($scope, $http) {
//   $scope.quoteCount = 1;
//   $scope.ipsum = '';
//   $scope.getIpsum = function() {
//     $http.get('/ipsum/words.txt').success(function(data) {
//       $scope.ipsum = shuffle(data.split('\n'));
//     });
//   };
//   var shuffle = function(data) {
//     for (var j, x, i = data.length; i; j = parseInt(Math.random() * i, 10), x = data[--i], data[i] = data[j], data[j] = x);
//     return data;
//   };
//   $scope.tooFew = function() {
//     if ($scope.quoteCount < 2) return true;
//     else return false;
//   };
//   $scope.getIpsum();
//   $scope.addIpsum = function() {
//     $scope.quoteCount = $scope.quoteCount + 1;
//   };
//   $scope.lessIpsum = function() {
//     $scope.quoteCount = $scope.quoteCount - 1;
//   };
// }]);
//
// function selectText(containerid) {
//   if (document.selection) {
//     var range = document.body.createTextRange();
//     range.moveToElementText(document.getElementById(containerid));
//     range.select();
//   } else if (window.getSelection) {
//     var range = document.createRange();
//     range.selectNode(document.getElementById(containerid));
//     window.getSelection().addRange(range);
//   }
// }


});

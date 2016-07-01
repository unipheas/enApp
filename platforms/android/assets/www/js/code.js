
$(document).ready(function(){


  // Change all clicked elements to dark and light shading.
  $('ul').on('click', 'li', function(){ // When selector 'li' is clicked do the function
    $('li').removeClass('buttonDark').addClass('buttonLight'); // remove dark and add light from all li
     $(this).removeClass('buttonLight') // selected li gets light
            .addClass('buttonDark'); // selected li removes dark
  });

  $('span').click(function(){ // for sub buttons in longVowels
     $(this).removeClass('buttonLight') // selected removes light
        .addClass('buttonDark') // selected adds dark
        .siblings(this) // choose all other siblings of selected
        .removeClass('buttonDark') // remove dark
        .addClass('buttonLight'); // add light
  });

  // dd.fiter(':nth-child(n+4)').addClass('className'); // used to hide all except first one
  // $('<p></p>',{
      // text: 'Ant',
      // class: 'vowelWord'
  // }).appendTo('.content'); // creates the html element needed and puts at the bottom.

// var shortVowels = {  
//   var shortVowelA = {
//     "img": "img/apple.png"
//     "word1": "Ant",
//     "word2": "Apple",
//     "word3": "Antelope",
//     "audio": ""
//   }
//
//   var shortVowelE = {
//     "img": "img/apple.png"
//     "word1": "Egg",
//     "word2": "End",
//     "word3": "Engine",
//     "audio": ""
//   }
//
//   var shortVowelI = {
//     "img": "img/apple.png"
//     "word1": "In",
//     "word2": "Inside",
//     "word3": "Internet",
//     "audio": ""
//   }
//
//   var shortVowelO = {
//     "img": "img/apple.png"
//     "word1": "On",
//     "word2": "Object",
//     "word3": "Ostrich",
//     "audio": ""
//   }
//   var shortVowelU = {
//     "img": "img/apple.png"
//     "word1": "Up",
//     "word2": "Under",
//     "word3": "Ugly",
//     "audio": ""
//   }
//
//   function fillContent(letter){
//
//   }}
 });

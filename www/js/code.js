
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

  $('#shortA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Ant'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Apple'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Antelope'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
  });

  $('#shortE').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/elephant.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Egg'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'End'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Engine'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
  });

  $('#shortI').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/ink.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'In'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Inside'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Internet'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
  });

  $('#shortO').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/dog.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'On'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Object'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Ostrich'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
  });

  $('#shortU').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/ball.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Up'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Under'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Ugly'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
  });

  $('#longA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/ball.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Up'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Under'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Ugly'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
  });
 });

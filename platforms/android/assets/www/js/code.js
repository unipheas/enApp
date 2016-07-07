
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

          // This is for the SHORT VOWELS
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

        // This is for the LONG VOWELS
  $('.subVmenu').hide();
  $('.subA').show();


        // To show,hide sub-menu
  $('#longA').on('click', function(){
    $('.subVmenu').hide();
    $('.subA').show();
  });
  $('#longE').on('click', function(){
    $('.subVmenu').hide();
    $('.subE').show();
  });
  $('#longI').on('click', function(){
    $('.subVmenu').hide();
    $('.subI').show();
  });
  $('#longO').on('click', function(){
    $('.subVmenu').hide();
    $('.subO').show();
  });
  $('#longU').on('click', function(){
    $('.subVmenu').hide();
    $('.subU').show();
  });


          // To show content in LONG VOWELS
                //Long Vowel A
  $('#longA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Pay'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Day'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Play'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('span#ay').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ay').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Pay'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Day'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Play'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ay').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ai').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Paid'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Laid'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Rain'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ai').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#a_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Paper'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Game'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Plane'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#a_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });

              //Long Vowel E
  $('#longE').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Bee'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Free'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tree'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('span#ee').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ee').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Bee'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Free'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tree'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ee').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ea').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Bean'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Clean'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Flea'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ea').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#e_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Theme'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Theme'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Theme'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#e_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });

            //Long Vowel I
  $('#longI').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Pie'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Lie'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Pie'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('span#ie').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ie').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Pie'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Pie'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Pie'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ie').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#igh').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'High'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'High'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'High'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#igh').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#y').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Fly'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Fly'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Fly'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#y').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#i_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Time'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Time'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Time'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#i_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });

          //Long Vowel O
  $('#longO').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Boat'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Boat'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Boat'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('span#oa').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#oa').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Boat'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Boat'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Boat'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#oa').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ow').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Blow'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Blow'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Blow'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ow').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#o_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Tone'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Tone'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tone'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#o_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });

          //Long Vowel U
  $('#longU').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Blue'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Blue'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Blue'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('span#ue').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ue').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Blue'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Blue'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Blue'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ue').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ew').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Few'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Few'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Few'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#ew').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#u_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Tube'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Tube'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tube'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      src: ''
    }));
    $('#u_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });



      // CONSONANTS
  // $('#b').on('click',function(){
  //   $('#dialog').dialog("open");
  // });

 });
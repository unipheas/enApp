
$(document).ready(function(){


  // Change all clicked elements to dark and light shading.
  $('ul').on('click', 'li', function(){ // When selector 'li' is clicked do the function
    $('li').removeClass('buttonDark').addClass('buttonLight'); // remove dark and add light from all li
     $(this).removeClass('buttonLight') // selected li gets light
            .addClass('buttonDark'); // selected li removes dark
  });

          // This is for the SHORT VOWELS
  $('#shortA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Apple'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Ant'
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
      src: 'img/phonics_img/shortVowels/egg.png'
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
      src: 'img/phonics_img/shortVowels/insect.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Insect'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'In'
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
      src: 'img/phonics_img/shortVowels/orange.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Orange'
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
      src: 'img/phonics_img/shortVowels/umbrella.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Umbrella'
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

          // To show content in LONG VOWELS
                //Long Vowel A
  $('#longA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/lake.png'
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
    $('.subVmenu').hide();
    $('.subA').show();
    $('span#ay').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ay').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/lake.png'
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
      src: 'img/phonics_img/longVowels/eat.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Eat'
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
    $('.subVmenu').hide();
    $('.subE').show();
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
      src: 'img/phonics_img/longVowels/ice.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Ice'
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
    $('.subVmenu').hide();
    $('.subI').show();
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
      src: 'img/phonics_img/longVowels/boat.jpg'
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
    $('.subVmenu').hide();
    $('.subO').show();
    $('span#oa').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#oa').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/boat.jpg'
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
      src: 'img/phonics_img/longVowels/uniform.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Uniform'
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
    $('.subVmenu').hide();
    $('.subU').show();
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

            // DIALOG BOX FOR CONTENT
  $('#close').on('click',function(){
    $('#overlay').hide();
  });
  $('#overlay').hide();

              // CONSONANTS
  $('#b').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/ball.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Ball'
    }));
  })
  $('#c').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/cat.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Cat'
    }));
  })
  $('#d').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/dog.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Dog'
    }));
  })
  $('#f').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/fish.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Fish'
    }));
  })
  $('#g').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/goat.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Goat'
    }));
  })
  $('#h').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/hat.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Hat'
    }));
  })
  $('#j').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/jar.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Jar'
    }));
  })
  $('#k').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/king.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'King'
    }));
  })
  $('#l').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/lady.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Lady'
    }));
  })
  $('#m').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/mouse.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Mouse'
    }));
  })
  $('#n').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/nose.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Nose'
    }));
  })
  $('#p').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/pencil.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Pencil'
    }));
  })
  $('#q').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/queen.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Queen'
    }));
  })
  $('#r').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/robot.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Robot'
    }));
  })
  $('#s').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/snake.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Snake'
    }));
  })
  $('#t').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/tshirt.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Tshirt'
    }));
  })
  $('#v').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/van.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Van'
    }));
  })
  $('#w').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/whale.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Whale'
    }));
  })
  $('#x').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/x-box.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'X-box'
    }));
  })
  $('#y').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/yellow.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Yellow'
    }));
  })
  $('#z').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/zebra.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Zebra'
    }));
  })
 });

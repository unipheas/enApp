
$(document).ready(function(){

//     var lang = '../audio/us/';
//     var sex = 'male/';
//
// // Language switcher with flag icons
//     $('div#changeVoice').on('click', function(){
//         if ($("#changeVoice img").attr('src') == 'img/usflag.png') {
//           $('#changeVoice img').replaceWith($('<img></img>',{
//             src: 'img/ukflag.png',
//             height: '35',
//             width: '35'
//           }));
//           lang = '../audio/uk/';
//         }else {
//           $('#changeVoice img').replaceWith($('<img></img>',{
//             src: 'img/usflag.png',
//             height: '35',
//             width: '35'
//           }));
//           lang = '../audio/us/';
//         };
//       });
//
// // Sex switcher for male/female voiceover
//     $('div#changeSex').on('click', function(){
//       if ($("#changeSex img").attr('src') == 'img/male.png') {
//         $('#changeSex img').replaceWith($('<img></img>',{
//           src: 'img/female.png',
//           height: '35',
//           width: '35'
//         }));
//          sex = 'female/';
//       }else {
//         $('#changeSex img').replaceWith($('<img></img>', {
//           src: 'img/male.png',
//           height: '35',
//           width: '35'
//         }));
//         sex = 'male/';
//       };
//     });

  var shortVowels = "../audio/short_vowels/mp3/";
  var longVowels = "../audio/long_vowels/mp3/";
  var cons = "../audio/consonants/mp3/";
  var blends = "../audio/blends/mp3/";

  // Change all clicked elements to dark and light shading.
  $('ul').on('click', 'li',function(){ // When selector 'li' is clicked do the function
    $('li').removeClass('buttonDark').addClass('buttonLight'); // remove dark and add light from all li
     $(this).removeClass('buttonLight') // selected li gets light
            .addClass('buttonDark'); // selected li removes dark
  });

          // This is for the SHORT VOWELS
  $('#shortA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/shortVowels/apple.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Apple 苹果'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Ant 蚂蚁'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Antelope 羚羊'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: shortVowels+'a.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
  });
  $('#shortE').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/shortVowels/egg.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Egg 鸡蛋'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'End 结束'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Engine 引擎'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: shortVowels+'e.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
  });
  $('#shortI').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/shortVowels/insect.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Insect 昆虫'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'In 在...里面'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Internet 因特网'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: shortVowels+'i.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
  });
  $('#shortO').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/shortVowels/orange.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Orange 橙子'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Object 物体'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Ostrich 鸵鸟'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: shortVowels+'o.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
  });
  $('#shortU').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/shortVowels/umbrella.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Umbrella 雨伞'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Under 在...下面'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Ugly 丑'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: shortVowels+'u.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
  });

        // This is for the LONG VOWELS
  $('.subVmenu').hide();
  $('.subA').show();

          // To show content in LONG VOWELS
                //Long Vowel A
  $('#longA').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/day.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Day 白天'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Pay 付钱'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Play 玩耍'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'a.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
      src: 'img/phonics_img/longVowels/subMenu/day.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Day 白天'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Pay 付钱'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Play 玩耍'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'a.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ay').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ai').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/rain.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Rain 下雨'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Laid 下蛋'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Paid 付钱'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'a.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ai').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#a_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/plane.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Plane 飞机'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Game 游戏'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Paper 纸'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'a.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#a_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
              //Long Vowel E
  $('#longE').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/bee.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Bee 蜜蜂'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Free 免费'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tree 树'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'e.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
      src: 'img/phonics_img/longVowels/subMenu/bee.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Bee 蜜蜂'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Free 免费'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tree 树'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'e.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ee').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ea').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/eat.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Eat 吃'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Clean 干净'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Flea 跳蚤'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'e.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ea').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#e_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/chinese.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Chinese 中国人'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Athlete 运动员'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Theme 主题'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'e.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#e_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#eay').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/Angry.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Angry 生气'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Happy 高兴'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Lady 女士'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'e.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#eay').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
            //Long Vowel I
  $('#longI').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/pie.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Pie 派'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Lie 撒谎'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tie 领带'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'i.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
      src: 'img/phonics_img/longVowels/subMenu/pie.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Pie 派'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Lie 撒谎'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tie 领带'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'i.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ie').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#igh').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/light.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Light 轻'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'High 高'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Sigh 叹气'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'i.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#igh').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#y').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/fly.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Fly 苍蝇'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Fry 炸'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Cry 哭'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'i.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#y').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#i_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/bike.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Bike 自行车'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Time 时间'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Wine 红酒'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'i.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
      text: 'Boat 船'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Road 道路'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Coat 外套'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'o.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
      text: 'Boat 船'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Road 道路'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Coat 外套'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'o.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#oa').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ow').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/window.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Window 窗户'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Blow 吹'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Row 划船'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'o.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ow').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#o_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/phone.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Phone 手机'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Bone 骨头'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tone 声调'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'o.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#o_e').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
          //Long Vowel U
  $('#longU').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/blue.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Blue 蓝色'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Argue 争吵'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'True 真实'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'u.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
      src: 'img/phonics_img/longVowels/subMenu/blue.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Blue 蓝色'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Argue 争吵'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'True 真实'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'u.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ue').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#ew').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/mew.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Mew 喵喵叫'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Blew 吹'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Shrew 鼩鼱'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'u.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $('#ew').removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  });
  $('#u_e').on('click',function(){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/cube.png'
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: 'Cube 方块'
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: 'Refuse 拒绝'
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: 'Tube 管道'
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: longVowels+'u.mp3',
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
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
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/ball.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Ball 球'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'ball.mp3',
      type: "audio/mpeg"
    }));
  })
  $('#c').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/cat.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Cat 猫'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'cat.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#d').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/dog.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Dog 狗'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'dog.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#f').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/fish.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Fish 鱼'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'fish.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#g').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/goat.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Goat 山羊'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'goat.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#h').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/hat.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Hat 帽子'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'hat.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#j').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/jam.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Jam 果酱'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'jam.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#k').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/king.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'King 国王'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'king.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#l').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/lady.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Lady 女士'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'lady.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#m').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/mouse.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Mouse 老鼠'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'mouse.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#n').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/nose.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Nose 鼻子'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'nose.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#p').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/pen.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Pen 笔'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'pen.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#q').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/queen.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Queen 女王'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'queen.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#r').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/robot.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Robot 机器人'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'robot.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#s').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/snake.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Snake 蛇'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'snake.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#t').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/tshirt.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Tshirt T恤'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'tshirt.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#v').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/violet.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Violet 紫罗兰'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'violet.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#w').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/whale.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Whale 鲸鱼'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'whale.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#x').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/xray.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Xray X光'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'xray.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#cony').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/yellow.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Yellow 黄色'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'yellow.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#z').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/zebra.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Zebra 斑马'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'zebra.mp3',
      type: "audio/mpeg"
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: cons+'zebra.mp3',
      type: "audio/mpeg"
    }));
  });

            // `BLENDS`
  $('#ch').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/cheese.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Cheese 芝士'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ch.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#sh').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/sh!.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Sh! 嘘！'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'sh.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#th').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/there.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'There 那里'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'th.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#thU').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/three.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Three 三'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'th_.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#oo').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/tools.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Tools 工具'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'oo.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ooU').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/good.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Good 好'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'oo_.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#oi').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/boil.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Boil 煮沸'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'oi.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#oy').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/toys.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Toys 玩具'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'oy.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ou').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/out.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Out 外面'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ou.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#blOw').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/owl.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Owl 猫头鹰'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ow.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#er').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/germ.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Germ 病菌'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'er.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ur').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/nurse.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Nurse 护士'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ur.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ir').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/shirt.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Shirt 衬衫'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ir.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#or').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/horn.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Horn 角'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'or.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ar').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/car.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Car 车'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ar.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#aw').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/crawl.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Crawl 爬行'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'aw.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ing').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/sing.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Sing 唱歌'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ing.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#ph').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/phone.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Phone 电话'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'ph.mp3',
      type: "audio/mpeg"
    }));
  });
  $('#tion').on('click',function(){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/construction.png'
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Construction 建造'
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: blends+'tion.mp3',
      type: "audio/mpeg"
    }));
  });
 });

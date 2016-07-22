
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
  var cons = "../audio/consonants/mp3";
  var blends = "../audio/blends/mp3";

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
    $('.content audio source').replaceWith($('<source>',{
      src: shortVowels+'a.mp3',
      type: "audio/mpeg"
    }));
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
    $('.content audio source').replaceWith($('<source>',{
      src: shortVowels+'e.mp3',
      type: "audio/mpeg"
    }));
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
    $('.content audio source').replaceWith($('<source>',{
      src: shortVowels+'i.mp3',
      type: "audio/mpeg"
    }));
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
    $('.content audio source').replaceWith($('<source>',{
      src: shortVowels+'o.mp3',
      type: "audio/mpeg"
    }));
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
    $('.content audio source').replaceWith($('<source>',{
      src: shortVowels+'u.mp3',
      type: "audio/mpeg"
    }));
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
      src: ''
    }));
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
      src: ''
    }));
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
      text: 'Ball 球'
    }));
  })
  $('#c').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/cat.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Cat 猫'
    }));
  });
  $('#d').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/dog.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Dog 狗'
    }));
  });
  $('#f').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/fish.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Fish 鱼'
    }));
  });
  $('#g').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/goat.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Goat 山羊'
    }));
  });
  $('#h').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/hat.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Hat 帽子'
    }));
  });
  $('#j').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/jar.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Jar 罐子'
    }));
  });
  $('#k').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/king.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'King 国王'
    }));
  });
  $('#l').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/lady.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Lady 女士'
    }));
  });
  $('#m').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/mouse.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Mouse 老鼠'
    }));
  });
  $('#n').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/nose.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Nose 鼻子'
    }));
  });
  $('#p').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/pencil.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Pencil 铅笔'
    }));
  });
  $('#q').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/queen.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Queen 女王'
    }));
  });
  $('#r').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/robot.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Robot 机器人'
    }));
  });
  $('#s').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/snake.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Snake 蛇'
    }));
  });
  $('#t').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/tshirt.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Tshirt T恤'
    }));
  });
  $('#v').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/van.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Van 小货车'
    }));
  });
  $('#w').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/whale.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Whale 鲸鱼'
    }));
  });
  $('#x').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/x-box.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Box 箱'
    }));
  });
  $('#y').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/yellow.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Yellow 黄色'
    }));
  });
  $('#z').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/zebra.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Zebra 斑马'
    }));
  });

            // `BLENDS`
  $('#ch').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/cheese.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Cheese 芝士'
    }));
  });
  $('#sh').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/sh!.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Sh! 嘘！'
    }));
  });
  $('#th').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/there.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'There 那里'
    }));
  });
  $('#thU').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/three.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Three 三'
    }));
  });
  $('#oo').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/tools.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Tools 工具'
    }));
  });
  $('#ooU').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/good.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Good 好'
    }));
  });
  $('#oi').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/boil.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Boil 煮沸'
    }));
  });
  $('#oy').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/toys.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Toys 玩具'
    }));
  });
  $('#ou').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/out.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Out 外面'
    }));
  });
  $('#ow').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/owl.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Owl 猫头鹰'
    }));
  });
  $('#er').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/germ.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Germ 病菌'
    }));
  });
  $('#ur').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/nurse.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Nurse 护士'
    }));
  });
  $('#ir').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/shirt.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Shirt 衬衫'
    }));
  });
  $('#or').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/horn.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Horn 角'
    }));
  });
  $('#ar').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/car.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Car 车'
    }));
  });
  $('#aw').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/crawl.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Crawl 爬行'
    }));
  });
  $('#ing').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/sing.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Sing 唱歌'
    }));
  });
  $('#ph').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/subMenu/phone.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Phone 电话'
    }));
  });
  $('#tion').on('click',function(){
    $('#overlay').show();
    $('.conContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/construction.png'
    }));
    $('.conContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: 'Construction 建造'
    }));
  });
 });

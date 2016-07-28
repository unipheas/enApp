
$(document).ready(function(){

  function shortVowel(picture, word1, word2, word3, audio){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/shortVowels/'+picture
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: word1
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: word2
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: word3
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: "../audio/short_vowels/mp3/"+audio,
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
  }
  
  function longVowel(pic, word1, word2, word3, audio, tag){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/longVowels/'+pic
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: word1
    }));
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: word2
    }));
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: word3
    }));
    $('.content audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: "../audio/long_vowels/mp3/"+audio,
      type: "audio/mpeg"
    }));
    document.getElementById('mp3').play();
    $(tag).removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  }

  function consonants(pic, word, audio){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/consonants/'+pic
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: word
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: "../audio/consonants/mp3/"+audio,
      type: "audio/mpeg"
    }));
  }

  function blends(pic, word, audio){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/phonics_img/blends/'+pic
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: word
    }));
    $('#overlay audio').replaceWith($('<audio></audio>',{
      id: "mp3",
      autoplay: "autoplay",
      src: "../audio/blends/mp3/"+audio,
      type: "audio/mpeg"
    }));
  }

  // Change all clicked elements to dark and light shading.
  $('ul').on('click', 'li',function(){ // When selector 'li' is clicked do the function
    $('li').removeClass('buttonDark').addClass('buttonLight'); // remove dark and add light from all li
     $(this).removeClass('buttonLight') // selected li gets light
            .addClass('buttonDark'); // selected li removes dark
  });

          // This is for the SHORT VOWELS
  $('#shortA').on('click',function(){
    shortVowel('apple.png','Apple 苹果','Ant 蚂蚁','Antelope 羚羊','a.mp3');
  });
  $('#shortE').on('click',function(){
    shortVowel('egg.png','Egg 鸡蛋','End 结束','Engine 引擎','e.mp3');
  });
  $('#shortI').on('click',function(){
    shortVowel('insect.png', 'Insect 昆虫', 'In 在...里面', 'Internet 因特网', 'i.mp3');
  });
  $('#shortO').on('click',function(){
    shortVowel('orange.png','Orange 橙子','Object 物体','Ostrich 鸵鸟','o.mp3');
  });
  $('#shortU').on('click',function(){
    shortVowel('umbrella.png','Umbrella 雨伞','Under 在...下面','Ugly 丑','u.mp3');
  });

        // This is for the LONG VOWELS
  $('.subVmenu').hide();
  $('.subA').show();

          // To show content in LONG VOWELS
                //Long Vowel A
  $('#longA').on('click',function(){
    $('.subVmenu').hide();
    $('.subA').show();
    longVowel('day.png','Day 白天','Pay 付钱','Play 玩耍','a.mp3', 'span#ay');
  });
  $('#ay').on('click',function(){
    longVowel('day.png','Day 白天','Pay 付钱','Play 玩耍','a.mp3','#ay');
  });
  $('#ai').on('click',function(){
    longVowel('rain.png','Rain 下雨','Laid 下蛋','Paid 付钱','a.mp3','#ai');
  });
  $('#a_e').on('click',function(){
    longVowel('plane.png','Plane 飞机','Game 游戏','Paper 纸','a.mp3','#a_e');
  });
              //Long Vowel E
  $('#longE').on('click',function(){
    $('.subVmenu').hide();
    $('.subE').show();
    longVowel('bee.png','Bee 蜜蜂','Free 免费','Tree 树','e.mp3','span#ee');
  });
  $('#ee').on('click',function(){
    longVowel('bee.png','Bee 蜜蜂','Free 免费','Tree 树','e.mp3','#ee');
  });
  $('#ea').on('click',function(){
    longVowel('eat.png','Eat 吃','Clean 干净','Flea 跳蚤','e.mp3','#ea');
  });
  $('#e_e').on('click',function(){
    longVowel('chinese.png','Chinese 中国人','Athlete 运动员','Theme 主题','e.mp3','#e_e');
  });
  $('#eay').on('click',function(){
    longVowel('angry.png','Angry 生气','Happy 高兴','Lady 女士','e.mp3','#eay');
  });
            //Long Vowel I
  $('#longI').on('click',function(){
    $('.subVmenu').hide();
    $('.subI').show();
    longVowel('pie.png','Pie 派','Lie 撒谎','Tie 领带','i.mp3','span#ie');
  });
  $('#ie').on('click',function(){
    longVowel('pie.png','Pie 派','Lie 撒谎','Tie 领带','i.mp3','span#ie');
  });
  $('#igh').on('click',function(){
    longVowel('light.png','Light 轻','High 高','Sigh 叹气','i.mp3','#igh');
  });
  $('#y').on('click',function(){
    longVowel('fly.png','Fly 苍蝇','Fry 炸','Cry 哭','i.mp3','#y');
  });
  $('#i_e').on('click',function(){
    longVowel('bike.png','Bike 自行车','Time 时间','Wine 红酒','i.mp3','#i_e');
  });
          //Long Vowel O
  $('#longO').on('click',function(){
    $('.subVmenu').hide();
    $('.subO').show();
    longVowel('boat.jpg','Boat 船','Road 道路','Coat 外套','o.mp3','span#oa');
  });
  $('#oa').on('click',function(){
    longVowel('boat.jpg','Boat 船','Road 道路','Coat 外套','o.mp3','span#oa');
  });
  $('#ow').on('click',function(){
    longVowel('window.png','Window 窗户','Blow 吹','Row 划船','o.mp3','#ow');
  });
  $('#o_e').on('click',function(){
    longVowel('phone.png','Phone 手机','Bone 骨头','Tone 声调','o.mp3','#o_e');
  });
          //Long Vowel U
  $('#longU').on('click',function(){
    $('.subVmenu').hide();
    $('.subU').show();
    longVowel('blue.png','Blue 蓝色','Argue 争吵','True 真实','u.mp3','span#ue');
  });
  $('#ue').on('click',function(){
    longVowel('blue.png','Blue 蓝色','Argue 争吵','True 真实','u.mp3','span#ue');
  });
  $('#ew').on('click',function(){
    longVowel('mew.png','Mew 喵喵叫','Blew 吹','Shrew 鼩鼱','u.mp3','#ew');
  });
  $('#u_e').on('click',function(){
    longVowel('cube.png','Cube 方块','Refuse 拒绝','Tube 管道','u.mp3','#u_e');
  });

            // DIALOG BOX FOR CONTENT
  $('#close').on('click',function(){
    $('#overlay').hide();
  });
  $('#overlay').hide();

              // CONSONANTS
  $('#b').on('click',function(){
    consonants('ball.png','Ball 球','ball.mp3');
  })
  $('#c').on('click',function(){
    consonants('cat.png','Cat 猫','cat.mp3');
  });
  $('#d').on('click',function(){
    consonants('dog.png','Dog 狗','dog.mp3');
  });
  $('#f').on('click',function(){
    consonants('fish.png','Fish 鱼','fish.mp3');
  });
  $('#g').on('click',function(){
    consonants('goat.png','Goat 山羊','goat.mp3');
  });
  $('#h').on('click',function(){
    consonants('hat.png','Hat 帽子','hat.mp3');
  });
  $('#j').on('click',function(){
    consonants('jam.png','Jam 果酱','jam.mp3');
  });
  $('#k').on('click',function(){
    consonants('king.png','King 国王','king.mp3');
  });
  $('#l').on('click',function(){
    consonants('lady.png','Lady 女士','lady.mp3');
  });
  $('#m').on('click',function(){
    consonants('mouse.png','Mouse 老鼠','mouse.mp3');
  });
  $('#n').on('click',function(){
    consonants('nose.png','Nose 鼻子','nose.mp3');
  });
  $('#p').on('click',function(){
    consonants('pen.png','Pen 笔','pen.mp3');
  });
  $('#q').on('click',function(){
    consonants('queen.png','Queen 女王','queen.mp3');
  });
  $('#r').on('click',function(){
    consonants('robot.png','Robot 机器人','robot.mp3');
  });
  $('#s').on('click',function(){
    consonants('snake.png','Snake 蛇','snake.mp3');
  });
  $('#t').on('click',function(){
    consonants('tshirt.png','Tshirt T恤','tshirt.mp3');
  });
  $('#v').on('click',function(){
    consonants('violet.png','Violet 紫罗兰','violet.mp3');
  });
  $('#w').on('click',function(){
    consonants('whale.png','Whale 鲸鱼','whale.mp3');
  });
  $('#x').on('click',function(){
    consonants('xray.png','Xray X光','xray.mp3');
  });
  $('#cony').on('click',function(){
    consonants('yellow.png','Yellow 黄色','yellow.mp3');
  });
  $('#z').on('click',function(){
    consonants('zebra.png','Zebra 斑马','zebra.mp3');
  });

            // `BLENDS`
  $('#ch').on('click',function(){
    blends('cheese.png','Cheese 芝士','ch.mp3');
  });
  $('#sh').on('click',function(){
    blends('sh.png','Sh! 嘘！','sh.mp3');
  });
  $('#th').on('click',function(){
    blends('there.png','There 那里','th.mp3');
  });
  $('#thU').on('click',function(){
    blends('three.png','Three 三','th_.mp3');
  });
  $('#oo').on('click',function(){
    blends('tools.png','Tools 工具','oo.mp3');
  });
  $('#ooU').on('click',function(){
    blends('good.png','Good 好','oo_.mp3');
  });
  $('#oi').on('click',function(){
    blends('boil.png','Boil 煮沸','oi.mp3');
  });
  $('#oy').on('click',function(){
    blends('toys.png','Toys 玩具','oy.mp3');
  });
  $('#ou').on('click',function(){
    blends('out.png','Out 外面','ou.mp3');
  });
  $('#blOw').on('click',function(){
    blends('owl.png','Owl 猫头鹰','ow.mp3');
  });
  $('#er').on('click',function(){
    blends('germ.png','Germ 病菌','er.mp3');
  });
  $('#ur').on('click',function(){
    blends('nurse.png','Nurse 护士','ur.mpe');
  });
  $('#ir').on('click',function(){
    blends('shirt.png','Shirt 衬衫','ir.mp3');
  });
  $('#or').on('click',function(){
    blends('horn.png','Horn 角','or.mp3');
  });
  $('#ar').on('click',function(){
    blends('car.png','Car 车','ar.mp3');
  });
  $('#aw').on('click',function(){
    blends('crawl.png','Crawl 爬行','aw.mp3');
  });
  $('#ing').on('click',function(){
    blends('sing.png','Sing 唱歌','ing.mp3');
  });
  $('#ph').on('click',function(){
    blends('phone.png','Phone 电话','ph.mp3');
  });
  $('#tion').on('click',function(){
    blends('construction.png','Construction 建造','tion.mp3');
  });
 });


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

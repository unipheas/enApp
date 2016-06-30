// document.getElementById("a").style.background="rgba(0,0,0,0.80)";
// document.getElementById("subFirst").style.background="rgba(0,0,0,0.80)";

// $(document).ready(function(){ //When document is ready run function.
//   $('button').on('click',function(){
//     var $this = $(this);
//     $this
//       .siblings('button') //find siblings of clicked button
//       .removeAttr('background','rgba(0,0,0,0.50)') // remove siblings with darkBG
//       .end() //go back to clicked button
//       .attr('background','rgba(0,0,0,0.80)'); //add darkBG
//   });
// });

$(document).ready(function(){
  // Change all clicked elements to dark and light shading.
  $('li').click(function(){ // When selector 'li' is clicked do the function
    $('li').removeClass('buttonDark').addClass('buttonLight'); // remove dark and add light from all li
     $(this).removeClass('buttonLight') // selected li gets light
     $(this).addClass('buttonDark'); // selected li removes dark
  });

  $('span').click(function(){
     $(this)
        .removeClass('buttonLight') // selected removes light
        .addClass('buttonDark') // selected adds dark
        .siblings(this) // choose all other siblings of selected
        .removeClass('buttonDark') // remove dark
        .addClass('buttonLight'); // add light
  });

  
});

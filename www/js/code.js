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
  $('button').click(function(){
     $(this).addClass('.buttonDark');
  });
});

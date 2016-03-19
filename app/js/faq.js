(function(){
  console.log('faq has loaded');
  var question= document.getElementsByClassName('question-title');
  var answer= document.getElementsByClassName('question-answer');
  var box= document.getElementsByClassName('question-box');

  $(answer).hide();


  $(question).click(function(){
    var reveal = $(this).parent().find(answer);

    $(reveal).slideToggle();


  });

})();
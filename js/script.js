$(document).ready(function(){
  $(".ruby").hover(function(){
    $(".ruby").addClass("hoverstate");
  },
    function(){
    $(".ruby").removeClass("hoverstate");
  });

  $(".heroku").hover(function(){
    $(".heroku").addClass("hoverstate");
  },
    function(){
    $(".heroku").removeClass("hoverstate");
  });

  $(".html").hover(function(){
    $(".html").addClass("hoverstate");
  },
    function(){
    $(".html").removeClass("hoverstate");
  });

  $(".sass").hover(function(){
    $(".sass").addClass("hoverstate");
  },
    function(){
    $(".sass").removeClass("hoverstate");
  });
});

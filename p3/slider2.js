
var currentImg = 1;
var maximunImg = 3;
var changed = false;
$().ready(
  function(){
    function doChange(nextI){
      $(".img:nth-child("+currentImg +")").fadeOut(1000);
      $(".img:nth-child("+ nextI +")").fadeIn(1000);
      $(".dots a:nth-child("+currentImg+")").removeClass("currentSlide");
      $(".dots a:nth-child("+ nextI +")").addClass("currentSlide");
      currentImg = parseInt(nextI);
    }

    $(".img").hide();
    $(".img:first-child").show();


    function doNextChange(){
      if(changed){
        changed = false;
      }else{
        doChange((currentImg==maximunImg)?1:currentImg + 1);
      }
      setTimeout(doNextChange, 5000);
    }


    maximunImg = $(".img").length;
    var dotsHtml = '<div class="dots">';
    for(var i=1; i<=maximunImg; i++){
      dotsHtml += '<a href data-index="'+i+'">*</a>';

    }
    dotsHtml += '</div>';


    var prevNextBtn = '<div class="sldPrv"><</div><div class="sldNxt">></div>';
    $(".holder").append(dotsHtml);
    $(".holder").append(prevNextBtn);

    $(".dots a").click(
      function(e){
        e.preventDefault();
        changed=true;
        doChange($(this).attr("data-index"));
      }
    ).first().addClass("currentSlide");

    $(".sldPrv").click(
      function(e){
        e.preventDefault();
        changed=true;
        doChange((currentImg==1)?maximunImg:currentImg-1);
      }
    );
    $(".sldNxt").click(
      function(e){
        e.preventDefault();
        changed=true;
        doChange((currentImg==maximunImg)?1:currentImg+1);
      }
    );


    setTimeout(function(){
        doNextChange();
    }, 5000 );

  }
);

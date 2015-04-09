
var currentImg = 1;
var changed = false;
$().ready(
  function(){
    function doChange(nextI){
      $(".img:nth-child("+currentImg +")").hide(1000);
      $(".img:nth-child("+ nextI +")").show(1000);
      currentImg = parseInt(nextI);
    }

    $(".img").hide();
    $(".img:first-child").show();
    $(".dots a").click(
      function(e){
        e.preventDefault();
        changed=true;
        doChange($(this).attr("data-index"));

      }
    );

    function doNextChange(){
      if(changed){
        changed = false;
      }else{
        doChange((currentImg==3)?1:currentImg + 1);
      }
      setTimeout(doNextChange, 5000);
    }

    setTimeout(function(){
        doNextChange();
    }, 5000 );

  }
);

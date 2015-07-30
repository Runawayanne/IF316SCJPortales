$(document).ready(function(){
    var toolbar = $(".toolbar"), bars = $(".bars");
    bars.on("click", function(e){
        e.preventDefault();e.stopPropagation();
        bars.toggleClass("hidden");
        toolbar.toggleClass("hidden");
    });
});

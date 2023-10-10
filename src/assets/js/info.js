 export default function() {
  if(max-width >= 1194){
    $(".rec_movie").on("mouseover", function () {
      $(this).find(".summary").show();
    });
    $(".rec_movie").on("mouseout", function () {
      $(this).find(".summary").hide();
    });
  }
  };


  
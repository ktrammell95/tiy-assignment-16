$(function(){
  $.ajax("data.json", {
    success: function(data) {
      var $el = $(".container");
      _.each(data, function(title) {
        var preview = new Section(title);
        $el.append( preview.render() );
      });

    $("h2").on("click", function(e) {
       var title = $(e.currentTarget);
       $(".paragraph").hide(2000);
       title.siblings(".paragraph").show(2000);
     });
    },

    error: function() {
      console.log("failed to load data.json");
      // console.log(a,b,c);
    }
  });
});
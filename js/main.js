$(function(){
  $.ajax("data.json", {
    success: function(data) {
      var $el = $(".container");
      _.each(data, function(title) {
        var preview = new Section(title);
        $el.append( preview.render() );
      });
    },
    error: function() {
      console.log("failed to load data.json");
      // console.log(a,b,c);
    }
  });
});
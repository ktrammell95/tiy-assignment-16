$(function(){
  $.ajax("data.json", {
    success: function(data) {
      console.log(data)
      window.data = data;
    },
    error: function() {
      console.log("failed to load data.json");
      // console.log(a,b,c);
    }
  });
});
var Section = (function(){
  var template = JST["page-info"];
  function Section(data) {
    this.data = data;
  }

  Section.prototype = {
    render: function() {
      return $(template(this.data));
    }
  };
  return Section;

})();


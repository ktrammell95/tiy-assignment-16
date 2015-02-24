var Section = (function(){

  var template = JST["page-info"];

  function Section(data) {
    this.data = data;
  }

  Section.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

  return Section;
  console.log(Section)

})();


var SectionHeader = (function() {

  function SectionHeader(data) {
    this.data = data;
  }

  SectionHeader.prototype = {

    render: function() {
      var $el = $("<h2 />");
      _.each(this.data, function(title) {
        var header = new Section(title);
        $el.append( header.render() );
      });
      return $el;
      console.log($el)
    }

  }

  return SectionHeader;

})();
this["JST"] = this["JST"] || {};
this["JST"]["page-info"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"section\">\n   <h2 src="
    + escapeExpression(((helper = (helper = helpers.header_title || (depth0 != null ? depth0.header_title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"header_title","hash":{},"data":data}) : helper)))
    + " class=\"header\"></h2>\n   <p class=\"paragraph\" src="
    + escapeExpression(((helper = (helper = helpers.paragraph || (depth0 != null ? depth0.paragraph : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paragraph","hash":{},"data":data}) : helper)))
    + "></p>\n</div>";
},"useData":true});
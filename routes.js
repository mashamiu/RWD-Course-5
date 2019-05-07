Router.configure({
  layoutTemplate: "ApplicationLayout"
});

Router.route('/', function () {
  this.render("header", {to: "header"});
  this.render("doodlewall");
  this.render("canvas", {to: "canvas"});
  this.render("palette", {to: "palette"});
});


Router.route('/about', function () {
  this.render("about");
});




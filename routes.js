Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/about', function () {
  this.render('about');
});
Router.route('/contact', function () {
  this.render('contact');
});

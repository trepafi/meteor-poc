Router.configure({
    layoutTemplate: 'bodyApp'
});

Router.route('/', function () {
    this.render('home')
}, {
    name: 'home'
});

Router.route('/semantic-ui', function () {
    this.render('semanticui');
}, {
    name: 'ui'
});

Router.route('/mapbox');

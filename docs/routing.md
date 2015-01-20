Routing
==
I use iron:router which is a router that works in server and client side

## Add / Update
```
$ meteor add iron:router
$ meteor update iron:router
```

## Config
-  Configurate a main layout
```
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
```

- Create a route
```
Router.route('/', function () {
    this.render('Home');
});
```

- Use a layout to reuse some templates
```
Router.route('/post/:id', function () {
    this.layout('PostsLayout');
});
```

- Use a different name for the route
```
Router.route('/semantic-ui', function () {
    this.render('semanticui');
}, {
    name: 'ui'
});
```

- Use route in templates
```
<a href="{{pathFor route='ui'}}">Semantic UI</a>
```

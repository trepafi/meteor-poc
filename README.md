Testing Meteor
==
First steps and testing Meteor and trepafi's Meteor packages

## Creating an app
```
meteor create testing-meteor
```

this will create the following structure

```
➜  testing-meteor  tree
.
|-- testing-meteor.css
|-- testing-meteor.html
`-- testing-meteor.js

0 directories, 3 files
```

However we can ended up with something better

## Packages

- **Listing packages**
    ```
    meteor list
    ```

    **Output**
    ```
    autopublish      1.0.2  Publish the entire database to all clients
    insecure         1.0.2  Allow all database writes by default
    meteor-platform  1.2.1  Include a standard set of Meteor packages in your app
    ```

    Take in mind that for **production ready** state we need to remove `autopublish` package


## Documentation
- [Semantic UI](./docs/semantic-ui.md)
- [Rooting](./docs/routing.md)

## TODO
- [ ] Add iron router
- [ ] Add trepafi:mapbox package

Testing Meteor
==
First steps and testing Meteor and trepafi's Meteor packages

## Documentation summary
- [Rooting](./docs/routing.md)
- [Semantic UI](./docs/semantic-ui.md)
- [MapBox.js](./docs/mapbox.md)


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

However we will ended up with something better

## Running
```
meteor
```

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

## TODO
- [x] Add iron router
- [x] Add trepafi:mapbox package

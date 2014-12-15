# torque-reference

Torque-reference is a JSON specification of the CartoCSS vendor style options that [Torque](https://github.com/CartoDB/torque) provides. Inspired by [mapnik-reference](https://github.com/mapnik/mapnik-reference), *it is useful for building parsers, tests, compilers, and syntax highlighting/checking for languages.*

## Meaning

The structure of the file is as such:

* `version`: the version of Torque targeted. Same as the containing directory.
* `style`: properties of the `Style` XML element
* `layer`: properties of the `Layer` XML element
* `symbolizers/*`: properties that apply to **all** symbolizers
* `colors`: named colors supported by Torque

## Using

This is a valid [npm](http://npmjs.org/) module and therefore can easily be used with
[node.js](http://nodejs.org/).

    npm install torque-reference

The file can then be parsed with any of the many [json parsers](http://www.json.org/).

## Testing

```
npm test
```
# doot-loader

> Auto-variablizing webpack loader to load [Twig](https://github.com/justjohn/twig.js/wiki) template files. Based on [dootify](https://github.com/kociolekt/dootify).

## installation
Install from npm:
```
$ npm install doot-loader
```

## usage
Use it as webpack loader module:
```js
module: {
  loaders: [
    {
      test: /\.twig$/,
      loader: 'doot?option1=1'
    }
  ]
}
```

Twig template files (.tmt, .tpl, .html, .twig)
```html
<!-- template.html -->
<div class="example">
  {{content}}
  <div class="button" data-dootify="exampleButton"></div>
</div>
```

Require inside main.js and invoke like Twig template. Use it like DOM Element with cached nodes in object fields.
```js
// main.js
var template = require('../../templates/template.html.twig'); // Twig template

// Append template with javascript
var templateDOM = template({content: 'Hello'}); // HTML DOM DocumentFragment
document.body.appendChild(templateDOM);

// Bind events
var templateButton = templateDOM.exampleButton // Cached HTML DOM Element Object
templateButton.addEventListener('click', function(){
  alert(1);
});
```

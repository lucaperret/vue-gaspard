# Vue-gaspard

[![Greenkeeper badge](https://badges.greenkeeper.io/lucaperret/vue-gaspard.svg)](https://greenkeeper.io/)
> DOM helpers plugin for Vue.js using [gaspard](https://github.com/lucaperret/gaspard)

[![npm version](https://badge.fury.io/js/vue-gaspard.svg)](https://badge.fury.io/js/vue-gaspard)
[![vue-gaspard size](https://badges.herokuapp.com/size/npm/vue-gaspard/dist/vue-gaspard.umd.js?gzip=true)](https://www.npmjs.com/package/vue-gaspard)


## Getting started

### Installing

npm | yarn | bower | unpkg
------------ | ------------- | ------------- | -------------
npm install vue-gaspard | yarn add vue-gaspard | bower install vue-gaspard |  [vue-gaspard.umd.js](https://unpkg.com/vue-gaspard)

### Usage

In main.js:
```javascript
import Vue from 'vue'
import VueGaspard from 'vue-gaspard'

Vue.use(VueGaspard)
```

In any of your components (e.g. [examples](demo/src/App.vue)):
```javascript
import Vue from 'vue'

export default {
  mounted () {
    // Use gaspard global
    Vue.$gaspard.addClass(document.documentElement, 'container')
    // On his component instance
    this.$g.css('border', '1px dashed #eb592d')
    // On a referenced child element
    this.$g
      .find(this.$refs.childElement)
      .attr('title', 'gaspard !')
    // On a referenced child component
    this.$refs.childComponent.$g.css('border', '1px dotted #eb592d')
  }
}
```

Or use gaspard within a `<script>`
```html
<div id="app">Hello world !</div>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/gaspard"></script>
<script src="https://unpkg.com/vue-gaspard"></script>
<script>
  var app = new Vue({
    el: '#app',
    mounted () {
      this.$g.css('background-color', 'red')
    }
  })
</script>
```


### Options

You can optionally pass in some options:

| Name           | Type    | Default      | Description |
| ---           | ---     | ---          | ---         |
| globalNamespace          | String  | $gaspard         | Global access name |
| instanceNamespace          | String  | $g          | Instance access name |

Override defaults example:
```javascript
Vue.use(VueGaspard, {
  globalNamespace: '$dom',
  instanceNamespace: '$dom'
})
```

### API

[gaspard's documentation](https://github.com/lucaperret/gaspard/blob/master/docs/API.md#srccollectionjs)


## Contribute

```bash
# Install dependencies
cd vue-gaspard
npm install

# Build main library
npm run build

# Run demo
npm run dev
```

## Licensing

MIT License Copyright (c) 2017 Luca Perret

<template>
  <div id="app">
    <div ref="container">
      <h1 ref="title">Vue-gaspard</h1>
      <h2>DOM helpers on components</h2>
      <a ref="link">Helpful is vue-gaspard!</a>
      <child ref="child" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    child: {
      render (createElement) {
        return createElement('img', {
          style: {
            display: 'block',
            margin: '0 auto'
          },
          attrs: {
            src: 'https://github.com/lucaperret/gaspard/raw/master/gaspard.png'
          }
        })
      }
    }
  },
  mounted () {
    // Use gaspard global
    Vue.$gaspard.addClass(document.documentElement, 'container')
    Vue.$gaspard.fadeIn(this.$refs.title, 2000)
    // Or on this component instance
    this.$g.css('border', '1px dashed #eb592d')
    // Find a child node and perform actions on it
    this.$g
      .find('h1')
      .css('color', '#eb592d')
      .addClass('big')
    // On a referenced child element
    this.$g
      .find(this.$refs.link)
      .attr('href', 'https://github.com/lucaperret/vue-gaspard')
    // On a referenced child component
    this.$refs.child.$g.css('border', '1px dotted #eb592d')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em;
}
.container {
  width: 60%;
  margin: 0 auto;
}
.btnOrange {
  background-color: #eb592d;
}
.big {
  font-size: 3em;
}
a {
  color: #eb592d
}
</style>

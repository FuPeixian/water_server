<template>
  <div id="app">
    11111
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.onChangeWindowSize()
  },
  methods: {
    onChangeWindowSize(){
      window.onresize = () =>{
        const rootFontSize = window.innerWidth * (18/750)
        document.getElementsByTagName('html')[0].style.fontSize = `${rootFontSize}px`
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

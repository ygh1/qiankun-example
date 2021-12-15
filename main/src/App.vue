<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">home</router-link>
      <router-link to="/app-react">react</router-link>
      <router-link to="/app-vue2">vue</router-link>
      <router-link to="/app-angular">angular</router-link>
      <router-link to="/app-purehtml">purehtml</router-link>
      <router-link to="/about">手动加载</router-link>
    </div>
    <router-view></router-view>
    <div id="micro-container"></div>
  </div>
</template>

<script>


export default {
  name: 'App',
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
.nav {
  display: flex;
  justify-content: center;
}
.nav a {
  margin-right: 20px;
}
</style>

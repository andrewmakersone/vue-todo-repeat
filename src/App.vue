<template>
  <div id="app">
    <h1>Your task app:</h1>
    <hr>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">About</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: forestgreen;
    }
  }
}
</style>

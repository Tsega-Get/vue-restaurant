<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add-restorant">Add Restaurant</router-link> |
       <a v-on:click="logoutAction" href="#">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logoutAction() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="css" scoped>
#app {
  background-color: rgb(212, 207, 207);
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
body {
  padding: 0;
  margin: 0;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 15px;
  text-decoration: none;
}
#nav a:hover {
  background-color: white;
  font-weight: bold;
  color: #0867c5;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

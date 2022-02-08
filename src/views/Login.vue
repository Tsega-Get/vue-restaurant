<template>
  <div>
  <h1 class="header">Login</h1>
    <form @submit.prevent="handleLogin"> 
      <label>Email:</label>
      <input type="email" v-model="email" placeholder="Email" />

      <label>Password:</label>
      <input type="password" v-model="password" placeholder="password" />

      <button class="submit">Login</button>
      <router-link to="/sign-up">SignUp</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      // do something
     
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&&password=${this.password}`
      );
        console.log("login -->", result);

        if (result.status == 200 && result.data.length>0) {
        //alert("sign up done");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name:'Home'})
      }
    },
  },
};
</script>

<style src="../assets/styles/signUpStyle.css"></style>
<style scoped>
.header{ 
  margin-left: 40%;
  
}
</style>

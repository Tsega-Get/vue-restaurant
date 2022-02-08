<template>

  <div>
  <h1 class="header">Sign Up</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input type="text" v-model="name" placeholder="Name" />

      <label>Email:</label>
      <input type="email" v-model="email" placeholder="Email" />

      <label>Password:</label>
      <input type="password" v-model="password" placeholder="password" />

      <div class="terms">
        <input type="checkbox" v-model="terms" />
        <label>Accept terms and values</label>
      </div>

      <!-- ----------------  -->

      <button class="submit">Create Acount</button>
      <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false,
    };
  },
  methods: {
    async handleSubmit() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        //alert("sign up done");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name:'Home'})
      }
      // console.warn("form submited ",this.name,this.email,this.password,this.terms);
    },
  },
 mounted(){
  let user = localStorage.getItem('user-info');
   if (user) {
       this.$router.push({name:'Home'});
   }
  }
};
</script>


<style src="../assets/styles/signUpStyle.css"></style>
<style scoped>
.header{
 margin-left: 40%;
}
</style>

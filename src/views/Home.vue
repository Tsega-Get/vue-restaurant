<template>
  <div>
    <Header />
    <h1>Hallo {{ name }}, this is home page</h1>
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Adress</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="'/update-restaurant/' + item.id"
            >Update</router-link
          >
          <button class="btn-del" v-on:click="deleteRestaurant(item.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      name: "....",
      restaurant: [],
    };
  },
  components: { Header },
  methods: {
    async deleteRestaurant(id) {
      console.log(id);
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status==200) {
        this.mounted();
      }
    },
  }, 
  async mounted() { 
     let user = localStorage.getItem("user-info");
    var x = JSON.parse(user);
    var b = x[0].name;
    console.log(b);
    this.name = b;

    if (!user) {
      this.$router.push({ name: "Signup" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result);
    this.restaurant = result.data;
  },
};
</script>
<style scoped>
td {
  width: 160px;
  height: 30px;
}
.btn-del {
  float: right;
  margin-right: 20px;
}
</style>

<template>
  <div>
    <Header />
    <h1>Add Restaurant page</h1>

    <form class="add">
      <label>Name:</label>
      <input type="text" v-model="Restaurant.name" placeholder="Name" />

      <label>Contact:</label>
      <input type="text" v-model="Restaurant.contact" placeholder="Contact" />

      <label>Address:</label>
      <input type="text" v-model="Restaurant.address" placeholder="Address" />

      <button class="submit" v-on:click="addrestorant">Add Restorant</button>
      <router-link to="/">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "../components/Header.vue";
// @ is an alias to /src

export default {
  name: "Add",
  components: { Header },
  data() {
    return {
      Restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
  async  addrestorant() {
      console.warn(this.Restaurant);

      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.Restaurant.name,
        address: this.Restaurant.address,
        contact: this.Restaurant.contact,
      });
      console.warn("Result ", result);
      if (result.status==201) {
        this.$router.push({name:'Home'})
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
  },
};
</script>
<style scoped>
form {
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  border-radius: 10px;
  background: rgb(207, 217, 219);
  text-align: left;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid#ddd;
  color: #555;
}
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: white;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  align-content: center;
  margin-left: 100px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

/** tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100%;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>

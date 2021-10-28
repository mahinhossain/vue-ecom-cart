<template>
  <div>
    <nav class="navbar navbar-expand-md bg-dark nav-dark p-0 m-0">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse p-0" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto p-0">
          <!-- <li class="nav-item">
            <a class="nav-link">Hi, {{ JSON.parse(userinfo)[0].name }}</a>
          </li> -->
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">ApiCall</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/form">Form</router-link>
          </li>

          <li class="nav-item" v-if="logintrue">
            <a class="nav-link" v-on:click="handlelogout()">Logout </a>
          </li>
          <li class="nav-item" v-else>
            <router-link to="/login">Login</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learning....
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item text-dark bg-white"
                to="/dynamic"
                >Dynamic Component</router-link
              >
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <span class="badge badge-danger btn-sm rounded"
                ><router-link to="/cart"
                  >Cart
                  <span class="ml-1"> {{ Cart.length }}</span></router-link
                >
              </span></a
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="search"
            @input="handleSearch(search)"
          />
        </form>
      </div>
    </nav>
  </div>
</template><script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      logintrue: "",
      search: "",
      user: [],
    };
  },
  methods: {
    ...mapActions(["handleSearch"]),
    handlelogout() {
      alert("");
      localStorage.removeItem("userinfo");
    },
  },

  mounted() {
    // this.userinfo = localStorage.getItem("user-info");
  },
  computed: {
    ...mapGetters(["Cart"]),
  },
};
</script><style scoped>
ul li a {
  font-size: 20px;
  text-decoration: none;
  padding: 10px;
}
ul li a:only-child {
  color: rgb(255, 249, 249);
}
nav {
  background-color: rgb(67, 123, 243);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
<template>
  <div v-if="loading" class="container d-flex justify-content-center mt-5">
    <div class="d-flex align-items-center mt-5">
      <h2 class="text-danger">Loading.....</h2>
      <div
        class="spinner-border ml-auto text-danger"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  </div>

  <div v-else class="container-fluid">
    <div class="row">
      <div class="col-md-3 py-3" v-for="item in filterData" v-bind:key="item">
        <!-- <li>{{ item.name }}</li> -->

        <div class="card shadow-lg">
          <!-- <router-link to="/profile/{{item._id}}"> </router-link> -->

          <router-link :to="{ name: 'details', params: { details: item._id } }">
            <img class="card-img-top w-75" :src="item.img" alt="Card image cap"
          /></router-link>

          <div class="card-body">
            <p class="card-text text-success text-truncate">
              Name:{{ item.name }}
            </p>
            <h5 class="card-text text-danger text-truncate">
              Price: <strong>$</strong>{{ item.price }}
            </h5>
            <button
              class="float-right btn btn-warning btn-sm"
              @click="handlecart(item)"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Profile",
  props: {
    msg: String,
  },
  data() {
    return { data: "", fakedata: "", search: "" };
  },

  mounted() {
    this.allproducts;
  },
  computed: {
    console: () => console,
    ...mapGetters(["searchfrommut", "loading", "mysearxh", "allproducts"]),

    filterData: function () {
      return this.allproducts.filter((item) =>
        item.name.toLowerCase().includes(this.mysearxh.toLowerCase())
      );
    },
  },
  methods: {
    ...mapMutations(["addToCounter"]),
    ...mapActions(["getproducts", "handledelete", "handlecart"]),
  },
  created() {
    this.getproducts();
  },
};
</script>


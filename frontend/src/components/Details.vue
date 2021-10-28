<template>
  <div>
    <!-- <div class="d-flex justify-content-center text-danger mt-5" v-if="loding">
      <div class="spinner-border" role="status">f,df,fdl,fdl,flf,ld,l,lg,fd,fl,g;df,g;lgfg,l,asdasdfasdfasdfsdfaf
        may allaj ahelp upiou do upu eant to br ae ago with me ai am the doc tor ahs ahe is yoy aare you deft of 
        the citu no toyou cnanot go eitj out my per jmjiasion im the mon sre o f your life olife gose gie e ae e e   f df  f f jfkkfjfhdfhffjfjfj
        <span class="sr-only">Loading..........</span>
      </div>
    </div> -->

    <div class="container py-4 my-4 mx-auto d-flex flex-column">
      <div class="header">
        <div class="row r1">
          <div class="col-md-9 abc">
            <p class="text-success">{{ singleproducts.name }}</p>
          </div>
          <div class="col-md-3 text-right pqr">
            <i class="fa fa-star"></i><i class="fa fa-star"></i
            ><i class="fa fa-star"></i><i class="fa fa-star"></i
            ><i class="fa fa-star"></i>
          </div>
          <p class="text-right para">Based on 250 Review</p>
        </div>
      </div>
      <div class="container-body mt-4">
        <div class="row r3">
          <div class="col-md-5 p-0 klo">
            <ul>
              <li>100% Quality</li>
            </ul>
          </div>
          <div class="col-md-7">
            <img :src="singleproducts.img" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="footer d-flex flex-column mt-5">
        <div class="row r4">
          <div class="col-md-2 myt des"><a href="#">Description</a></div>
          <div class="col-md-2 myt">
            <a>Review </a>
            <div
              class="bg-light p-3 mb-2"
              v-for="item in review"
              :key="item.name"
            >
              <div class="p-0 m-0">{{ item.name }}</div>
              <div class="p-0 m-0">{{ item.comment }}</div>
            </div>
          </div>
          <div class="col-md-2 mio offset-md-4">
            <button
              class="btn btn-success rounded border-0"
              @click="handlecart(singleproducts)"
            >
              Add to Cart
            </button>
          </div>
          <div class="col-md-2 myt">
            <button type="button" class="btn btn-outline-warning">
              <a href="#">BUY NOW</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

// import axios from "axios";

import { useRoute } from "vue-router";
import axios from "axios";
export default {
  data() {
    return {
      productID: "",

      singleproducts: "",
      loading: false,
      addedItemInCart: [],
      review: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost:3004/review")
      .then((res) => (this.review = res.data))
      .catch((err) => console.log(`err`, err));
    this.getproducts();
    const route = useRoute();

    this.productID = route.params.details;
    this.singleproducts = this.allproducts.find(
      (item) => item._id == this.productID
    );
  },
  computed: {
    console: () => console,
    ...mapGetters(["allproducts", "mycounter"]),
  },
  methods: {
    ...mapMutations(["addToCounter"]),
    ...mapActions([
      "getproducts",
      "handledelete",
      "handlesearch",
      "handlecart",
    ]),
  },
  created() {
    this.getproducts();
  },
};
</script>

<style scoped>
.container {
  background: #fff !important;
  border: none;
  border-radius: none;
}

.abc {
  padding-left: 40px;
}

.pqr {
  padding-right: 70px;
  padding-top: 14px;
}

.para {
  float: right;
  margin-right: 0;
  padding-left: 80%;
  top: 0;
}

.fa-star {
  color: yellow;
}

li {
  list-style: none;
  line-height: 50px;
  color: #000;
}

.col-md-2 {
  padding-bottom: 20px;
  font-weight: bold;
}

.col-md-2 a {
  text-decoration: none;
  color: #000;
}

.col-md-2.mio {
  font-size: 12px;
  padding-top: 7px;
}

.des::after {
  content: ".";
  font-size: 0;
  display: block;
  border-radius: 20px;
  height: 6px;
  width: 55%;
  background: yellow;
  margin: 14px 0;
}

.r4 {
  padding-left: 25px;
}

.btn-outline-warning {
  border-radius: 0;
  border: 2px solid yellow;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  width: 70%;
}

@media screen and (max-width: 620px) {
  .container {
    width: 98%;
    display: flex;
    flex-flow: column;
    text-align: center;
  }

  .des::after {
    content: ".";
    font-size: 0;
    display: block;
    border-radius: 20px;
    height: 6px;
    width: 35%;
    background: yellow;
    margin: 10px auto;
  }

  .pqr {
    text-align: center;
    margin: 0 30px;
  }

  .para {
    text-align: center;
    padding-left: 90px;
    padding-top: 10px;
  }

  .klo {
    display: flex;
    text-align: center;
    margin: 0 auto;
    margin-right: 40px;
  }
}
</style>
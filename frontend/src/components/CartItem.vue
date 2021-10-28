<template>
  <div class="container">
    <div>
      <h1 className="px-2 pt-2 pb-3 space-y-1 text-warning text-center">
        Your Cart
      </h1>
      <div v-for="(item, index) in Cart" :key="item._id" class="border-top">
        <div className="row border-bottom p-1">
          <div className="col-md-4 ">
            <img :src="item.img" alt="" />
          </div>

          <div className="col-md-8 row">
            <div className="col-md-6">
              <p>{{ item.name }}</p>
              <br />
              <p>Seller:{{ item.seller }}</p>
              <p class="text-danger">${{ item.price }}</p>
              <button
                className="btn btn-warning rounded border-0  "
                @click="handleRemove(index)"
              >
                Remove from cart
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="font-weight-bold btn btn-secondary"
                :disabled="item.quantity == 1"
                @click="handleDecrease(item)"
              >
                -
              </button>
              <h4>Quantity:{{ item.quantity }}</h4>
              <button
                className="font-weight-bold btn btn-success "
                @click="handleIncrease(item)"
              >
                +
              </button>
              <h4>Price:{{ item.price * item.quantity }}</h4>
            </div>
          </div>
        </div>
      </div>
      <h4 class="text-danger">Total Price:${{ totalprice }}</h4>
      <button
        className="btn btn-warning float-right mb-5 mr-5 rounded "
        @click="goTocart"
      >
        Chekout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return { cart: [] };
  },
  computed: {
    console: () => console,
    ...mapGetters(["Cart"]),

    totalprice: function () {
      return this.Cart.reduce(
        (total, producr) => total + producr.price * producr.quantity,
        0
      );
    },

    // cartquan: function (item) {
    //   return this.Cart.map((cartItem) => {
    //     if (cartItem.key == item.key) {
    //       return { ...cartItem, quantity: cartItem.quantity + 1 };
    //     }
    //     return cartItem;
    //   });
    // },
  },
  methods: {
    handleRemove(index) {
      this.Cart.splice(index, 1);
    },
    // ...mapMutations(["myCart"]),
    handleDecrease(item) {
      // if (item.quantity == 0) {
      //   item.quantity = 1;
      //   return false;
      // }
      item.quantity = item.quantity - 1;
    },
    handleIncrease(item) {
      item.quantity = item.quantity + 1;

      // this.Cart.map((cartItem) => {
      //   if (cartItem.key == item.key) {
      //     return { ...cartItem, quantity: cartItem.quantity + 1 };
      //   }
      //   return cartItem;
      // });
      console.log(`object`, this.Cart);
    },

    goTocart() {
      if (this.Cart.length == 0) {
        this.$swal("Please Add some Item", "error", "error");
        return false;
      } else {
        this.$router.push("/checkout");
      }
    },
  },
};
</script>

<style></style>

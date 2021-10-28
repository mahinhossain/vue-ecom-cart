<template>
  <div className="container">
    <div class="card">
      <div class="card-body">
        <div class="row upper"></div>
        <div class="row">
          <div class="col-md-6">
            <div class="right border">
              <div class="header1">Order Summary</div>
              <p>Total items</p>

              <div
                class="row item shadow-lg bg-light"
                v-for="item in Cart"
                :key="item._id"
              >
                <div class="col-4 align-self-center">
                  <img class="img-fluid" :src="item.img" />
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <b>Price{{ item.price }}</b>
                  </div>
                  <div class="row text-muted text-truncate">
                    {{ item.name }}
                  </div>
                  <div class="row">quantity:{{ item.quantity }}</div>
                </div>
              </div>

              <div class="row lower">
                <div class="col text-left">Subtotal</div>
                <div class="col text-right"></div>
              </div>
              <div class="row lower">
                <div class="col text-left">Delivery</div>
                <div class="col text-right">Free</div>
              </div>
              <div class="row lower">
                <div class="col text-left">
                  <b>Total to pay</b>
                </div>
                <div class="col text-right">
                  <b>$ cart.totalprice</b>
                </div>
              </div>
              <div class="row lower">
                <div class="col text-left">
                  <a href="#">
                    <u>Add promo code</u>
                  </a>
                </div>
              </div>

              <button class="btn1">Place order</button>
              <p class="text-muted text-center">
                Complimentary Shipping Returns
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left border">
              <div class="row">
                <span class="header1">Payment</span>
                <div class="icons">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" />
                  <img
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/maestro.png"
                  />{" "}
                </div>
              </div>
              <form1>
                <span>Cardholder's name:</span>
                <input placeholder="{loginInfo.name}" />
                <span>Card Number:</span>
                <input placeholder="0125 6780 4567 9909" />
                <div class="row">
                  <div class="col-md-4">
                    <span>Expiry date:</span> <input placeholder="YY/MM" />
                  </div>
                  <div class="col-md-4">
                    <span>CVV:</span> <input id="cvv" />
                  </div>
                </div>

                <input type="checkbox" id="save_card" class="align-left" />
                <label for="save_card">Save card details to wallet</label>
              </form1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",

      userinfo: "",
    };
  },
  computed: {
    ...mapGetters(["Cart"]),
  },
  methods: {
    handlesubmit(e) {
      e.preventDefault();
      console.warn(`this.name`, this.name);
      alert(this.name);
      this.userinfo = {
        name: this.name,
        email: this.email,
      };

      localStorage.setItem("userinfo", JSON.stringify(this.userinfo));
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    let logedUser = localStorage.getItem("user-info");
    if (!logedUser) {
      this.$router.push({ name: "login" });
    }

    // if (condition) {
    //   this.$router.push({ name: "home" });
    // }
  },
};
</script>

<style scoped>
/* body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 34);
  font-size: 0.8rem;
} */

.card1 {
  max-width: 1000px;
  margin: 2vh;
}

.card1-top {
  padding: 0.7rem 5rem;
}

.card1-top a {
  float: left;
  margin-top: 0.7rem;
}

#logo {
  font-family: "Dancing Script";
  font-weight: bold;
  font-size: 1.6rem;
}

.card1-body {
  padding: 0 5rem 5rem 5rem;
  background-image: url("https://i.imgur.com/4bg1e6u.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .card1-body {
    padding: 0 1rem 1rem 1rem;
    background-image: url("https://i.imgur.com/4bg1e6u.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card1-top {
    padding: 0.7rem 1rem;
  }
}

.row {
  margin: 0;
}

.upper {
  padding: 1rem 0;
  justify-content: space-evenly;
}

#three {
  border-radius: 1rem;
  width: 22px;
  height: 22px;
  margin-right: 3px;
  border: 1px solid blue;
  text-align: center;
  display: inline-block;
}

#payment {
  margin: 0;
  color: blue;
}

.icons {
  margin-left: auto;
}

form span {
  color: rgb(179, 179, 179);
}

form1 {
  padding: 2vh 0;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

.header1 {
  font-size: 1.5rem;
}

.left {
  background-color: #ffffff;
  padding: 2vh;
}

.left img {
  width: 2rem;
}

.left .col-4 {
  padding-left: 0;
}

.right .item {
  padding: 0.3rem 0;
}

.right {
  background-color: #ffffff;
  padding: 2vh;
}

.col-8 {
  padding: 0 1vh;
}

.lower {
  line-height: 2;
}

.btn1 {
  background-color: rgb(23, 4, 189);
  border-color: rgb(23, 4, 189);
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin: 4vh 0 1.5vh 0;
  padding: 1.5vh;
  border-radius: 0;
}

.btn1:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
}

.btn1:hover {
  color: white;
}

a {
  color: black;
}

a:hover {
  color: black;
  text-decoration: none;
}

input[type="checkbox"] {
  width: unset;
  margin-bottom: unset;
}

#cvv {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.575),
      rgba(255, 255, 255, 0.541)
    ),
    url("https://img.icons8.com/material-outlined/24/000000/help.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}

#cvv:hover {
}
</style>

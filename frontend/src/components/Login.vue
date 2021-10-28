<template>
  <div class="mt-3 p-3 signup">
    <h3>Login</h3>

    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Email</label
        >
        <div class="col-sm-7">
          <input
            required
            type="email"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Password</label
        >
        <div class="col-sm-7">
          <input
            required
            type="password"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>

    <!-- sdsdsdsdsds -->
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label
          for="colFormLabel"
          class="col-sm-2 col-form-label col-form-label"
        ></label>
        <div class="col-sm-7 d-flex justify-content-around">
          <button
            class="btn btn-light btn-sm border"
            @click.prevent="submitform()"
          >
            Submit
          </button>
          <button class="btn btn-sm" id="google-signin-button">
            Google SignIn
          </button>
          <button
            class="btn btn-light btn-sm border"
            @click.prevent="gotosignup()"
          >
            Sign Up here...
          </button>
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        password: "",
        email: "",
      },
      error: [],
      formvalid: false,
    };
  },
  methods: {
    async submitform() {
      if (this.form.email.length < 4 || this.form.password.length < 4) {
        this.$swal("Enter Valid name or password", "hello", "error");
        // this.$swal("Hello world!");

        return false;
      }
      console.log(`this.form`, this.form);
      await axios
        .get(
          `http://localhost:3004/user?email=${this.form.email}&password=${this.form.password}`,
          this.form
        )
        .then((res) => {
          console.log(`res`, res);
          if (res.data.length > 0) {
            localStorage.setItem("user-info", JSON.stringify(res.data));
            this.$router.push({ name: "home" });
          } else {
            this.$swal("Failed !", "", "error");
          }
        })
        .catch((err) => console.log(`err`, err));
    },
    gotosignup() {
      this.$router.push({ name: "signup" });
    },
  },

  mounted() {
    let logedUser = localStorage.getItem("user-info");
    if (logedUser) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.signup {
  justify-content: space-between;
}
</style>
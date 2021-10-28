<template>
  <div class="d-flex justify-content-center align-items-center">
    <div>
      <img
        class="
          img-fluid img-thumbnail
          text-center
          card-img
          d-flex
          justify-content-center
          align-items-center
          w-25
        "
        src="https://www.kindpng.com/picc/m/273-2738790_login-login-logo-hd-png-download.png"
      />
      <form class="" @submit="(e) => handlesubmit(e)">
        <input
          type="text"
          class="form-control mt-3 p-3"
          placeholder="Enter Name"
          v-model="name"
        />

        <input
          type="text"
          class="form-control mt-3 p-3"
          placeholder="Enter Email"
          v-model="email"
        />
        <input
          type="password"
          class="form-control mt-3 p-3"
          placeholder="Enter Password"
          v-model="password"
        />
        <button class="btn btn-success" type="sbmit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",

      userinfo: "",
    };
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
    let user = localStorage.getItem("userinfo");
    console.log(`user`, user);

    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style></style>

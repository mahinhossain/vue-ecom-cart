<template>
  <body>
    <h1>404</h1>
    <h1>Not Found</h1>
  </body>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },

  methods: {
    handlecart() {
      alert("dsd");
    },
  },
  mounted() {
    //
  },
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  height: 520px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
h1 {
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: fantasy;
}
</style>
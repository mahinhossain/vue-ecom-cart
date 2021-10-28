<template>
  <div>Dynamic</div>
  <div class="d-flex justify-content-around">
    <button class="btn btn-success" @click="tab = 'Java'">Java</button>
    <button class="btn btn-success" @click="tab = 'Php'">Node js</button>
    <button class="btn btn-success" @click="tab = 'Node'">Php</button>
  </div>

  <component :is="tab" name="mahin" />
</template>

<script>
import Java from "./dynamic/java.vue";
import Php from "./dynamic/Php.vue";
import Node from "./dynamic/Nodejs.vue";
export default {
  components: {
    Java,
    Php,
    Node,
  },
  data() {
    return {
      tab: "java",

      name: "mahin Hossain",
    };
  },
};
</script>



<style>
</style>
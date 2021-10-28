<template>
  <h2 class="text-center">Form Validation</h2>
  <div
    class="alert alert-success text-center font-weight-bold"
    role="alert"
    v-show="formvalid"
  >
    Success
  </div>
  <div
    class="
      alert alert-danger
      row
      justify-content-around
      text-danger
      border-top border-bottom
      text-capitalize
      font-weight-bold
    "
    role="alert"
    v-show="error.length"
  >
    <div v-for="err in error" :key="err">{{ err }} Not Valid</div>
  </div>

  <div class="card-body shadow container">
    <form class="">
      <!-- <input type=" text" placeholder="Enter name" class="form-control" /> -->
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Name</label
        >
        <div class="col-sm-7">
          <input
            type="text"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="Name"
            v-model.lazy="form.name"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >password</label
        >
        <div class="col-sm-7">
          <input
            type="password"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="password"
            v-model="form.password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Country</label
        >
        <div class="col-sm-7">
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            v-model="form.country"
          >
            <option value="BD">BD</option>
            <option value="IND">IND</option>
            <option value="PAK">PAK</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Gender</label
        >
        <div class="col-sm-7">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Male"
              v-model="form.gender"
            />
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Female"
              v-model="form.gender"
            />
            <label class="form-check-label" for="inlineRadio2">Female</label>
          </div>
        </div>
      </div>
      <!-- checkn=box -->
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Cirtificates</label
        >
        <div class="col-sm-7">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="SSC"
              v-model="form.certificate"
            />
            <label class="form-check-label" for="defaultCheck1"> SSC </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="HSC"
              v-model="form.certificate"
            />
            <label class="form-check-label" for="defaultCheck1"> HSC </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Honors"
              v-model="form.certificate"
            />
            <label class="form-check-label" for="defaultCheck1"> Honors </label>
          </div>
        </div>
      </div>

      <button @click.prevent="getdata" class="btn btn-success">Submit</button>
      <!--  -->
    </form>
  </div>
  {{ form }}
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      form: {
        name: "",
        password: "",
        country: "",
        gender: "",
        certificate: [],
      },
      error: [],
      formvalid: false,
    };
  },
  methods: {
    getdata() {
      this.error = [];
      for (const key in this.form) {
        if (this.form[key] == "" || this.form[key].length == 0) {
          this.error.push(key);
        }
      }
      if (this.error.length == 0) {
        this.formvalid = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>











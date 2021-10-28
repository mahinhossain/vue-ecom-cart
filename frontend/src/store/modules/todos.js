import axios from "axios";
import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";

const state = {
  counter: 11,
  counter2: 121,
  products: [],
  searchfrommut: "",
  cartItem: [],
  loading: true,
};
const actions = {
  handleSearch({ commit }, searchText) {
    commit("mySeach", searchText);
  },
  async handlecart({ commit }, item) {
    commit("myCart", item);
  },
  async getproducts({ commit }) {
    const response = await axios.get("http://localhost:4000/addproducts");

    commit("setloading", false);
    commit("setProducts", response.data);
  },
  async addProduct({ commit }, product) {
    const response = await axios.post(
      "http://localhost:7777/products",
      product
    );

    commit("newProducts", response.data);
  },
  async handledelete({ commit }, id) {
    await axios.delete("http://localhost:7777/products/" + id);

    actions.getproducts({ commit });

    commit("removeProducts", id);
  },
};
const mutations = {
  setloading(state, payload) {
    state.loading = payload;
  },
  addToCounter(state, payload) {
    state.counter = state.counter + payload;
  },
  myCart(state, payload) {
    payload.quantity = 1;

    const addd = state.cartItem.find((itm) => itm.name == payload.name);
    console.log("addd :>> ", addd);
    if (addd == undefined) {
      state.cartItem.push(payload);
      Swal.fire({
        text: "Item Added",
        icon: "success",
        timer: 1000,
      });
    } else {
      // alert("Already Added");
      Swal.fire({
        title: "Error!",
        text: "Item Already Added",
        icon: "error",

        timer: 1000,
      });
      return false;
    }
  },

  mySeach(state, payload) {
    console.log("test search", payload);

    state.searchfrommut = payload;
    // state.counter = state.counter + payload;
  },

  setProducts: (state, products) => (state.products = products),
  newProducts: (state, product) => state.products.unshift(product),
  newCart: (state, cartItem) => state.cartItem.push(cartItem),
  removeProducts: (state, id) =>
    state.products.filter((product) => product.id != id),
};

const getters = {
  mycounter: (state) => state.counter,
  allproducts: (state) => state.products,

  mysearxh: (state) => state.searchfrommut,
  Cart: (state) => state.cartItem,
  loading: (state) => state.loading,
};
export default {
  state,
  getters,
  mutations,
  actions,
};

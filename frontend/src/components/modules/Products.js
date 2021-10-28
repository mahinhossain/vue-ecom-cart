export const state = {
  products: [
    { name: "mahin", age: 21 },
    { name: "mahin", age: 21 },
    { name: "mahin", age: 21 },
    { name: "mahin", age: 21 },
  ],
};
export const getters = {
  allproducts: (state) => state.products,
};
// const mutations = {};
// const actions = {};

export default {
  state,
  getters,
  // actions,
  // mutations,
};

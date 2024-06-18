import { renderCheckoutHeader } from "./checkouts/checkoutHeader.js";
import { renderOrderSummary } from "./checkouts/orderSummary.js";
import { renderPaymantSummary } from "./checkouts/paymentSummary.js";
import '../data/car.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/beckend-practice.js';
//import '../data/cart-class.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }), 
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymantSummary();
});

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// }).then(() => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });
// }).then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymantSummary();
// });
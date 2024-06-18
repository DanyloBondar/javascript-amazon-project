import { renderCheckoutHeader } from "./checkouts/checkoutHeader.js";
import { renderOrderSummary } from "./checkouts/orderSummary.js";
import { renderPaymantSummary } from "./checkouts/paymentSummary.js";
import '../data/car.js';
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/beckend-practice.js';
//import '../data/cart-class.js';

async function loadPage() {
  await loadProductsFetch();
  await loadCart();

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymantSummary();
}

loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })

// ]).then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymantSummary();
// });

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
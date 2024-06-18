import { renderCheckoutHeader } from "./checkouts/checkoutHeader.js";
import { renderOrderSummary } from "./checkouts/orderSummary.js";
import { renderPaymantSummary } from "./checkouts/paymentSummary.js";
import '../data/car.js';
import { loadProducts } from "../data/products.js";
// import '../data/beckend-practice.js';
//import '../data/cart-class.js';
loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymantSummary();  
});
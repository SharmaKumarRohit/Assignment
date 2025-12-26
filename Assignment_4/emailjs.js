import showToast from "./toast.js";
import { cart } from "./cart.js";
import renderCart from "./cart.js";
import showServices from "./services.js";

(function () {
  emailjs.init({
    publicKey: "nPyJNKA5SvPj1E7wX",
  });
})();

function resetServices() {
  cart.length = 0;
  renderCart();
  showServices();
}

export default function sendMail() {
  const username = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const formBtn = document.querySelector(".form-btn");

  const totalAmount = cart.reduce((acc, item) => item.price + acc, 0);
  const order_name = cart.map((item) => item.name).join(", ");
  const order_price = cart.map((item) => item.price).join(", ");

  formBtn.innerHTML = `<div class="loader">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                      <div class="bar4"></div>
                      <div class="bar5"></div>
                      <div class="bar6"></div>
                      <div class="bar7"></div>
                      <div class="bar8"></div>
                      <div class="bar9"></div>
                      <div class="bar10"></div>
                      <div class="bar11"></div>
                      <div class="bar12"></div>
                    </div>`;

  emailjs
    .send("service_gtumeii", "template_vgqnis7", {
      username,
      email,
      phone,
      product_name: order_name,
      product_price: order_price,
      total_amount: totalAmount,
    })
    .then(
      function () {
        // Send Auto Response to User
        emailjs.send("service_gtumeii", "template_l53fohj", {
          to_email: email,
          username: username,
          product_name: order_name,
          product_price: order_price,
          total_amount: totalAmount,
        });

        showToast("✅ Email has been send successfully");
        document.getElementById("bookForm").reset();
        formBtn.innerHTML = "Book now";
        resetServices();
      },
      function () {
        showToast("❌ Failed to send. Try again!");
        formBtn.innerHTML = "Book now";
        resetServices();
      }
    );
}

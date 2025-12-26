import showToast from "./toast.js";
import { cart } from "./cart.js";

const username = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

export default function validateForm() {
  if (cart.length === 0) {
    showToast("⚠️ Add the items to the cart to book");
    return false;
  }

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";

  if (username.value.trim() === "" || username.value.length < 3) {
    nameError.textContent = "Please enter at least 3 characters.";
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Invalid email format.";
    return false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phone.value.match(phonePattern)) {
    phoneError.textContent = "Phone must be 10 digits.";
    return false;
  }
  return true;
}
